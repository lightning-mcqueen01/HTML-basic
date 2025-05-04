var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE IF NOT EXISTS nodeDB", function (err, result) {
  //   if (err) throw err;
  //   console.log("db created");
  // });
  // con.query("show databases;", function (err, result) {
  //   if (err) throw err;
  //   console.log("showing ...");
  //   for (var i = 0; i < result.length; i++) {
  //     console.log(JSON.stringify(result[i]));
  //   }
  // });

  con.query("use nodedb;", function (err, result) {
    if (err) throw err;
    console.log("using nodedb database");
  });

  //   const qr = `CREATE TABLE employees (
  //     id INT PRIMARY KEY,
  //     firstname VARCHAR(50),
  //     lastname VARCHAR(50),
  //     salary DECIMAL(10, 2),
  //     date_of_joining DATE,
  //     department VARCHAR(50)
  // );`;

  // con.query(qr, function (err, result) {
  //   if (err) throw err;
  //   console.log("table created successfully");

  //   con.query("SHOW TABLES;", function (err, result) {
  //     if (err) throw err;
  //     console.log("Showing tables\n");
  //     for (let i = 0; i < result.length; i++) {
  //       console.log(JSON.stringify(result[i]));
  //     }
  //   });
  // });

  //   const qr = `INSERT INTO employees (id, firstname, lastname, salary, date_of_joining, department) VALUES
  // (1, 'Alice', 'Johnson', 60000.00, '2020-03-15', 'Engineering'),
  // (2, 'Bob', 'Smith', 52000.00, '2019-06-22', 'Marketing'),
  // (3, 'Carol', 'Williams', 75000.00, '2021-01-10', 'Finance'),
  // (4, 'David', 'Brown', 67000.00, '2018-11-30', 'Engineering'),
  // (5, 'Eva', 'Davis', 58000.00, '2020-07-19', 'Human Resources'),
  // (6, 'Frank', 'Miller', 62000.00, '2017-09-01', 'Engineering'),
  // (7, 'Grace', 'Wilson', 55000.00, '2022-04-05', 'Customer Support'),
  // (8, 'Hank', 'Moore', 69000.00, '2019-12-12', 'Marketing'),
  // (9, 'Ivy', 'Taylor', 72000.00, '2021-05-23', 'Finance'),
  // (10, 'Jack', 'Anderson', 63000.00, '2023-02-28', 'Engineering');`;

  //   con.query(qr, function (err, result) {
  //     if (err) throw err;
  //     con.query("select * from employees;");
  //   });

  // con.query("select * from employees;", function (err, result) {
  //   if (err) throw err;

  //   for (let i = 0; i < result.length; i++) {
  //     console.log(JSON.stringify(result[i]));
  //   }
  // });

  // con.query(
  //   "select firstname, lastname, salary from employees where salary > 65000;",
  //   function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   }
  // );
  con.query(
    `select firstname, lastname from employees where firstname like '_a%';`,
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
});
