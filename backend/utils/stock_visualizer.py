import plotly.graph_objects as go
from plotly.subplots import make_subplots
import numpy as np
import os

class StockVisualizer:
    def __init__(self, data):
        self.data = data

    def create_candlestick_macd_chart(self, symbol):
        """combined Candlestick, Volume, RSI, and MACD chart in dark theme"""
        df = self.data[symbol]

        #figure with 4 rows (Candlestick, Volume, RSI, MACD)
        fig = make_subplots(rows=4, cols=1,
                            shared_xaxes=True,
                            vertical_spacing=0.05,
                            row_heights=[0.4, 0.2, 0.2, 0.2])

        # Candlestick chart
        fig.add_trace(go.Candlestick(x=df.index,
                                     open=df['Open'],
                                     high=df['High'],
                                     low=df['Low'],
                                     close=df['Close'],
                                     name='OHLC',
                                     increasing=dict(line=dict(color='limegreen')),
                                     decreasing=dict(line=dict(color='red'))),
                      row=1, col=1)

        # Add SMAs
        fig.add_trace(go.Scatter(x=df.index, y=df['SMA_20'],
                                 name='SMA 20',
                                 line=dict(color='cyan', width=2)),
                      row=1, col=1)
        fig.add_trace(go.Scatter(x=df.index, y=df['SMA_50'],
                                 name='SMA 50',
                                 line=dict(color='orange', width=2)),
                      row=1, col=1)

        # Volume bars
        fig.add_trace(go.Bar(x=df.index, y=df['Volume'],
                             name='Volume',
                             marker=dict(color='gray')),
                      row=2, col=1)
        fig.add_trace(go.Scatter(x=df.index, y=df['Volume_SMA'],
                                 name='Volume SMA',
                                 line=dict(color='magenta')),
                      row=2, col=1)

        # RSI
        fig.add_trace(go.Scatter(x=df.index, y=df['RSI'],
                                 name='RSI',
                                 line=dict(color='yellow')),
                      row=3, col=1)

        # Add RSI threshold lines
        fig.add_shape(type="line", x0=df.index[0], x1=df.index[-1], y0=70, y1=70,
                      line=dict(color="red", dash="dash"), row=3, col=1)
        fig.add_shape(type="line", x0=df.index[0], x1=df.index[-1], y0=30, y1=30,
                      line=dict(color="green", dash="dash"), row=3, col=1)

        # MACD
        fig.add_trace(go.Scatter(x=df.index, y=df['MACD'],
                                 name='MACD',
                                 line=dict(color='cyan', width=2)),
                      row=4, col=1)
        fig.add_trace(go.Scatter(x=df.index, y=df['MACD_Signal'],
                                 name='Signal',
                                 line=dict(color='orange', width=2)),
                      row=4, col=1)
        fig.add_trace(go.Bar(x=df.index,
                             y=df['MACD'] - df['MACD_Signal'],
                             name='MACD Histogram',
                             marker=dict(color=np.where(df['MACD'] > df['MACD_Signal'], 'limegreen', 'red'))),
                      row=4, col=1)

        # dark theme
        fig.update_layout(
            template='plotly_dark',
            title=f"<b>{symbol} Stock Price & MACD</b>",
            xaxis_title="Date",
            yaxis_title="Price",
            yaxis2_title="Volume",
            yaxis3_title="RSI",
            yaxis4_title="MACD",
            height=1200,
            legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1)
        )

        os.makedirs('./results/charts', exist_ok=True)
        fig.write_html(f'./results/charts/{symbol}_chart.html')

        return fig
