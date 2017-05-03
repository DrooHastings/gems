var express = require('express');
var mongoose = require ('mongoose');
var Gem = require('./models/gems');
var bodyParser = require ('body-parser');

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/gemsDb', function(err){
  console.log(err);
});


app.get('/gems', function(req, res){
  console.log('in gems get -->', req.body);
  Gem.find({},function(err, gemResults){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }else {
      console.log('gemResults', gemResults);
      res.send(gemResults);
    }//end else

  });//end Gems.find
});//end get

app.post('/gems', function(req, res){
  console.log('in gems post -->', req.body);
  var newGem = new Gem ({
    name: req.body.name,
  });
  newGem.save(function(err){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }else {
      console.log('new Gem created');
      res.sendStatus(201);
    }

  });
  
  res.sendStatus(200);

});



app.listen(3004, function(){
  console.log('server up on 3004');


});
