import { stoch } from './stochastic';
import { getOHLCVData } from '../helpers/utils';

describe('STOCH [Stochastic Sscillator]', () => {
  it('should return calculated STOCH based on custom data', () => {
    const ohlcData = [
      { open: 10, high: 12, low: 11, close: 1 },
      { open: 10, high: 12, low: 11, close: 2 },
      { open: 10, high: 12, low: 11, close: 3 },
      { open: 10, high: 12, low: 11, close: 4 },
      { open: 10, high: 12, low: 11, close: 3 },
      { open: 10, high: 12, low: 11, close: 2 },
      { open: 10, high: 12, low: 11, close: 1 },
      { open: 10, high: 12, low: 11, close: 2 },
      { open: 10, high: 12, low: 11, close: 2 },
    ]

    const result = stoch(ohlcData)

    const expectedResults = [ 66.67, 0, 0, 33.33, 50 ]
    expect(result).toEqual(expectedResults)
  })

  it('should return calculated STOCH based on external OHLCV data', async () => {
    const ohlcData = await getOHLCVData('./ohlc/btc_usdt_1h.csv')
    const result = stoch(ohlcData)
    const slicedResult = result.slice(0, 12)

    const expectedResults = [ 0, 54.56, 100, 39.24, 37.51, 80.16, 100, 100, 90.57, 100, 100, 69.75 ]
    expect(slicedResult).toEqual(expectedResults)
  })
})
