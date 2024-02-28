type OHLCV = {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export function obv(data: OHLCV[]): number[] {
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

    finalObv.push(obv);
  }

  return finalObv;
}
