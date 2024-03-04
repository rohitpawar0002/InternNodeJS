const express=require('express');
var app=express();
var sql=require('mssql');
const sqlConfig=require('./Model/AddEmployeeModel');

app.get('/',function(req,res){
    sql.connect(sqlConfig,function(err){
        if(err)console.log(err);

        var request=new sql.Request();

        request.query('select * from AngularEmpRegister',function(err,recordset){
            if(err)console.log(err);

            res.send(recordset);
            console.log(recordset);
        });
    });
});

app.listen(8080,function(){
    console.log('Server is running on 8080....');
});
