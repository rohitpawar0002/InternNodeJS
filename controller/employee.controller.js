const employeeModel = require('../model/employee.model')

const addEmp = async function (req, res, next) {

    let bodyobj = req.body;
    // let password = req.query.password;

    // const usernameExist = await addemployeeSchema.scan().where("username").eq(req.body.username).exec();

    try {


        let userExist = await employeeModel.addemployee(bodyobj, 1)
        let sqlMessage = userExist.recordsets[0]
        // if (sqlMessage[0].message == "Success")
        if (sqlMessage[0].message == "1") {
            res.status(200).json({
                "Success": true,
                "Message": "Successful",
                "Data": userExist.recordsets[0]
            });
        } else {
            return res.status(200).send({
                "Success": false,

                "Message": "Can not inserted ",
                "Data": []
            });
        }
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}


const getEmployee = async function (req, res, next) {
    try {
        const userListResult = await employeeModel.getEmployee()
        res.status(200).send({ userList: userListResult })
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}

const deleteEmployee = async function (req, res, next) {
    try {
        await employeeModel.deleteEmployee()
        res.status(200).send({
            "Success": true
        })
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}

const getEmployeeByID = async function (req, res, next) {
    try {
        const { employeeID } = req.params;
        const employee = await employeeModel.getEmployeeByID(employeeID)
        res.status(200).send({
            "Success": true,
            data: employee
        })
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}

const updateEmployeeByID = async function (req, res, next) {
    try {
        const { employeeID } = req.params;
        const payload = req.body;

        await employeeModel.updateEmployeeById(employeeID, payload)
        res.status(200).send({
            "Success": true
        })
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}

module.exports = { addEmp, getEmployee, deleteEmployee, getEmployeeByID, updateEmployeeByID }
