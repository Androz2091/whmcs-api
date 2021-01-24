# WHMCS API

Simple wrapper to simply the use of the WHMCS API. **TypeScript is supported**!

## Installation

```sh
npm install whmcs-api
# or
yarn add whmcs-api
```

## Example

```js
const WHMCSClient = require('whmcs-api');
const whmcs = new WHMCSClient('identifier', 'secret', 'https://example.com/whmcs');

whmcs.request('WHMCS action', 'POST', {
    someParam: 'some value'
});
```
