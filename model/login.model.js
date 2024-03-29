const sql = require('mssql');
const config = require('../Config')


const loginfunction = async function (emailID, password, mode) {

    try {
        await sql.connect(config);
        var request = new sql.Request();
        request.input('Email', sql.VarChar(500), emailID);
        request.input('Password', sql.VarChar(500), password);
        request.input('mode', sql.Int, mode);

        const result = await request.execute('pro_AngularRegister');
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error caught:', error);
        throw error; // Rethrow the error to handle it at the caller level
    }
}

module.exports = { loginfunction };