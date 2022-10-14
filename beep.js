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
const beep = (freq = 520, duration = 200, vol = 100) => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.connect(gain);
  oscillator.frequency.value = freq;
  oscillator.type = "square";
  gain.connect(context.destination);
  gain.gain.value = vol * 0.01;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration * 0.001);
}
