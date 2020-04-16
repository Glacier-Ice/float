const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.get('/api', (req, res) => res.send('Hello World!'))

const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}`))