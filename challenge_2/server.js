/*
The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.

You may assume the JSON data has a regular structure and hierarchy (see included sample file).

In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.

You may also assume that child records in the JSON will always be in a property called `children`.

1. receive JSON input from client
2. logic to parse JSON input and create CSV output
3. send CSV to client
*/

const express = require('express');
const server = express();
const port = 3000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

server.listen(port, () => console.log(`Express server listening on port ${port}`));

server.use('/', express.static('public'));

// get method, server should serve index.html file
server.get('/', (req, res) => {
  console.log('GET request received');
  res.send('index.html')
});

server.use(bodyParser.json());

server.post('/', urlencodedParser, (req, res) => {
  console.log('POST request received');
  let jsonObj = jsonToObj(req.body.data);
  let csv = jsonToCsv(jsonObj);
  res.redirect('http://127.0.0.1:8080');
  res.end(csv);
})

server.use((req, res, next) => res.status(404).send('404 error'));


// **** JSON to CSV **** //

let jsonToObj = string => {
  let jsonData = 'Input must be in valid JSON format';
  try {
    jsonData = string[string.length - 1] === ';' ? JSON.parse(string.slice(0, string.length - 1)) : JSON.parse(string);
  } catch (err) {
    console.error(err);
  } finally {
    return jsonData;
  }
};

let jsonToCsv = obj => {
  let objArr = [];
  let csv = new Set();
  let columns = [];
  let result = [];

  let getObj = tree => {
    objArr.push(tree);
    tree.children.forEach(child => getObj(child));
  }

  getObj(obj);

  objArr.forEach(node => Object.keys(node).forEach(prop => csv.add(prop)));
  csv.forEach(title => columns.push(title));
  result.push(columns.join(','));
  objArr.forEach(node => {
    let current = [];
    csv.forEach(prop => {
      if (prop !== 'children') {
        current.push(node[prop] ? node[prop] : null);
      }
    });
    result.push(current.join(','));
  });
  return result.join('\n');
};