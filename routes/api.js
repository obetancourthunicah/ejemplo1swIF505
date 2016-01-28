var express = require("express"),
    routes = express.Router();

module.exports = function(){

    routes.get('/getstatus', function(req,res,next){
        res.json({"datos":"ok"});
    });

    return routes;
};
