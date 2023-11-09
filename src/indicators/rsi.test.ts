import { rsi } from './rsi'

describe('RSI function', () => {
  it('should calculate RSI correctly', () => {
    const ohlcData = [
      { open: 10, high: 12, low: 11, close: 1 },
      { open: 10, high: 12, low: 11, close: 2 },
      { open: 10, high: 12, low: 11, close: 3 },
      { open: 10, high: 12, low: 11, close: 4 },
      { open: 10, high: 12, low: 11, close: 3 },
      { open: 10, high: 12, low: 11, close: 2 },
      { open: 10, high: 12, low: 11, close: 1 },
      { open: 10, high: 12, low: 11, close: 2 },
      { open: 10, high: 12, low: 11, close: 2 }
    ]

    const result = rsi(ohlcData)
    const expectedResults = [57.14285714285714, 62.857142857142854, 67.5208199871877, 59.47823067239657, 52.71606436280878, 46.96572446726842, 52.54085602987893, 52.54085602987893]
    expect(result).toEqual(expectedResults)
  })
})
