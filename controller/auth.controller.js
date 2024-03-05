const AuthModel = require('../model/login.model')

const login = async function (req, res, next) {

    let emailID = req.query.username;
    let password = req.query.password;

    // const usernameExist = await addemployeeSchema.scan().where("username").eq(req.body.username).exec();

    try {

        let userExist = await AuthModel.loginfunction(emailID, password, 1)
        let sqlMessage = userExist.recordsets[1]
        if (sqlMessage[0].message == "Success") {
            res.status(200).json({
                "Success": true,
                "Message": "Successful",
                "Data": userExist.recordsets[0]
            });
        } else {
            return res.status(200).send({
                "Success": false,
                "Message": "Already Exists",
                "Data": []
            });
        }
    } catch (err) {
        console.log(err);
        next(err)
    }
}


module.exports = { login }


