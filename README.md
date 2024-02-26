# tactician

> Lightweight indicators used for financial technical analysis.

<div align="left">
  <img width="750" heigth="250" src="/static/logo-tactician.jpeg" alt="tactician logo">
</div>

[![npm version](https://badge.fury.io/js/tactician.svg)](https://badge.fury.io/js/tactician)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/tactician/blob/master/LICENSE.md)

## Currently available indicators
- RSI (Relative Strength Index)

## Planned future indicators (todo)
- OBV (On Balance Volume)
- STOCH (Stochastic)

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
import { rsi } from 'tactician'
```

## Use
```typescript
const ohlcData = [
  { open: 10, high: 12, low: 11, close: 1 },
  { open: 10, high: 12, low: 11, close: 2 },
  // Add more OHLC data as needed
];

const result = rsi(ohlcData); // Results  [57.14, 62.86 ...]
```
