var mobile = require('../models/mobile');
// List of all mobiles
exports.mobile_list = async function(req, res) {
    try{
    themobile = await mobile.find();
    res.send(themobile);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific mobile.
exports.mobile_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mobile detail: ' + req.params.id);
};
// Handle mobile create on POST.
exports.mobile_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: mobile create POST');
};
// Handle mobile delete form on DELETE.
exports.mobile_delete = function(req, res) {
res.send('NOT IMPLEMENTED: mobile delete DELETE ' + req.params.id);
};
// Handle mobile update form on PUT.
exports.mobile_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mobile update PUT' + req.params.id);
};