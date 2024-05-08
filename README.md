# tactician

> Boost your trading analysis capabilities in Node.js with our comprehensive collection of customizable indicators

<div align="left">
  <img width="750" heigth="250" src="/static/logo-tactician.jpeg" alt="tactician logo">
</div>

[![npm version](https://badge.fury.io/js/tactician.svg)](https://badge.fury.io/js/tactician)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/tactician/blob/master/LICENSE.md)

## Currently available indicators
- RSI (Relative Strength Index)
- OBV (On Balance Volume)

## Planned future indicators (todo)
- STOCH (Stochastic Oscillator)
- MACD (Moving Average Convergence Divergence)
- MA (Moving Averages)
- ATR (Avarage True Range)

## Installation

### install npm package

pnpm
```node
pnpm i tactician // or npm
```

yarn
```node
yarn i tactician
```

### Import
```typescript
import { rsi, obv } from 'tactician'
```

### Example
```typescript
const ohlcData = [
  { open: 10, high: 12, low: 11, close: 1, volume: 10 },
  { open: 10, high: 12, low: 11, close: 2, volume: 10 },
  // Add more OHLC data as needed
];

const rsiResults = rsi(ohlcData); // Returns [57.14, 62.86 ...]
const obvResults = obv(ohlcData); // Returns [10, 20 ...]
const stochResults = stoch(ohlcData); // Returns [ 66.67, 0 ... ]
```

## Contribute

If you have a feature request then feel free to start a new issue, or just grab existing one.

## License

MIT
