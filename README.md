# qwerty_to_MIDI_API
===
Use qwerty keyboard as midi keyboard.

## Install

```bash
$ npm install qwertytomidi
```

## API

```js
var QwertyKeys = require('qwertytomidi')
```

### The Piano

```js
var noteStream = QwertyKeys({mode: 'piano', offset: 36})
noteStream.pipe(midiDestination)
```

Black notes on the qwerty row and whites on the asdf row. Use `z` and `x` to move up and down octaves and `c`, `v` to change velocity.

```
 W E   T Y U   O P [
A S D F G H J K L ; '
```

### The Grid

```js
var noteStream = QwertyKeys({mode: 'grid'})
noteStream.pipe(midiDestination)
```

The first 8 keys in all letter rows are used. Move the rows up and down using '-' and '=/+' keys. 