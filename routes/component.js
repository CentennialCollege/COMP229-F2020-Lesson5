let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Component = require('../models/component');

/* GET Component-list page. READ */
router.get('/', function(req, res, next) {

  
    Component.Model.find( (err, data) => {
      if(err)
      {
        console.error(err);
        res.end()
      }
  
      res.render('index', { title: 'Component List', components: data });
    });
    
  });
  
/* GET Add page. CREATE  */
router.get('/add', (req, res, next)=> {
    res.render('index', { title: 'Add Component' });
});

/* POST process the Add page. CREATE */
router.post('/add', (req, res, next)=> {
    
});

/* GET Edit page. UPDATE */
router.get('/edit/:id', (req, res, next)=> {

});

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', (req, res, next)=> {

});

/* GET process the Delete page. DELETE */
router.get('/delete/:id', (req, res, next)=> {

});


module.exports = router;