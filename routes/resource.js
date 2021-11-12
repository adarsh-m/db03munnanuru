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
// Handle mobile update form on PUT.
exports.mobile_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await mobile.findById( req.params.id)
// Do updates of properties
if(req.body.mobile_type)
toUpdate.mobile_type = req.body.mobile_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// GET request for one mobile.
router.get('/mobile/:id', mobile_controller.mobile_detail);
// for a specific mobile.
exports.mobile_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await mobile.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    if(req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;
    };
module.exports = router;