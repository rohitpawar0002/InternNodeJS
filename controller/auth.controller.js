const LoginModel = require('../model/login.model')
const RegisterModel=require('../model/registet.model')

const login = async function (req, res, next) {

    let emailID = req.query.username;
    let password = req.query.password;

    // const usernameExist = await addemployeeSchema.scan().where("username").eq(req.body.username).exec();

    try {

        
        let userExist = await LoginModel.loginfunction(emailID, password, 2)
         let sqlMessage = userExist.recordsets[0]
        // if (sqlMessage[0].message == "Success")
        if (sqlMessage[0].userexists == "1") {
            res.status(200).json({
                "Success": true,    
                "Message": "Already Exists",
                "Data": userExist.recordsets[0]
            });
        } else if(sqlMessage[0].notexists == "0"){
            
            return res.status(200).send({
                "Success": false,
                "Message": "New Login",
                "Data": []
            });
        }
        }
     catch (err) {
        console.log(err);
        next(err)
    }
}

const register = async function (req, res, next) {

     let bodyobj = req.body;
    // let password = req.query.password;

    // const usernameExist = await addemployeeSchema.scan().where("username").eq(req.body.username).exec();

    try {

        
        let userExist = await RegisterModel.registerfunction(bodyobj,1)
         let sqlMessage = userExist.recordsets[0]
        // if (sqlMessage[0].message == "Success")
        if (sqlMessage[0].message == "Success") {
            res.status(200).json({
                "Success": true,
                "Message": "Successful",
                "Data": userExist.recordsets[0]
            });
        } else if(sqlMessage[0].message == "1"){
            
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


module.exports = { login,register }


