var express = require('express'); 
const mobile_controlers= require('../controllers/mobile'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var mobile_controller = require('../controllers/mobile'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// mobile ROUTES /// 
 
// POST request for creating a mobile.  
router.post('/mobile', mobile_controller.mobile_create_post); 
 
// DELETE request to delete mobile. 
router.delete('/mobile/:id', mobile_controller.mobile_delete); 
 
// PUT request to update mobile. 
router.put('/mobile/:id', mobile_controller.mobile_update_put); 
 
// GET request for one mobile. 
router.get('/mobile/:id', mobile_controller.mobile_detail); 
 
// GET request for list of all mobile items. 
router.get('/mobile', mobile_controller.mobile_list); 
 
/* GET mobile */ 
router.get('/mobile', mobile_controlers.mobile_view_all_Page ); 

/* GET detail mobile page */ 
router.get('/detail', mobile_controlers.mobile_view_one_Page); 

/* GET create mobile page */ 
router.get('/create', mobile_controlers.mobile_create_Page); 

/* GET create update page */ 
router.get('/update', mobile_controlers.mobile_update_Page); 

/* GET create mobile page */ 
router.get('/delete', mobile_controlers.mobile_delete_Page);


module.exports = router;