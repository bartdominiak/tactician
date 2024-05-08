import { obv } from './obv';
import { getOHLCVData  } from '../helpers/utils';

describe('OBV [On Balance Volume]', () => {
  it('should return calculated OBV based on custom data', () => {
    const ohlcData = [
      { open: 10, high: 12, low: 11, close: 1, volume: 10 },
      { open: 10, high: 12, low: 11, close: 2, volume: 10 },
      { open: 10, high: 12, low: 11, close: 3, volume: 10 },
      { open: 10, high: 12, low: 11, close: 4, volume: 10 },
      { open: 10, high: 12, low: 11, close: 3, volume: 10 },
      { open: 10, high: 12, low: 11, close: 2, volume: 10 },
      { open: 10, high: 12, low: 11, close: 1, volume: 10 },
      { open: 10, high: 12, low: 11, close: 2, volume: 10 },
      { open: 10, high: 12, low: 11, close: 5, volume: 10 },
    ]

    const result = obv(ohlcData)
    const expectedResults = [ 10, 20, 30, 20, 10, 0, 10, 20 ]
    expect(result).toEqual(expectedResults)
  })

  it('should return calculated OBV based on external OHLCV data', async () => {
    const ohlcData = await getOHLCVData('./ohlc/btc_usdt_1h.csv')
    const result = obv(ohlcData)
    const slicedResult = result.slice(0, 12)

    const expectedResults = [
      8936.28,
      -8317.50,
      -21771.26,
      -38462.48,
      -23173.23,
      -12344.81,
      -21957.17,
      -32053.09,
      -18853.37,
      -1589.26,
      16075.85,
      1540.80
    ]

    expect(slicedResult).toEqual(expectedResults)
  })
})
