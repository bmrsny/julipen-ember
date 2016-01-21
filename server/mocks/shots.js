/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var shotsRouter = express.Router();
  var shots = [
   {
      id: 1,
     source: "/images/shot1.jpg",
      title: "Unicorn Dancing",
      description: "This is a picture of a unicorn doing the macarena",
      project: 1,
      user: 1,
      comment: 1
    },
    {
      id: 2,
     source: "/images/shot2.jpg",
      title: "Turtle Dancing",
      description: "This is a picture of a turtle doing the electric slide",
      project: 1,
      user: 2,
      comment: 2
    }
  ]

  shotsRouter.get('/', function(req, res) {
    res.send({
      'shots': shots
    });
  });

  shotsRouter.post('/', function(req, res) {
    res.status(201).end();
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
