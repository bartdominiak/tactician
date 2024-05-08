import { round } from '../helpers/utils';
import { OHLCVRecord } from '../helpers/utils'

function calculateEMA(data: OHLCVRecord[], period: number): number[] {
  const emaValues: number[] = [];

  // Calculate the first EMA as simple moving average (SMA)
  let sma = 0;
  for (let i = 0; i < period; i++) {
    sma += data[i]?.close;
  }
  const initialEMA = sma / period;
  emaValues.push(initialEMA);

  // Calculate subsequent EMAs using smoothing factor
  const smoothingFactor = 2 / (period + 1);
  for (let i = period; i < data.length; i++) {
    const currentEMA = (data[i].close - emaValues[i - period]) * smoothingFactor + emaValues[i - period];
    emaValues.push(currentEMA);
  }

  return emaValues;
}

export function macd(ohlcData: OHLCVRecord[], shortPeriod: number = 12, longPeriod: number = 26, signalPeriod: number = 9): number[] {
  const shortEMA = calculateEMA(ohlcData, shortPeriod);
  const longEMA = calculateEMA(ohlcData, longPeriod);

  const macdLine: number[] = [];
  for (let i = 0; i < ohlcData.length - longPeriod; i++) {
    const macdValue = shortEMA[i + longPeriod - shortPeriod] - longEMA[i];
    macdLine.push(macdValue);
  }

  const signalLine = calculateEMA(macdLine.map((value, index) => ({ ...ohlcData[index], close: value })), signalPeriod);
  const histogram: number[] = [];

  for (let i = 0; i < macdLine.length - signalPeriod; i++) {
    const histogramValue = macdLine[i + signalPeriod] - signalLine[i];
    histogram.push(round(histogramValue))
  }

  return histogram;
}
