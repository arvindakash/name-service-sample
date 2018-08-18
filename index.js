"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());
restService.get('/',function(req,res){
  return res.json({
    speech: 'sample',
    displayText: 'sample',
    source: "webhook-name-sample"
  });
});
restService.post("/checkavailable", function(req, res) {
  return req.body;
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.name
      ? req.body.queryResult.parameters.name
      : "Seems like some problem. Speak again.";
  return res.json({
    speech: name,
    displayText: name,
    source: "webhook-name-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
