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
restService.post('/checkavailable', function(request, response) {
  var name = request.body.queryResult &&
    request.body.queryResult.parameters &&
    request.body.queryResult.parameters.name
      ? request.body.queryResult.parameters.name
      : "will get result soon.";
  return response.json({
    fulfillmentText:name,
    source:'dialogflow sample.'});
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
