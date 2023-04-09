export function obv(prices: number[], volumes: number[]): number {
    if (prices.length !== volumes.length) {
        throw new Error('Price and volume data must have the same length');
    }

    const obvValues: number[] = [0];
    let prevObv = obvValues[0];

    for (let i = 1; i < prices.length; i++) {
        const change = prices[i] - prices[i - 1];
        let obv = prevObv;

        if (change > 0) {
            obv += volumes[i];
        } else if (change < 0) {
            obv -= volumes[i];
        }

        obvValues.push(obv);
        prevObv = obv;
    }

    return obvValues[obvValues.length - 1];
}
