const { isUtf8 } = require("buffer");
const { log, error } = require("console");
const fs= require("fs")

// Sync...Write :-It returns the value 
// fs.writeFileSync("./test.txt","Hey There");


//Async..Write
// fs.writeFile("./test.text","Hi There",(err)=>{})


// Sync(Blocking request)...Read :- It returns the value 
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// Async(Non-Blocking Request)...Read -It never returns the value 
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })

// Append Current date in existing file
// fs.appendFileSync("./test.text",new Date().getDate().toLocaleString());

//Copy file 
// fs.copyFileSync("test.text","./copy.text");

//delete file 
// fs.unlinkSync("./copy.text");

// Blocking operations

// console.log("1");
// const result=fs.readFileSync("contacts.txt","utf-8");
// console.log(result);
// console.log("2");

// Non-Blocking operations

// console.log("1");
// fs.readFile("contacts.txt","utf-8",(err,result)=>{
//     console.log(result);
// });
// console.log("2");


//Default Thread Pool Size=4
//Max? -8core cpu -8

const os=require("os");  // Module
console.log(os.cpus().length); // Check your system core cpu