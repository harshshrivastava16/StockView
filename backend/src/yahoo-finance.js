import yahooFinance from "yahoo-finance2";

const queryOptions = { period1: '2023-01-01', period2: '2024-12-31', interval: "1mo" };
const result = await yahooFinance.chart('AAPL', queryOptions);

// const ok = result['quotes'].map((item, index, arr) => {
//     if (index === 0) {
//         return item;
//     }
//
//     const prevHA = arr[index - 1];
//     const curr = item;
//
//     return {
//         ...item,
//         open: (prevHA.open + prevHA.close) / 2,
//         close: (curr.open + curr.close + curr.high + curr.low) / 4,
//         high: Math.max(curr.high, (prevHA.open + prevHA.close) / 2, (curr.open + curr.close + curr.high + curr.low) / 4),
//         low: Math.min(curr.low, (prevHA.open + prevHA.close) / 2, (curr.open + curr.close + curr.high + curr.low) / 4)
//     };
// });

const formatted = result['quotes'].map(item => ({
    value: item.close,
    time: new Date(item.date).toISOString().split('T')[0]
}));

const ok = formatted.map((item, index, arr) => ({
    time: item.time,
    value: item.value,
    color: index > 0 && item.value < arr[index - 1].value ? '#ef5350' : '#26a69a'
}));



console.log(ok)



// Extract date and time
 // '2024-12-01'
 // '05:00:00.000'


