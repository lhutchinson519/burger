var orm = require("../config/orm.js")

// the code that will call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, burgerId, cb) {
        orm.updateOne("burgers", objColVals, burgerId, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;