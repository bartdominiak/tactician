import { rsi } from './rsi';
import { getOHLCVData } from '../helpers/utils';

describe('RSI [Relative Strenth Index]', () => {
  it('should return calculated RSI based on custom data', () => {
    const ohlcData = [
      { open: 10, high: 12, low: 11, close: 1, volume: 100 },
      { open: 10, high: 12, low: 11, close: 2, volume: 120 },
      { open: 10, high: 12, low: 11, close: 3, volume: 100 },
      { open: 10, high: 12, low: 11, close: 4, volume: 250 },
      { open: 10, high: 12, low: 11, close: 3, volume: 150 },
      { open: 10, high: 12, low: 11, close: 2, volume: 500 },
      { open: 10, high: 12, low: 11, close: 1, volume: 600 },
      { open: 10, high: 12, low: 11, close: 2, volume: 900 },
      { open: 10, high: 12, low: 11, close: 2, volume: 100 },
    ]

    const result = rsi(ohlcData)

    const expectedResults = [ 57.14, 62.86, 67.52, 59.48, 52.72, 46.97, 52.54, 52.54 ]
    expect(result).toEqual(expectedResults)
  })

  it('should return calculated RSI based on external OHLCV data', async () => {
    const ohlcData = await getOHLCVData('./ohlc/btc_usdt_1h.csv')
    const result = rsi(ohlcData)
    const slicedResult = result.slice(0, 12)

    const expectedResults = [ 73.22, 69.73, 65.58, 61.26, 64.86, 66, 60.85, 60.71, 63.43, 69.78, 70.87, 68.91 ]
    expect(slicedResult).toEqual(expectedResults)
  })
})
