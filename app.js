const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const sql = require('mssql');
const config = require("./Config");
const authRouts = require("./routes/auth.router");
const employeeRoute = require("./routes/employee.router")
const cors = require("cors");



app.use(async function (_req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // init sql connection
    

    // Pass to next layer of middleware
    next();
});


//const FetchEmployee = require("./api/routes/AddEmployeeRouts");

// parse requestr body to `json format`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth",cors(), authRouts);
app.use("/api/employee",cors(), employeeRoute);

// global error handler
function errorHandler(error, _req, res, _next) {
    res.status(500).send(error.message);
}

app.use(errorHandler)

app.listen(8080, function () {
    console.log('Server is running on 8080....');
});
