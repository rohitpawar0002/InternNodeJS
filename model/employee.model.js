const sql = require('mssql');
const config = require('../Config')

const   addemployee = async function (objBody, mode) {

    try {
        await sql.connect(config);
        var request = new sql.Request();
        request.input('name', sql.VarChar(500), objBody.name);
        request.input('EmpRole', sql.VarChar(500), objBody.role);
        request.input('EmpID', sql.VarChar(500), objBody.empId);
        request.input('gender', sql.VarChar(500), objBody.gender);
        request.input('DOB', sql.VarChar(500), objBody.date);
        request.input('age', sql.VarChar(500), objBody.age.toString());
        request.input('blood', sql.VarChar(500), objBody.blood);
        request.input('Email', sql.VarChar(500), objBody.email);
        request.input('Mobile_no', sql.VarChar(500), objBody.mobile.toString());
        request.input('Password', sql.VarChar(500), objBody.password);
        request.input('CAaddress', sql.VarChar(500), objBody.CurrentAddress);
        request.input('PAaddress', sql.VarChar(500), objBody.PermanentAddress);
        request.input('country', sql.VarChar(500), objBody.country);
        request.input('state', sql.VarChar(500), objBody.state);
        request.input('city', sql.VarChar(500), objBody.city);
        request.input('addharno', sql.VarChar(500), objBody.AddharNumber.toString());
        request.input('mode', sql.Int, mode);

        const result = await request.execute('pro_AddEmp');
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error caught:', error);
        throw error; // Rethrow the error to handle it at the caller level
    }
}

const getEmployee = async function () {
    try {
        await sql.connect(config);
        var request = new sql.Request();
        const result = await request.query("select * from AddEmpMain");
        return result.recordset
    } catch (error) {
        throw error
    }
}

const deleteEmployee = async function () {
    try {
        await sql.connect(config);
        var request = new sql.Request();
        const result = await request.query("delete from AddEmpMain where PK_EmpId=id");
        return result.recordset
    } catch (error) {
        throw error
    }
}

module.exports = { addemployee, getEmployee,deleteEmployee };
