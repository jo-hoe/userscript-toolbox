'use strict';

/**
 * To call unittest via npm rewire all tested functions have to be called
 * in at least one other function. Therefore this dummy function is introduced 
 * https://github.com/speedskater/babel-plugin-rewire/blob/master/README.md
 */
 function __rewire() {
  beep()
}

const SoundWaveShape = {
  Sine: 0,
  Square: 1,
  Sawtooth: 2,
  Triangle: 3
}

/**
 * Creates a sound according to the parameters
 * @param {AudioContext} audioCtx created from window like this 'audioCtx = new (window.AudioContext || window.webkitAudioContext)();'
 * @param {int} volume in % - expected is a value between 0 - 100; 100 is the loudest; 0 is silent
 * @param {int} frequencyInHz in hz - expected is a value between 40 hz - 6000 hz
 * @param {int} soundWaveShape describes the shape of the sound wave. 0 = Sine; 1 = Square; 2 = Sawtooth; 3 = Triangle
 * @param {int} durationInMS of the beep in ms
 */
 var beep = (function () {
     var ctxClass = window.audioContext ||window.AudioContext || window.AudioContext || window.webkitAudioContext
     var ctx = new ctxClass();
     return function (duration, type, finishedCallback) {
 
         duration = +duration;
 
         // Only 0-4 are valid types.
         type = (type % 5) || 0;
 
         if (typeof finishedCallback != "function") {
             finishedCallback = function () {};
         }
 
         var osc = ctx.createOscillator();
 
         osc.type = type;
         //osc.type = "sine";
 
         osc.connect(ctx.destination);
         if (osc.noteOn) osc.noteOn(0); // old browsers
         if (osc.start) osc.start(); // new browsers
 
         setTimeout(function () {
             if (osc.noteOff) osc.noteOff(0); // old browsers
             if (osc.stop) osc.stop(); // new browsers
             finishedCallback();
         }, duration);
 
     };
 })();;