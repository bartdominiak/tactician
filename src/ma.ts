export function ma(prices: number[], period: number): number {
    if (prices.length < period) {
        throw new Error(`Price data must have at least ${period} elements`);
    }

    let sum = prices.slice(0, period).reduce((total, price) => total + price);
    const movingAverages = [sum / period];

    for (let i = period; i < prices.length; i++) {
        const previousSum = sum;
        sum += prices[i] - prices[i - period];
        const movingAverage = sum / period;
        movingAverages.push(movingAverage);
    }

    return movingAverages[movingAverages.length - 1];
}
