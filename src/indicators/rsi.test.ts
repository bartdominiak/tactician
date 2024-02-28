import { rsi } from './rsi';
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

describe('RSI [Relative Strenth Index]', () => {
  it('should return calculated RSI based on custom data', () => {
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

    const result = rsi(ohlcData)

    const expectedResults = [
      57.14285714285714, 62.857142857142854, 67.5208199871877, 59.47823067239657,
      52.71606436280878, 46.96572446726842, 52.54085602987893, 52.54085602987893
    ]
    expect(result).toEqual(expectedResults)
  })
  it('should return calculated RSI based on external OHLCV', async () => {
    const processFile = async () => {
      const records = [];
      const parser = fs
        .createReadStream('./ohlc/btc_usdt_1h.csv')
        .pipe(parse());

      for await (const record of parser) {
        const [, open, high, low, close ] = record

        records.push({
          open: parseFloat(open),
          high: parseFloat(high),
          low: parseFloat(low),
          close: parseFloat(close),
        });
      }
      return records;
    };

    const ohlcData = await processFile()
    const result = rsi(ohlcData)
    const slicedResult = result.slice(0, 12)

    const expectedResults = [
      73.21627838127111, 69.72825527820932, 65.57911349460716,  61.26016290047852,
      64.85855539937933, 65.99761868568677, 60.853269729968346, 60.70753492329797,
      63.42699932904277, 69.77714721861734, 70.87459637178303,  68.91136137893126,
    ]

    expect(slicedResult).toEqual(expectedResults)
  })
})
