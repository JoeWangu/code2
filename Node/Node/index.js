const sql = require('mysql2');

const connection = sql.createConnection({
    host: 'localhost',
    user: 'skydiver',
    password: 'SQLPassword12#',
    database: "mydb"
});

// const values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
// ]

connection.connect((err) => {
    // const createDb = "CREATE DATABASE mydb";

    // const createTableCustomers = "CREATE TABLE customers (name VARCHAR (255), address VARCHAR (255))";
    // const alterTableCustomers = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // const insertInCustomers = "INSERT INTO customers (name, address) values ?";

    // const selectCustomerData = "SELECT * FROM customers";
    // const selectCustomerDataOrder = "SELECT * FROM customers ORDER BY name";
    // const selectCustomerDataOrder1 = "SELECT * FROM customers ORDER BY name DESC";
    // Select the 5 first records in the "customers" table:
    // const selectCustomerDataLimit = "SELECT * FROM customers LIMIT 5";
    // Start from position 3, and return the next 5 records:
    // Note: "OFFSET 2", means starting from the third position, not the second!
    // const selectCustomerDataLimit1 = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    // You can also write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above:
    // const selectCustomerDataLimit1 = "SELECT * FROM customers LIMIT 2, 5";
    // const selectCustomerData1 = "SELECT name, address FROM customers";
    // const selectCustomerData2 = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
    // const selectWilcardData = "SELECT * FROM customers WHERE address LIKE 'S%'"; // where all data starts with s

    // const updateData = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

    // When query values are variables provided by the user, you should escape the values.
    // This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.
    // const adr = 'Mountain 21';
    // const sqlEscape = 'SELECT * FROM customers WHERE address = ' + sql.escape(adr);

    // const deleteData = "DELETE FROM customers WHERE address = 'Mountain 21'";

    // const deleteTable = "DROP TABLE customers";
    // const deleteTable1 = "DROP TABLE IF EXISTS customers"; // avoid errors

    // Note: You can use INNER JOIN instead of JOIN. They will both give you the same result.
    // var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    // If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:
    // var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users favorite_product = products.id";
    // If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, use the RIGHT JOIN statement:
    // var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users favorite_product = products.id";

    if (err) {
        console.log("not connected")
    } else {
        console.log("connected");

        // ## Creating a Database
        // connection.query(createDb, function (err, result) {
        //     if (err) {
        //         console.error("Database creation error:", err);
        //     } else {
        //         console.log("Database created");
        //     }
        // });

        // // ## Create table customers
        // connection.query(createTableCustomers, (err, result) => {
        //     if (err) {
        //         console.error("Table creation error:", err);
        //     } else {
        //         console.log("Table customers created" + result);
        //     }
        // });

        // // ## alter table customers
        // connection.query(alterTableCustomers, (err, result) => {
        //     if (err) {
        //         console.error("Table alteration error:", err);
        //     } else {
        //         console.log("Table customers altered" + result);
        //     }
        // });

        // // ## insert into table customers
        // connection.query(insertInCustomers, [values], (err, result) => {
        //     if (err) {
        //         console.error("Insert values error:", err.message);
        //     } else {
        //         console.log("Number of records inserted: " + result.affectedRows);
        //     }
        // });

        // // ## read table customers
        // connection.query(selectCustomerData, (err, result, fields) => {
        //     if (err) {
        //         console.error("Select values error:", err.message);
        //     } else {
        //         console.log(result);
        //         console.log(result[2].address);
        //         console.log(fields);
        //     }
        // });

        // // ## read specific table customers
        // connection.query(selectCustomerData3, (err, result) => {
        //     if (err) {
        //         console.error("Select values error:", err.message);
        //     } else {
        //         console.log(result);
        //     }
        // });

        // // ## read specific table customers
        // connection.query(selectWilcardData, (err, result) => {
        //     if (err) {
        //         console.error("Select values error:", err.message);
        //     } else {
        //         console.log(result);
        //     }
        // });

        // // ## escaping2
        // // Escape query values by using the placeholder ? method:
        // var adr = 'Mountain 21';
        // var sql = 'SELECT * FROM customers WHERE address = ?';
        // connection.query(sql, [adr], (err, result) => {
        //     if (err) {
        //         console.error("Select values error:", err.message);
        //     } else {
        //         console.log(result);
        //     }
        // });

        // ## escaping3
        // Escape query values by using the placeholder ? method:
        // If you have multiple placeholders, the array contains multiple values, in that order:
        var name = 'Amy';
        var adr = 'Mountain 21';
        var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
        connection.query(sql, [name, adr], (err, result) => {
            if (err) {
                console.error("Select values error:", err.message);
            } else {
                console.log(result);
            }
        });

        // ## Update data
        connection.query(updateData, (err, result) => {
            if (err) {
                console.error("Update values error:", err.message);
            } else {
                console.log(result.affectedRows + " record(s) updated");
            }
        });
    };
});

// connection.end();