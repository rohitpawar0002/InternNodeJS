const router = require('express').Router();
const employeeController = require("../controller/employee.controller");
const countryStateCityController=require("../controller/countryStateCity.controller");

router.get('/', employeeController.getEmployee);
router.post('/addemployee', employeeController.addEmp);
router.delete('/delete',employeeController.deleteEmployee);
router.get('/:employeeID',employeeController.getEmployeeByID);
router.put('/:employeeID',employeeController.updateEmployeeByID);
router.get('/countryStateCity',countryStateCityController.getCountry);



module.exports=router;