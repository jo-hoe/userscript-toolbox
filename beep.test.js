'use strict';

describe("beep() input paramater validation", () => {
  var test = require('./beep');
  var beep = test.__GetDependency__('beep');

  it("test if volume cannot be below 0", () => {
    expect(() => { beep(undefined, -1); }).toThrow(RangeError);
  });
  it("test if volume cannot be over 101", () => {
    expect(() => { beep(undefined, 101); }).toThrow(RangeError);
  });

  
  it("test if frequencyInHz cannot be below 39", () => {
    expect(() => { beep(undefined, -1); }).toThrow(RangeError);
  });
  it("test if frequencyInHz cannot be over 6001", () => {
    expect(() => { beep(undefined, 101); }).toThrow(RangeError);
  });

  
  it("test if soundWaveShape cannot be below -1", () => {
    expect(() => { beep(undefined, -1); }).toThrow(RangeError);
  });
  it("test if soundWaveShape cannot be over 4", () => {
    expect(() => { beep(undefined, 101); }).toThrow(RangeError);
  });
});