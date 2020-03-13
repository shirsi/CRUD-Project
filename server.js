const express = require('express')
const app = express()
const PORT = 3003
app.get('/', (req, res) => {
  res.send('hello world')
})
app.listen(PORT, () => {
  console.log('server is listening to ', PORT);
})
