/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path/posix');
const app = express();
const port = 3000;
app.use(express.static('./example'));
app.get('/', (req, res) => {
  res.render();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
