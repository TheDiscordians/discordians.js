# discordians.js

## Whats this ??
This is the official node.js wrapper for [discordians-api](https://discordians-api.herokuapp.com/)

## Installation
**Node.js 8.0.0 or newer is required**

Installing: `npm install discordians.js`

## Example usage
```js
const Discordians = require('discordians.js');
const fun2sh = new Discordians.Client();

fun2sh.fancy2Text('This is a test.')
	.then(res => {
		console.log(res); // тнιѕ ιѕ α тєѕт.
	})
	.catch(err => {
		console.log(err);
	});

```

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [API Server](https://discord.gg/U97Cxrx).
