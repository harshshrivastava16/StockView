import yfinance as yf
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import os

class StockDataHandler:
    def __init__(self, symbols, start_date=None, end_date=None):
        self.symbols = symbols
        if start_date is None:
            self.start_date = (datetime.now() - timedelta(days=2*365)).strftime('%Y-%m-%d')
        else:
            self.start_date = start_date
        if end_date is None:
            self.end_date = datetime.now().strftime('%Y-%m-%d')
        else:
            self.end_date = end_date
            
    def calculate_rsi(self, prices, period=14):
        """Calculate RSI indicator"""
        delta = prices.diff()
        gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
        rs = gain / loss
        return 100 - (100 / (1 + rs))
    
    def calculate_macd(self, prices, fast=12, slow=26):
        """Calculate MACD indicator"""
        exp1 = prices.ewm(span=fast, adjust=False).mean()
        exp2 = prices.ewm(span=slow, adjust=False).mean()
        macd = exp1 - exp2
        signal = macd.ewm(span=9, adjust=False).mean()
        return macd, signal

    def download_data(self):
        """Download data for all symbols"""
        all_data = {}
        for symbol in self.symbols:
            try:
                ticker = yf.Ticker(symbol)
                df = ticker.history(start=self.start_date, end=self.end_date)
                if not df.empty:
                    # Forward fill any missing values
                    df = df.fillna(method='ffill')
                    
                    # Calculate indicators
                    df['SMA_20'] = df['Close'].rolling(window=20).mean()
                    df['SMA_50'] = df['Close'].rolling(window=50).mean()
                    df['RSI'] = self.calculate_rsi(df['Close'])
                    macd, signal = self.calculate_macd(df['Close'])
                    df['MACD'] = macd
                    df['MACD_Signal'] = signal
                    df['Volume_SMA'] = df['Volume'].rolling(window=20).mean()
                    
                    # Fill remaining NaN values
                    df = df.fillna(method='bfill')
                    df = df.fillna(0)
                    
                    # Save to CSV
                    os.makedirs('./data/2016', exist_ok=True)
                    df.to_csv(f'./data/2016/{symbol}.csv')
                    all_data[symbol] = df
                    print(f"Successfully downloaded data for {symbol}")
                else:
                    print(f"No data available for {symbol}")
            except Exception as e:
                print(f"Error downloading data for {symbol}: {str(e)}")
        return all_data
