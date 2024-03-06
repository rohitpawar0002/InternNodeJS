const employeeModel = require('../model/employee.model')

const addEmp = async function (req, res, next) {

    let bodyobj = req.body;
    // let password = req.query.password;

    // const usernameExist = await addemployeeSchema.scan().where("username").eq(req.body.username).exec();

    try {


        let userExist = await employeeModel.addemployee(bodyobj, 1)
        let sqlMessage = userExist.recordsets[0]
        // if (sqlMessage[0].message == "Success")
        if (sqlMessage[0].message == "Success") {
            res.status(200).json({
                "Success": true,
                "Message": "Successful",
                "Data": userExist.recordsets[0]
            });
        } else if (sqlMessage[0].message == "1") {

            return res.status(200).send({
                "Success": false,
                "Message": "Already Exists",
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


module.exports = { addEmp, getEmployee }
