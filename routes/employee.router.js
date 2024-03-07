const router = require('express').Router();
const employeeController = require("../controller/employee.controller");

router.get('/', employeeController.getEmployee);
router.post('/addemployee', employeeController.addEmp);


module.exports = router;