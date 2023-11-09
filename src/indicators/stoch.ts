type OHLC = {
  open: number;
  high: number;
  low: number;
  close: number;
};

export function stoch(ohlcData: OHLC[], period: number = 14, smaPeriod: number = 3): { kValues: number[], dValues: number[] } {
  let kValues: number[] = new Array(ohlcData.length).fill(null);
  let dValues: number[] = new Array(ohlcData.length).fill(null);

  for (let i = period - 1; i < ohlcData.length; i++) {
    const highPrices = ohlcData.slice(i + 1 - period, i + 1).map(d => d.high);
    const lowPrices = ohlcData.slice(i + 1 - period, i + 1).map(d => d.low);

    const highestHigh = Math.max(...highPrices);
    const lowestLow = Math.min(...lowPrices);

    kValues[i] = ((ohlcData[i].close - lowestLow) / (highestHigh - lowestLow)) * 100;
  }

  for (let i = period + smaPeriod - 2; i < ohlcData.length; i++) {
    dValues[i] = (kValues.slice(i + 1 - smaPeriod, i + 1).reduce((a, b) => a + (b ?? 0), 0)) / smaPeriod;
  }

  return { kValues, dValues };
}
