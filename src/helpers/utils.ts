import * as fs from 'fs';
import { parse } from 'csv-parse';

interface OHLCVRecord {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export const getOHLCVData = async (fileDir: string): Promise<OHLCVRecord[]> => {
  const records = [];
  const parser = fs
    .createReadStream(fileDir)
    .pipe(parse());

  for await (const record of parser) {
    const [ ts, open, high, low, close, volume ] = record

    records.push({
      open: +open,
      high: +high,
      low: +low,
      close: +close,
      volume: +volume,
    });
  }
  return records;
};

export const round = (num, decimals = 2) => Number(num.toFixed(decimals));
