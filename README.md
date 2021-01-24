# whmcs.js

Simple wrapper to simply the use of the WHMCS API. **TypeScript is supported**!

## Installation

```sh
npm install @androz2091/whmcs.js
# or
yarn add @androz2091/whmcs.js
```

## Example

```js
const WHMCSClient = require('@androz2091/whmcs.js');
const whmcs = new WHMCSClient('identifier', 'secret', 'https://example.com/whmcs');

whmcs.request('WHMCS action', 'POST', {
    someParam: 'some value'
});
```
