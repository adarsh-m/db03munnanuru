/*
var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('mobile', { title: 'Search Results mobile' });
});

module.exports = router;

*/
var express = require('express'); 
const mobile_controlers= require('../controllers/mobile');
var router = express.Router();
/* GET mobile */ router.get('/', mobile_controlers.mobile_view_all_Page );
module.exports = router;
/* GET detail mobile page */ 
router.get('/detail', mobile_controlers.mobile_view_one_Page); 

