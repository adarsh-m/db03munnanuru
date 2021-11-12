var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mobile_controller = require('../controllers/mobile');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// mobile ROUTES ///
// POST request for creating a mobile.
router.post('/resource/mobile', mobile_controller.mobile_create_post);
// DELETE request to delete mobile.
router.delete('/resource/mobile/:id', mobile_controller.mobile_delete);
// PUT request to update mobile.
router.put('/resource/mobile/:id', mobile_controller.mobile_update_put);
// GET request for one mobile.
router.get('/resource/mobile/:id', mobile_controller.mobile_detail);
// GET request for list of all mobile items.
router.get('/resource/mobile', mobile_controller.mobile_list);
module.exports = router;