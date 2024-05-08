import { round } from '../helpers/utils';

type OHLC = {
  open: number;
  high: number;
  low: number;
  close: number;
};

export function rsi(ohlcData: OHLC[], period: number = 14): number[] {
  let gains: number[] = [];
  let losses: number[] = [];
  let avgGain: number[] = [];
  let avgLoss: number[] = [];
  let rs: number[] = [];
  let rsi: number[] = [];

  for (let i = 1; i < ohlcData.length; i++) {
    let change = ohlcData[i].close - ohlcData[i - 1].close;
    gains.push(Math.max(0, change));
    losses.push(Math.max(0, -change));
  }

  avgGain[0] = gains.slice(0, period).reduce((a, b) => a + b) / period;
  avgLoss[0] = losses.slice(0, period).reduce((a, b) => a + b) / period;

  for (let i = 1; i < gains.length; i++) {
    avgGain[i] = (avgGain[i - 1] * (period - 1) + gains[i]) / period;
    avgLoss[i] = (avgLoss[i - 1] * (period - 1) + losses[i]) / period;
  }

  for (let i = 0; i < avgGain.length; i++) {
    rs[i] = avgGain[i] / avgLoss[i];
    rsi[i] = round(100 - (100 / (1 + rs[i])));
  }

  return rsi;
}
