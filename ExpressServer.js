const http=require("http");
const fs=require("fs");
const express=require("express");
const path=require("path")
const url=require("url");

const app= express();
const port=8000;

const staticPath=path.join(__dirname,"../public");           //for creating static pages
app.use(express.static(staticPath));

const currentDate = new Date();
const dateString = currentDate.toDateString();
const timeString = currentDate.toTimeString();


app.get("/",(req,res)=>{
    const currentDate = new Date();
    if(req.url=== "/favicon.ico")  return res.end();
    const log=`Date & Time :  ${currentDate.toLocaleDateString()}     ${currentDate.toLocaleTimeString()}    Path : "${req.url}"        Method : ${req.method}    Request recieved\n`
    fs.appendFile("data.txt",log,(err,data)=>{
        if(err){
        res.end("Error occured in "/" path")
        }
    })
    const dataa=fs.readFileSync("index.html");
    res.end(dataa)
})

app.get("/notes",(req,res)=>{
    const currentDate = new Date();
    const log=`Date & Time :  ${currentDate.toLocaleDateString()}     ${currentDate.toLocaleTimeString()}     Path : "${req.url}"        Method : ${req.method}    Request recieved\n`
    fs.appendFile("data.txt",log,(err,data)=>{
    })
    const myUrl=url.parse(req.url,true);
    const semester=myUrl.query.sem
    if(req.url==="/notes"){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==1){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==2){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==3){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==4){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==5){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==6){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==7){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }else if(semester==8){
        const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/search.html");
        res.end(dataa);
    }
})

app.get("/about",(req,res)=>{
    const currentDate = new Date();
    const log=`Date & Time :  ${currentDate.toLocaleDateString()}     ${currentDate.toLocaleTimeString()}     Path : "${req.url}"        Method : ${req.method}    Request recieved\n`;
    fs.appendFile("data.txt",log,(err,data)=>{
    })
    const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/about.html");
    res.end(dataa);

})

app.get("/contact",(req,res)=>{
    const currentDate = new Date();
    const log=`Date & Time :  ${currentDate.toLocaleDateString()}     ${currentDate.toLocaleTimeString()}     Path : "${req.url}"        Method : ${req.method}    Request recieved\n`
    fs.appendFile("data.txt",log,(err,data)=>{
    })
    const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/contact.html");
    res.end(dataa);

})

app.get("/ourteam",(req,res)=>{
    const currentDate = new Date();
    const log=`Date & Time :  ${currentDate.toLocaleDateString()}     ${currentDate.toLocaleTimeString()}     Path : "${req.url}"        Method : ${req.method}    Request recieved\n`
    fs.appendFile("data.txt",log,(err,data)=>{
    })
    const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/ourteam.html");
    res.end(dataa);
})

app.get("/login",(req,res)=>{
    const currentDate = new Date();
    const log=`Date & Time :  ${currentDate.toLocaleDateString()}     ${currentDate.toLocaleTimeString()}     Path : "${req.url}"        Method : ${req.method}    Request recieved\n`;
    fs.appendFile("data.txt",log,(err,data)=>{
    })
    const dataa=fs.readFileSync("/home/rishi_ganeshe/Desktop/public/login.html");
    res.end(dataa);

})



app.listen(port,()=>{console.log(`Server Started On Port ${port}`);console.log("Date:", dateString);console.log("Time:", timeString);});

// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log("server Started"));
// 639E53063CA6FD7965343AB500DA43CA00A1