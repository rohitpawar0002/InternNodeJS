const { isUtf8 } = require("buffer");
const { log } = require("console");
const fs= require("fs")

// Sync...Write :-It returns the value 
// fs.writeFileSync("./test.txt","Hey There");


//Async..Write
// fs.writeFile("./test.text","Hi There",(err)=>{})


// Sync...Read :- It returns the value 
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// Async...Read -It never returns the value 
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
})