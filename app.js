const express = require('express');
const bodyParser = require('body-parser');
const expHbs = require('express-handlebars');
const { initConnection } = require('./db');
const router = require('./routes');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', expHbs());
app.set('view engine', 'handlebars');

app.use('/', router);

initConnection()
  .then(() => app.listen(port, () => console.log(`App is listening on port ${port}`)))
  .catch(err => console.log(`There was an err: ${err}`));

