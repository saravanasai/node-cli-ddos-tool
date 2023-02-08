# s-ddos

[![Cross-Platform Compatibility](https://jstools.dev/img/badges/os-badges.svg)](https://github.com/JS-DevTools/npm-publish/actions)




[![License](https://img.shields.io/npm/l/@jsdevtools/npm-publish.svg)](LICENSE)

## Description

S-ddos is a tiny Denial Of Service module with multi-threading support using `cluster`.

Author of the module is not responsible for any illegal actions. This module was written for testing and educational purposes.


## Installation

```sh
npm i -g s-dos
```

## Usage

### CLI

```sh
s-ddos <host> <amount> <interval> <thread>
```

### Example

```
# Launches 4 threads of sending 100 requests every 1.5s

s-ddos --host="http://localhost:8000" --amount=100 --interval=1500 --thread=4
```

## Big Thanks To

Thanks to these awesome companies for their support of Open Source developers ❤

[![GitHub](https://jstools.dev/img/badges/github.svg)](https://github.com/open-source)
[![NPM](https://jstools.dev/img/badges/npm.svg)](https://www.npmjs.com/)