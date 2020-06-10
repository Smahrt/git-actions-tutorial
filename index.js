const app = require('express')();

app.get('/ping', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => console.log('Demo server started on localhost:3000'));

module.exports = app;