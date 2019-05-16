

const express = require('express');
const cors = require('cors');

const app = express();
const port = 9090;

// enable/disable cross origin resource sharing if necessary
app.use(cors());

app.post('/api', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`we are zooming and listening on the port ${port}!`));
