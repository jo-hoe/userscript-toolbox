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
function beep(audioCtx, volume = 50, frequencyInHz = 3000, soundWaveShape = SoundWaveShape.Sine, durationInMS = 500) {
  if (volume < 0 || volume > 100) {
    throw new RangeError('volume has to be between 0 and 100')
  }
  if (frequencyInHz < 40 || frequencyInHz > 6000) {
    throw new RangeError('frequencyInHz has to be between 0 and 100')
  }
  if (soundWaveShape < 0 || soundWaveShape > 3) {
    throw new RangeError('soundWaveShape has to be between 0 and 100')
  }

  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = frequencyInHz;
  oscillator.type = soundWaveShape;

  oscillator.start();

  setTimeout(
    function () {
      oscillator.stop();
    },
    durationInMS
  );
};