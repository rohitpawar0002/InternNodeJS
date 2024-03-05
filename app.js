const express=require('express');
const app = express();
const bodyParser = require("body-parser");


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



const routs = require("./routes/loginControllers");

//const FetchEmployee = require("./api/routes/AddEmployeeRouts");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/getLoginCre", routs);


app.listen(8080,function(){
    console.log('Server is running on 8080....');
});
