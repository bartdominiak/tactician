import { round } from "../helpers/utils";
import { OHLCVRecord } from '../helpers/utils';

export function obv(data: OHLCVRecord[]): number[] {
  const finalObv: number[] = [];
  let obv = 0;

  for (let i = 1; i < data.length; i++) {
    const prevClose = data[i - 1].close;
    const currentClose = data[i].close;

    if (currentClose > prevClose) {
      obv += data[i].volume;
    } else if (currentClose < prevClose) {
      obv -= data[i].volume;
    }

    finalObv.push(round(obv));
  }

  return finalObv;
}
