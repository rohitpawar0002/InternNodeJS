const sql = require('mssql');
const config = require('../Config');

const getCountry= async function () {
    try {
        await sql.connect(config);
        var request = new sql.Request();
        const result = await request.query("select * from AddEmpCountry");
        return result.recordset
    } catch (error) {
        throw error
    }
}

module.exports = { getCountry};
