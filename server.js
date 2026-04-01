const express = require ("express");
const app = express();
const PORT=4000;
app.get("/",(req ,res)=>{
    res.send("Welcome to site at local host  ")
});
app.get("/home",(req ,res)=>{
    res.send("home page  ")
});
app.listen (PORT,()=>{
    console.log(`server running on this http://localhost:${PORT}`);
});
