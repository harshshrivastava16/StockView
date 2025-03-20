import express from 'express';
import cors from 'cors';
import yahooFinance from 'yahoo-finance2';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/candlestick', async (req, res) => {
    try {
        const  company  = req.body.company;
        const interval = req.body.interval;

        console.log("Fetching data for:", company);

        const queryOptions = { period1: '2023-01-01', period2: '2024-12-31', interval: interval };
        const result = await yahooFinance.chart(company, queryOptions);

        const formattedResult = result['quotes'].map(item => ({
            ...item,
            time: new Date(item.date).toISOString().split('T')[0]
        }));

        res.json(formattedResult);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).json({ error: "Failed to fetch stock data." });
    }
});

app.post('/heikinashi', async (req, res) => {
    try {
        const  company  = req.body.company;
        const interval = req.body.interval;

        console.log("Fetching data for:", company);

        const queryOptions = { period1: '2023-01-01', period2: '2024-12-31', interval: interval };
        const result = await yahooFinance.chart(company, queryOptions);

        const formattedResult = result['quotes'].map(item => ({
            ...item,
            time: new Date(item.date).toISOString().split('T')[0]
        }));

        const heikinAshiData = [];

        for (let index = 0; index < formattedResult.length; index++) {
            const curr = formattedResult[index];

            if (index === 0) {
                heikinAshiData.push({
                    time: curr.time,
                    open: (curr.open + curr.close) / 2,
                    close: (curr.open + curr.high + curr.low + curr.close) / 4,
                    high: curr.high,
                    low: curr.low
                });
            } else {
                const prevHA = heikinAshiData[index - 1];

                heikinAshiData.push({
                    time: curr.time,
                    open: (prevHA.open + prevHA.close) / 2,
                    close: (curr.open + curr.high + curr.low + curr.close) / 4,
                    high: Math.max(curr.high, prevHA.open, prevHA.close),
                    low: Math.min(curr.low, prevHA.open, prevHA.close)
                });
            }
        }

        res.json(heikinAshiData);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).json({ error: "Failed to fetch stock data." });
    }
});

app.post('/line', async (req, res) => {
    try {
        const  company  = req.body.company;
        const interval = req.body.interval;

        console.log("Fetching data for:", company);

        const queryOptions = { period1: '2023-01-01', period2: '2024-12-31', interval: interval };
        const result = await yahooFinance.chart(company, queryOptions);

        const formattedResult = result['quotes'].map(item => ({
            value: (item.close+item.open)/2,
            time: new Date(item.date).toISOString().split('T')[0]
        }));

        res.json(formattedResult);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).json({ error: "Failed to fetch stock data." });
    }
});

app.post('/histogram', async (req, res) => {
    try {
        const  company  = req.body.company;
        const interval = req.body.interval;

        console.log("Fetching data for:", company);

        const queryOptions = { period1: '2023-01-01', period2: '2024-12-31', interval: interval };
        const result = await yahooFinance.chart(company, queryOptions);

        const formatted = result['quotes'].map(item => ({
            value: item.close,
            time: new Date(item.date).toISOString().split('T')[0]
        }));

        const formattedResult = formatted.map((item, index, arr) => ({
            time: item.time,
            value: item.value,
            color: index > 0 && item.value < arr[index - 1].value ? '#ef5350' : '#26a69a'
        }));

        res.json(formattedResult);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).json({ error: "Failed to fetch stock data." });
    }
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});
