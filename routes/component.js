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
  
/* GET Display Add page. CREATE  */
router.get('/add', (req, res, next)=> {
    res.render('index', { title: 'Add Component' });
});

/* POST process the Add page. CREATE */
router.post('/add', (req, res, next)=> {

    // instantiate a new object of type Component
    let component = Component.Model({
        "partID":req.body.partID,
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price
    });

    Component.Model.create(component, (err, Component) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/component-list');
    });
});

/* GET Display Edit page. UPDATE */
router.get('/edit/:id', (req, res, next)=> {
    let id = req.params.id;

    // pass id to the db 
    Component.Model.findById(id, (err, ComponentToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        // show the edit view
        res.render('index', { title: 'Edit Component', data: ComponentToEdit });
    });
});

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', (req, res, next)=> {
    let id = req.params.id;

     // instantiate a new object of type Component
     let updatedComponent = Component.Model({
        "_id": id, 
        "partID":req.body.partID,
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price
    });

    Component.Model.updateOne({_id: id}, updatedComponent, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/component-list');
    });
});

/* GET process the Delete page. DELETE */
router.get('/delete/:id', (req, res, next)=> {
    let id = req.params.id;

    Component.Model.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/component-list');
    });
});


module.exports = router;