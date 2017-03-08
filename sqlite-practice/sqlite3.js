'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');

db.run("CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, job TEXT, address TEXT)");



const populateEmployees = () => {
  const { list } = require('./employees.json');

  list.forEach(each => {
    db.run(`INSERT INTO employees VALUES (
        ${each.id},
        "${each.firstName}",
        "${each.lastName}",
        "${each.job}",
        "${each.address}",
    )`)
  })
}


// db.all(`SELECT * FROM employees`, (err, allRows) => {
//   allRows.forEach(( { id, firstName, lastName, job, address }))
//   console.log(allRows);
// });
