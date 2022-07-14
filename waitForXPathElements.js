'use strict';

function __dummy_for_unittests(){
  toArray();
}

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

function* fibonacciGenerator() {
  var a = 0
  var b = 1
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}


const fibonacciSequence = fibonacciGenerator()

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// returns an array of found elements
// if the timeout elapsed without any finding null is returned
async function waitForXPathElements(xpath, timeoutInMilliseconds = NaN) {
  if (timeoutInMilliseconds) {
    var now = Date.now()
    var end = now + timeoutInMilliseconds
  }

  return await _waitForXPathElement(xpath, end)
}

// returns frist element which is found
// if the timeout elapsed without any finding null is returned
async function waitForXPathElement(xpath, timeoutInMilliseconds = NaN) {
  var result = await waitForXPathElements(xpath, timeoutInMilliseconds)
  if (result) {
    result[0]
  }
  return result
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
      return null
    } else {
      return await _waitForXPathElement(xpath, endTime)
    }
  }
}
