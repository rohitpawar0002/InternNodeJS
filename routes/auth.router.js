const router = require('express').Router();
const AuthController = require('../controller/auth.controller');

router.get('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/addemp',)


module.exports = router;