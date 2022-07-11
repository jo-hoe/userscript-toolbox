'use strict';

// offers a way to simulate key inputs with plain javascript
// note:  The created events will come with "isTrusted" to false.
//        Manually firing a key event does NOT cause that letters to appear in a text input. 
//        For security reasons this browser feature prevents scripts
//        from simulating user actions that interact with the browser itself.  
function sendKeys(webelement, inputString) {
  // set value first
  webelement.value = inputString
  
  // loop over each character to fire untrusted events
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
