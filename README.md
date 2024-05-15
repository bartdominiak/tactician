# Tactician

> Trading analysis comprehensive indicators.

<div align="center">
  <img width="750" height="250" src="/static/logo-tactician.jpeg" alt="Tactician Logo">
</div>

[![npm version](https://badge.fury.io/js/tactician.svg)](https://badge.fury.io/js/tactician)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/tactician/blob/master/LICENSE.md)

**Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Installation

### Prerequisites
- Node.js (v12.0 or higher)
- Npm or Yarn

### Using npm
```bash
npm install tactician
```

### Using Yarn
```bash
yarn install tactician
```

### Using pnpm
```bash
pnpm add tactician
```

## Usage
```typescript
import { rsi, obv, stoch, macd } from 'tactician';

const ohlcData = [
  { open: 10, high: 12, low: 11, close: 1, volume: 10 },
  { open: 10, high: 12, low: 11, close: 2, volume: 10 },
  // More OHLC data...
];

const rsiResults = rsi(ohlcData);
const obvResults = obv(ohlcData);
const stochResults = stoch(ohlcData);
const macdResults = macd(ohlcData);
```

## Contributors
Thanks to all the contributors who have helped this project grow

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
