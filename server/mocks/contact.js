module.exports = function(app) {
  var express = require('express');
  var contactRouter = express.Router();

  contactRouter.get('/', function(req, res) {
    res.send({
      'contact': [

        {
          id: 1,
          title: "My email y'all:",
          email: 'tessalauralynn@gmail.com'
        },
      ]
    });
  });

  contactRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  contactRouter.get('/:id', function(req, res) {
    res.send({
      'contact': {
        id: req.params.id
      }
    });
  });

  contactRouter.put('/:id', function(req, res) {
    res.send({
      'contact': {
        id: req.params.id
      }
    });
  });

  contactRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/contact', contactRouter);
};
