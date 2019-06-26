const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => console.log(req.body));

app.listen(port, () => console.log(`Express server listening on port ${port}`));