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

const fibonacciSequence = fibonacciGenerator()

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
    await sleep(baseSampleRateInMilliseconds * fibonacciSequence.next())
    if (endTime && endTime <= Date.now()) {
      return NaN
    } else {
      return _waitForXPathElement(xpath)
    }
  }
}

export { fibonacciSequence };
