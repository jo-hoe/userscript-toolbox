'use strict';

// offer a way to simulate key inputs with plain javascript
// note: the created events will have set the "isTrusted" to false
function sendKeys(webelement, inputString) {
  // loop over each character
  for (var i = 0; i < inputString.length; i++) {
    // generate a keyboard event
    var keyboardEvent = createKeyboardEvent(inputString.charCodeAt(i))
    // send this event to the webelement
    webelement.dispatchEvent(keyboardEvent)
  }
}

// you can see the different characters here:
// https://www.w3.org/2002/09/tests/keys.html
function createKeyboardEvent(charCode) {
  return new KeyboardEvent('keydown', {
    bubbles: true, cancelable: true, keyCode: charCode
  });
}