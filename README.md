# Xtrica Noise: A javascript Audio helper class that plays a sound (in response to UI events) and lets you know when it is done playing.

A new instance is constructed without parameters.

An instance has two methods:
- `add(string: noiseName, Audio: audioObject, int?: defaultVolume)` that adds a new Audio object to your available noises, at the key `noiseName`, with an optional default volume (0 - 100).
- `play(string: noiseName, int?: volume)` that plays a noise, (by the originally provided `noiseName` in the `add` method), at the optionally provided volume (0 - 100), or default volume otherwise, and returns a promise for when the noise is done playing.

## Example usage within a Node.JS dev environment

**Javascript:**
```javascript
var XtricaNoise = require('xtrica-noise').default
var noises = new XtricaNoise()
noises.add('click', new Audio('data:audio/mp3;base64,...'), 30)
noises.add('congrats', new Audio('data:audio/mp3;base64,...'), 80)
noises.add('bye', new Audio('data:audio/mp3;base64,...'), 20)
var makeSomeNoises = function () {
  noises.play('click', 40).then(() => {
    noises.play('congrats').then(() => {
      noises.play('bye', 50)
    })
  })
}
```

**HTML:**
```html
<button onclick="makeSomeNoises()">click me</button>
```
