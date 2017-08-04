var connection = require("../config/connection.js")

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, cols, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
}

module.exports = orm;