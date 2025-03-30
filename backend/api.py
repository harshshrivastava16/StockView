# api.py
from flask import Flask, jsonify
from flask_cors import CORS
import os
import time
import torch
import numpy as np
import random
import pandas as pd
from exp.exp_model import Exp_Model


fix_seed = 100
random.seed(fix_seed)
torch.manual_seed(fix_seed)
np.random.seed(fix_seed)

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return "DVA API"

# Define args container
class Args:
    root_path = "./data/2016"              
    checkpoints = "./checkpoints/"         
    sequence_length = 10                    
    prediction_length = None                
    target_dim = 1
    input_dim = 6
    hidden_size = 128
    embedding_dimension = 64

    # Diffusion process settings
    diff_steps = 1000
    dropout_rate = 0.1
    beta_schedule = "linear"
    beta_start = 0.0
    beta_end = 1.0
    scale = 0.1

    # Bidirectional VAE settings
    arch_instance = "res_mbconv"
    mult = 1
    num_layers = 2
    num_channels_enc = 32
    channel_mult = 2
    num_preprocess_blocks = 1
    num_preprocess_cells = 3
    groups_per_scale = 2
    num_postprocess_blocks = 1
    num_postprocess_cells = 2
    num_channels_dec = 32
    num_latent_per_group = 8

    # Training settings
    num_workers = 5
    patience = 3
    itr = 5
    train_epochs = 20
    batch_size = 16
    learning_rate = 0.0005
    weight_decay = 0.0000
    zeta = 0.5
    eta = 1.0
    time_epochs = True

    # Device settings
    use_gpu = True
    gpu = 0

def run_experiment():
    # Create an instance of Args with defaults
    args = Args()
    args.use_gpu = True if torch.cuda.is_available() and args.use_gpu else False
    if args.prediction_length is None:
        args.prediction_length = args.sequence_length

    Exp = Exp_Model
    results = pd.DataFrame(columns=["Ticker", "MSE", "StdDev"])
    train_setting = "tp{}_sl{}".format(args.root_path.split(os.sep)[-1], args.sequence_length)

    # Iterate through all tickers (files) in the data folder
    ticker_files = os.listdir(args.root_path)
    for idx, file in enumerate(ticker_files):
        args.data_path = file
        ticker = os.path.splitext(file)[0]
        all_mse = []
        for ii in range(args.itr):
            setting = args.data_path + "_" + train_setting
            exp = Exp(args)  # Create a new experiment
            print(f">>>>>>> Start training: {setting} (iteration {ii+1}) >>>>>>>>>")
            start_time = time.time()
            exp.train(setting)
            total_time = time.time() - start_time
            print(f"Training time: {total_time:.2f} seconds")
            print(f">>>>>>> Start testing: {setting} >>>>>>>>>")
            mse = exp.test(setting)
            all_mse.append(mse)
            torch.cuda.empty_cache()
        results = pd.concat([
            results, 
            pd.DataFrame({
                "Ticker": [ticker],
                "MSE": [np.mean(np.array(all_mse))],
                "StdDev": [np.std(np.array(all_mse))]
            })
        ], ignore_index=True)

    # Optionally save the results to a CSV file
    folder_path = "./results/"
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    csv_filename = folder_path + train_setting + ".csv"
    results.to_csv(csv_filename, index=False)
    print("Results saved to", csv_filename)
    
    
    return results.to_dict(orient="records")

@app.route('/api/stock-data', methods=['GET'])
def stock_data():
    try:
        data = run_experiment()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # If running in cmd, start the Flask server
    app.run(debug=True, port=5000)
