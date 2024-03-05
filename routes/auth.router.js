const router = require('express').Router();
const AuthController = require('../controller/auth.controller');

router.get('/login', AuthController.login);
router.post('/register', AuthController.login);


module.exports = router;