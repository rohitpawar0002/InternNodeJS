const sql = require('mssql');
const config = require('../Config')

const addEmpfunction = async function (objBody,mode) {

    try {
       await sql.connect(config);
        var request = new sql.Request();
        request.input('name', sql.VarChar(500), objBody.name);
        request.input('Email', sql.VarChar(500), objBody.email);
        request.input('Mobile_no', sql.VarChar(500), objBody.mobile.toString());
        request.input('Password', sql.VarChar(500), objBody.password);
        request.input('mode', sql.Int, mode);

        const result = await request.execute('pro_AddEmp');
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error caught:', error);
        throw error; // Rethrow the error to handle it at the caller level
    }
}

module.exports = { addEmpfunction };
