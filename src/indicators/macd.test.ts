import { macd } from './macd';
import { getOHLCVData  } from '../helpers/utils';

describe('MACD [Moving Average Convergence Divergence]', () => {
  it('should return calculated MACD based on external OHLCV data', async () => {
    const ohlcData = await getOHLCVData('./ohlc/btc_usdt_1h.csv')
    const result = macd(ohlcData)
    const slicedResult = result.slice(0, 12)

    const expectedResults = [
      135.56,
      128.26,
      108.68,
      106.57,
      133.05,
      155.47,
      134,
      94.53,
      46.21,
      19.42,
      -5.72,
      -18.84
    ]

    expect(slicedResult).toEqual(expectedResults)
  })
})
