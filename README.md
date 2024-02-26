# tactician

A lightweight indicators used for financial technical analysis.

## Available indicators
- RSI (Relative Strength Index)

## Planned indicators (todo)
- OBV (On Balance Volume)
- STOCH (Stochastic)

## Installation

### install npm package
```node
pnpm i tactician // or yarn/npm
```

### Import
```typescript
import { rsi } from 'tactician'
```

## Use
```typescript
const ohlcData = [
  { open: 10, high: 12, low: 11, close: 1 },
  { open: 10, high: 12, low: 11, close: 2 },
  // Add more OHLC data as needed
];

const result = rsi(ohlcData);// Results  [57.14, 62.86 ...]
```
