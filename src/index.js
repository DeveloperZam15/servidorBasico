import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("Bienvenido al servidor!");
});

app.listen(3000);
console.log('Servidor en puerto', 3000);
