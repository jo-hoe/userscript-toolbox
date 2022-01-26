# userscript-toolbox

[![Test Status](https://github.com/jo-hoe/userscript-toolbox/workflows/test/badge.svg)](https://github.com/jo-hoe/userscript-toolbox/actions?workflow=test)

## Usage

This script can be added to UserScript via @require.

The main function is waitForXPathElement(xpath). The method waits until element in the DOM matches the xpath. All elements are subsequently returned. It is an async function which can be uses in async function. Here is how you may use it in your script:

```js
// ==UserScript==
// @name        New script 
// @require     https://raw.githubusercontent.com/jo-hoe/userscript-toolbox/6a880e9649784f19985a0275ea8247b8fa58728e/waitForXPathElements.js
// @grant       none
// ==/UserScript==

async function start() {
    var elements = await waitForXPathElement("//div")
    alert(elements.length)
}

start()
```

The example refers to a specific commit. You should consider to do the same. This ensures compatibility and is more secure than always refering to latest (which can theoretically be compromised).

## Tests

### Run

Unit-Test can be run using

```bash
npm run test
```

### Installation of test framework

Initial installation can be done via this line

```bash
npm install --save-dev 
npm install babel-plugin-rewire --save-dev
```
