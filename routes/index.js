var express = require('express');
var router = express.Router();

const sql = require("../data/dboperations");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Tes Connection */
router.get('/connect', function(req, res, next) {
  sql.connection().then((result) => {
    if(result.config){
      res.status(200).send({
        "message" : "Connection Successful"
      });
    }else{
      res.status(500).send({
        "message" : "Connection Failed"
      });
    }
  });
  // res.render('index', { title: 'Express' });
});

/* Tes Query */
router.get('/getData', function(req, res, next) {
  sql.getData().then((result) => {
    if(!result){
      res.status(400).send("Sayang sekali !");
    }else{
      res.send(result[0]);
    }
  });
});

module.exports = router;
