const express = require('express');
const server = express();
const port = 3000;

server.listen(port, () => console.log(`Express server listening on port ${port}`));

server.use(express.static('public'));

server.get('/', (req, res) => res.send('Hello World!'));

server.get('/checkout/formone', (req, res) => {});