# userscript-toolbox

[![Test Status](https://github.com/jo-hoe/userscript-toolbox/workflows/test/badge.svg)](https://github.com/jo-hoe/userscript-toolbox/actions?workflow=test)

This script can be added to UserScript via @require. Example:
```UserScript
...
@require     https://raw.githubusercontent.com/jo-hoe/userscript-toolbox/main/waitForXPathElements.js
...
```

The main function is waitForXPathElement(xpath). It is an async function which can be uses in async function. 
Here is how you may use it in your script
```
async function start() {
    var elements = await waitForXPathElement("//div")
    alert(elements.length)
}

start()
```

## Tests

### Run

Unit-Test can be run using

```bash
npm run test
```

### Installation of test framework

Initial installation can be done via this line

```bash
npm install --save-dev jest
```
