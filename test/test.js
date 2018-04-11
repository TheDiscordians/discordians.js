const { Client, Version } = require('../index');

const getter = new Client();
/*
  Ever wondered why a class when it could have been done without it ??
  All because we are planning to have a Token system real soon.
*/

getter.fancy2Text('This is a test.')
.then(res => console.log(res)) // тнιѕ ιѕ α тєѕт.
.catch(err => console.log(err.message));
