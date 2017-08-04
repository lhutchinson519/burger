var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


//Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function() {
    	//res.render("index", burger);
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;