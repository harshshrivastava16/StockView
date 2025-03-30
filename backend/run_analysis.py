from data_load.stock_data_handler import StockDataHandler  
from utils.stock_visualizer import StockVisualizer
import os

def main():
    # List of 10 major companies
    symbols = [
        'AAPL',  # Apple
        'MSFT',  # Microsoft
        'GOOGL', # Google
        'AMZN',  # Amazon
        'META',  # Meta
        'TSLA',  # Tesla
        'NVDA',  # NVIDIA
        'JPM',   # JPMorgan Chase
        'V',     # Visa
        'WMT'    # Walmart
    ]
    
    
    os.makedirs('./data/2016', exist_ok=True)
    os.makedirs('./results/charts', exist_ok=True)
    
  
    print("Downloading stock data...")
    handler = StockDataHandler(symbols)
    data = handler.download_data()
    
    # Create visualizations
    print("Generating charts...")
    visualizer = StockVisualizer(data)
    
    for symbol in symbols:
        print(f"Processing {symbol}...")
        visualizer.create_candlestick_macd_chart(symbol)
       
    
    print("\nAnalysis complete! Charts have been saved to ./results/charts/")
    print("You can now run the main.py script to perform the model analysis.")

if __name__ == "__main__":
    main() 