let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Component = require('../models/component');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/* GET Component-list page. */
router.get('/component-list', function(req, res, next) {

  
  Component.Model.find( (err, data) => {
    if(err)
    {
      console.error(err);
      res.end()
    }

    res.render('index', { title: 'Component List', components: data });
  });
  
});


module.exports = router;
