import { stoch } from './stoch'

describe('Stochastic function', () => {
  it('should calculate Stochastic correctly', () => {
    const ohlcData = [
      { open: 44.34, high: 44.37, low: 44.12, close: 44.34 },
      { open: 44.09, high: 44.56, low: 43.65, close: 44.09 },
      { open: 44.31, high: 44.85, low: 44.10, close: 44.31 },
      { open: 44.53, high: 45.45, low: 44.30, close: 44.53 },
      { open: 44.94, high: 45.17, low: 44.28, close: 44.94 },
      { open: 44.09, high: 44.56, low: 43.65, close: 44.09 },
      { open: 44.31, high: 44.85, low: 44.10, close: 44.31 },
      { open: 44.53, high: 45.45, low: 44.30, close: 44.53 },
      { open: 44.94, high: 45.17, low: 44.28, close: 44.94 },
      { open: 44.09, high: 44.56, low: 43.65, close: 44.09 },
      { open: 44.31, high: 44.85, low: 44.10, close: 44.31 },
      { open: 44.53, high: 45.45, low: 44.30, close: 44.53 },
      { open: 44.94, high: 45.17, low: 44.28, close: 44.94 },
      { open: 44.09, high: 44.56, low: 43.65, close: 44.09 },
      { open: 44.31, high: 44.85, low: 44.10, close: 44.31 },
      { open: 44.53, high: 45.45, low: 44.30, close: 44.53 },
      { open: 44.94, high: 45.17, low: 44.28, close: 44.94 },
    ]

    const result = stoch(ohlcData, 14, 3)
    const expectedResults = []
    expect(result).toEqual(expectedResults)
  })
})
