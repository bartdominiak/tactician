import { obv } from './obv';
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

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
    const expectedResults = [10, 20, 30, 20, 10, 0, 10, 20]
    expect(result).toEqual(expectedResults)
  })
  it('should return calculated OBV based on external OHLCV', async () => {
    const processFile = async () => {
      const records = [];
      const parser = fs
        .createReadStream('./ohlc/btc_usdt_1h.csv')
        .pipe(parse());

      for await (const record of parser) {
        const [, open, high, low, close, volume ] = record

        records.push({
          open: parseFloat(open),
          high: parseFloat(high),
          low: parseFloat(low),
          close: parseFloat(close),
          volume: parseFloat(volume),
        });
      }
      return records;
    };

    const ohlcData = await processFile()
    const result = obv(ohlcData)
    const slicedResult = result.slice(0, 12)

    const expectedResults = [
      8936.27785,
      -8317.50182,
      -21771.26171,
      -38462.48144,
      -23173.231150000003,
      -12344.807660000004,
      -21957.171810000003,
      -32053.086450000003,
      -18853.370310000002,
      -1589.256110000002,
      16075.85213,
      1540.8026499999996
    ]

    expect(slicedResult).toEqual(expectedResults)
  })
})
