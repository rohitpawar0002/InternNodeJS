const {Router}=require('express');
const express=require('express');
const router=express.Router();
const AuthController = require('../Authcontroller/Login');

router.get('/login',AuthController.login);
module.exports=router;