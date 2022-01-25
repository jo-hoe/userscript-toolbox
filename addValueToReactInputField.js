'use strict';

function addValueToReactInputField(value, inputfield) {
  let previousValue = inputfield.value
  inputfield.value = value
  let event = new Event('input', { bubbles: true });
  event.simulated = true;
  let tracker = inputfield._valueTracker;
  if (tracker) {
    tracker.setValue(previousValue);
  }
  inputfield.dispatchEvent(event);
}
