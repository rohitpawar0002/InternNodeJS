var sql=require("mssql")

const config={
    user:"sa",
    password:"12345",
    server:"localhost",
    database:"Intern",
    options:{
        encrypt:false,
        trustedConnection:true,    
    },

};

module.exports=config;