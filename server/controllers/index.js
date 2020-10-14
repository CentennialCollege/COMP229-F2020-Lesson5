let express = require('express');
let router = express.Router();

module.exports.DisplayHomePage = (req, res, next) => {

    console.log("Home Page Controller");

    res.render('index', { title: 'Home' });
  }
  
module.exports.DisplayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
  }

module.exports.DisplayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
  }

module.exports.DisplayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
  }
  
module.exports.DisplayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
  }
