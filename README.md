# whmcs.js

Simple wrapper to simply the use of the WHMCS API. **TypeScript is supported**!

## Installation

```sh
npm install whmcs.js
# or
yarn add whmcs.js
```

## Example

```js
const WHMCSClient = require('whmcs.js');
const whmcs = new WHMCSClient('identifier', 'secret', 'https://example.com/whmcs');

whmcs.request('WHMCS action', 'POST', {
    someParam: 'some value'
});
```
