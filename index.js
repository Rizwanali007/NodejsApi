// import express from 'express'
// import  mysqlConnection  from './config'
const mysqlConnection = require('./config')
const express = require('express')


const app = express();

app.use(express.json());

app.listen(5006);
// const con = mysqlConnection

app.get("/users", (req, resp) => {
    mysqlConnection.query("select * from users", (err, result) => {
        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result)
        }
    })
});
app.get("/customers", (req, resp) => {
    mysqlConnection.query("select * from customers", (err, result) => {
        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result)
        }
    })
});



app.post("/users",(req,resp)=>{
    // console.log('RESP',resp)
    // const data = {name:"run",email:"run@gmail.com",password:"3553"};
    const data = req.body;
    mysqlConnection.query(`INsert INTO users SET ?`,data,(error,result,fields)=>{
        if(error) {
            console.log("EREREROR",error)
            // return resp.status(400).json({message: 'hfdhdd'})
        };
        resp.send(result)
    })
})


app.post("/customers",(req,resp)=>{
    // console.log('RESP',resp)
    // const data = {name:"run",address:'Highway 40'};
    const data = req.body;
    mysqlConnection.query('INsert INTO customers SET ?',data,(error,result,fields)=>{
        if(error) {
            console.log("EREREROR",error)
            // return resp.status(400).json({message: 'hfdhdd'})
        };
        resp.send(result)
    })
})

app.put("/users/:id",(req,resp)=>{
    const data = [req.body.name,req.body.email,req.body.password,req.params.id];
    // const data = req.body;
    mysqlConnection.query("UPDATE users SET name = ?, email = ?, password = ? where id = ?", data,(err,result,fields)=>{
           if(err){
            console.log("ERROR",err)
           }
           resp.send(result)
    })
})

app.put("/customers/:id",(req,resp)=>{
    const data = [req.body.name,req.body.address,req.params.id];
    // const data = req.body;
    mysqlConnection.query("UPDATE customers SET name = ?, address = ? where id = ?", data,(err,result,fields)=>{
           if(err){
            console.log("ERROR",err)
           }
           resp.send(result)
    })
})


app.delete("/users/:id",(req,resp)=>{
    mysqlConnection.query("DELETE FROM users WHERE id =" + req.params.id,(error,result)=>{
        if(error){
            console.log("ERROR",error)
        }
        resp.send(result)
    })
})

app.delete("/customers/:id",(req,resp)=>{
    mysqlConnection.query("DELETE FROM customers WHERE id =" + req.params.id,(error,result)=>{
        if(error){
            console.log("ERROR",error)
        }
        resp.send(result)
    })
})