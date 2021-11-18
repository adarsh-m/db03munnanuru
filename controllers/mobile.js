var mobile = require('../models/mobile'); 
 
// Handle mobile delete form on DELETE. 
exports.mobile_delete = async function(req, res) { 
        console.log("delete "  + req.params.id) 
        try { 
            result = await mobile.findByIdAndDelete( req.params.id) 
            console.log("Removed " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": Error deleting ${err}}`); 
        } 
}; 
 


//VIEWS 
// Handle a show all view 
exports.mobile_view_all_Page = async function(req, res) { 
    try{ 
        themobile = await mobile.find(); 
        res.render('mobile', { title: 'mobile Search Results', results: themobile }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// List of all mobile 
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

//Handle mobile create on POST. 
exports.mobile_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new mobile(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"mobile_type":"goat", "cost":12, "size":"large"} 
    document.Brand = req.body.Brand; 
    document.cost = req.body.cost; 
    document.color = req.body.color; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// for a specific mobile. 
exports.mobile_detail = async function(req, res) { 
    console.log("details"  + req.params.id) 
    try { 
        result = await mobile.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.mobile_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await mobile.findById( req.query.id) 
        res.render('mobiledetails',  
{ title: 'mobile Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a mobile. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.mobile_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('mobilecreate', { title: 'mobile Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a mobile. 
// query provides the id 
exports.mobile_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await mobile.findById(req.query.id) 
        res.render('mobileupdate', { title: 'mobile Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

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
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    }
    if(req.body.checkboxsale) toUpdate.sale = true; 
else toUpdate.same = false; 
};

// Handle a delete one view with id from query 
exports.mobile_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await mobile.findById(req.query.id) 
        res.render('mobiledelete', { title: 'mobile Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};