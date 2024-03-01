const http=require("http");
const fs=require("fs");
const url=require("url")

const myServer=http.createServer((req,resp)=>{
    if(req.url==="/favicon.ico") return resp.end();
    const log=`${Date.now()}:${req.url}:New Req Received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case"/":
            resp.end("Home Page");
            break;
            case"/about":
            resp.end("This is about page");
            break;
            case"/contact":
            resp.end("I am Rohit Pawar");
            break;
            default:
                resp.end("404 Not Found");            
        }

    });
});

myServer.listen(8000,()=>console.log("Server Started!"));