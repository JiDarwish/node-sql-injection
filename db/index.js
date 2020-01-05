const { promisify } = require('util');
const mysql = require('mysql');

let connection;
let runQuery;

function initConnection() {
  return new Promise((resolve, reject) => {
    if (connection) {
      reject('Database is alreadt initialized!');
    }
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'adminPass',
      database: 'sqlInjection',
      multipleStatements: true,
    });

    connection.connect();
    runQuery = promisify(connection.query).bind(connection);
    resolve('Connection established');
  })
}



async function searchForProduct(product) {
  const query = `SELECT id, name, price FROM products WHERE name LIKE '%${product}%';`
  console.log(`Query: ${query}`);
  const res = await runQuery(query);
  console.log(JSON.stringify(res));
  return res;
}

async function searchForProductSafe(product) {
  const query = 'SELECT id, name, price FROM products WHERE name LIKE ?;';
  const res = await runQuery(query, [product]);
  console.log(`Res was ${res}`);
  return res;
}

module.exports = {
  searchForProduct,
  searchForProductSafe,
  initConnection
}


