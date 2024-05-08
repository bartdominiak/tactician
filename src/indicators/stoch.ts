import { round } from '../helpers/utils';
import { OHLCVRecord } from '../helpers/utils';

export function stoch(ohlcData: OHLCVRecord[], period: number = 5): number[] {
  const result: number[] = [];

  for (let i = period - 1; i < ohlcData.length; i++) {
      const closes: number[] = ohlcData.slice(i - period + 1, i + 1).map(data => data.close);
      const low = Math.min(...closes);
      const high = Math.max(...closes);
      const currentClose = ohlcData[i].close;
      const stochasticValue = ((currentClose - low) / (high - low)) * 100;
      result.push(round(stochasticValue));
  }

  return result;
}
