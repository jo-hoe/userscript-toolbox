'use strict';

// offer a way to simulate key inputs with plain javascript
function sendKeys(webelement, inputString) {
  // loop over each character
  for (var i = 0; i < inputString.length; i++) {
    // generate a keyboard event
    var keyboardEvent = createKeyboardEvent(inputString.charCodeAt(i))
    // send this event to the webelement
    webelement.dispatchEvent(keyboardEvent)
  }
}

function createKeyboardEvent(charCode) {
  return new KeyboardEvent('keydown', {
      bubbles: true, cancelable: true, keyCode: charCode
  });
}