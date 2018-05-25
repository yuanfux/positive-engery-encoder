# 正能量转义工具 [![npm version](https://badge.fury.io/js/positive-energy-encoder.svg)](https://badge.fury.io/js/positive-energy-encoder)[![Build Status](https://travis-ci.org/yuanfux/positive-engery-encoder.svg?branch=master)](https://travis-ci.org/yuanfux/positive-engery-encoder)

一个充满正能量的中文词汇转义工具inspired by @sym233

## API
### encode(str)
#### 向正能量转义
```javascript

import positive from 'positive-energy-encoder'

const pos = positive.encode('血腥暴力'); // encode

console.log(pos); // '奋勇辛勤求实虚心奋勇沉稳求实沉着专注诚信无私富强专注爱国积极坚毅'

```

### decode(str)
#### 解码正能量词汇
```javascript

const neg = positive.decode('奋勇辛勤求实虚心奋勇沉稳求实沉着专注诚信无私富强专注爱国积极坚毅'); // decode
console.log(neg); // '血腥暴力'

```

## License
MIT