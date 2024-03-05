const AuthModel=require('../AuthModel/login')

exports.login = async function (req, res, next) {

    let emailid = req.query.username;
    let password = req.query.password;

    // const usernameExist = await addemployeeSchema.scan().where("username").eq(req.body.username).exec();

         try {

            let userexist = await AuthModel(emailid, password, 1)
           let ghghd =  userexist.recordsets[1]
            if (ghghd[0].message == "Success") {
                res.status(200).json({
                    
                    "Success": true,
                    "Message": "Successful",
                    "Data": userexist.recordsets[0]
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
        }
    }


