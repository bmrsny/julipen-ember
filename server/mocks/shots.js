/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var shotsRouter = express.Router();
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  var nedb = require('nedb');
  var shotDB = new nedb({ filename: 'shots', autoload: true});

  shotsRouter.get('/', function(req, res) {
    shotDB.find(req.query).exec(function(error, shots) {
      res.send({
        'shots': shots
      });
    });
  });

  shotsRouter.post('/', function(req, res) {
    shotDB.find({}).sort({id : -1}).limit(1).exec(function(err, shots) {
      if (shots.length !=0)
        req.body.shot.id = shots[0].id + 1;
      else
        req.body.shot.id = 1;
      shotDB.insert(req.body.shot, function(err, newShot) {
        res. status(201);
        res.send(
          JSON.stringify(
          {
            shot : newShot
          }));
      });
    })
  });


  shotsRouter.get('/:id', function(req, res) {
    res.send({
      'shots': {
        id: req.params.id
      }
    });
  });

  shotsRouter.put('/:id', function(req, res) {
    res.send({
      'shots': {
        id: req.params.id
      }
    });
  });

  shotsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/shots', require('body-parser'));
  app.use('/api/shots', shotsRouter);
};
