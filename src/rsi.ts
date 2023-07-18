export function rsi(prices: number[], period: number = 14): number {
    if (prices.length < period) {
        throw new Error(`Price data must have at least ${period} elements`);
    }

    const gains: number[] = [];
    const losses: number[] = [];

    // Calculate gains and losses for each period
    for (let i = 1; i < prices.length; i++) {
        const change = prices[i] - prices[i - 1];

        if (change > 0) {
            gains.push(change);
            losses.push(0);
        } else {
            gains.push(0);
            losses.push(-change);
        }
    }

    // Calculate average gains and losses for the specified period
    const avgGain = gains.slice(0, period).reduce((sum, val) => sum + val) / period;
    const avgLoss = losses.slice(0, period).reduce((sum, val) => sum + val) / period;

    const rs = avgGain / avgLoss;
    const rsi = 100 - (100 / (1 + rs));

    return rsi;
}
