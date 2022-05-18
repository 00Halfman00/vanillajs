const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const PORT = 9999;
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => console.log(`app listening on port ${9999}`));
