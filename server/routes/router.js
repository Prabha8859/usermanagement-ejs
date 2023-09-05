const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
/**
route.get('/',(req,res)=>{
    res.render('index');
});
        @description Root Route
        @method GET /
 */
route.get('/', services.homeRoutes);
/**
route.get('/add-user', (req,res)=>{
    res.render('add_user');
});
@description add Users
@method GET /add-user
 */
route.get('/add-user' , services.add_user);
/**
route.get('/update_user', (req,res)=>{
    res.render('update_user');
})
@description for update user 
@method GET /update-user
 */
route.get('/update_user', services.update_user);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.get('/api/users/:id', controller.findUserId);
route.put('/api/users/:id', controller.update);
route.delete('/api/users', controller.delete);

module.exports = route