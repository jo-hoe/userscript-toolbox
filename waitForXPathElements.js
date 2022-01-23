// This script can be added to UserScript via @require. Example 
// ...
// @require     https://raw.githubusercontent.com/jo-hoe/userscript-toolbox/main/waitForXPathElements.js
// ...

// The main function is waitForXPathElement(xpath). It is an async function which can be uses in async function. 
// Here is how you may use it in your script
//
//      async function start() {
//          var elements = await waitForXPathElement("//div")
//          alert(elements.length)
//      }
//
//      start()

'use strict';

function toArray(elements) {
  var array = [];
  var element;
  while (element = elements.iterateNext()) {
    array.push(element);
  }
  return array;
}

function getXPathElements(xpath) {
  var result = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.ORDERED_NODE_ITERATOR_TYPE,
    null);

  return toArray(result)
}

function* fibonacciGenerator(len, current = 0, next = 1) {
  if (len === 0 || len === NaN) {
    return current;
  }
  yield current;
  yield* fibonacciGenerator(len - 1, next, current + next);
}

const scalingFactor = fibonacciGenerator()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// returns an array of found elements
// if the timeout elapsed without any finding NaN is returned
async function waitForXPathElement(xpath, timeoutInMilliseconds = NaN) {
  if (timeoutInMilliseconds) {
    var now = Date.now()
    var end = now + timeoutInMilliseconds
  }

  return _waitForXPathElement(xpath, end)
}

// the function checks the DOM using a sampling rate which scales based on
// the fibonacci sequence
// first it waits 0 milliseconds, then 1*100ms, then 1*100ms, then 2*100ms, 3*100ms, 5*100ms, ...
async function _waitForXPathElement(xpath, endTime) {
  var baseSampleRateInMilliseconds = 100

  var elements = getXPathElements(xpath)
  if (elements.length) {
    return elements
  } else {
    await sleep(baseSampleRateInMilliseconds * scalingFactor.next())
    if (endTime && endTime <= Date.now()) {
      return NaN
    } else {
      return _waitForXPathElement(xpath)
    }
  }
}
