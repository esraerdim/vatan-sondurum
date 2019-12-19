const express = require('express');
const app= express();
var cors = require('cors')
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
var db

MongoClient.connect('mongodb+srv://esraerdim:erdim123@cluster0-thmxf.mongodb.net/vatancomputer?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.log(err)
    db = client.db('vatancomputer') // whatever your database name is
    app.listen(process.env.PORT || 5000, () => {
      console.log('listening on 5000')
    })
  })
  
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true , limit : '1mb'})); 
app.use(bodyParser.json());

app.get("/",async(req,res)=>{
   res.status(200).send("Hoşgeldiniz")
 })
app.get("/getproducts",async(req,res)=>{
    
     var cursor = await db.collection("urunler").find().toArray(function(err, results) {
         if(err){
            res.status(204).send("err")
         }
         res.status(200).json(results)
         
      })
    }) 

    app.get("/getphones",async(req,res)=>{
    
        var cursor = await db.collection("urunler").find({"tur":"telefon"}).toArray(function(err, results) {
            if(err){
               res.status(204).send("err")
            }
            res.status(200).json(results)
            
         })
       }) 
   

       app.get("/getmarka",async(req,res)=>{
    
        var cursor = await db.collection("products").find().toArray(function(err, results) {
            if(err){
               res.status(204).send("err")
            }
            res.status(200).json(results)
            
         })
       }) 
       
       app.get("/getslider",async(req,res)=>{
    
         var cursor = await db.collection("slider").find().toArray(function(err, results) {
             if(err){
                res.status(204).send("err")
             }
             console.log(results)
             res.status(200).json(results)
             
          })
        }) 
        app.get("/getuye",async(req,res)=>{
    
         var cursor = await db.collection("members").find().toArray(function(err, results) {
             if(err){
                res.status(204).send("err")
             }
             res.status(200).json(results)
             
          })
        }) 
        app.get("/getstoktakiler",async(req,res)=>{
    
         var cursor = await db.collection("urunler").find({"tur":"televizyon"}).toArray(function(err, results) {
             if(err){
                res.status(204).send("err")
              
             }
             console.log(results)
             res.status(200).json(results)
             
          })
        }) 
        app.get("/getstok",async(req,res)=>{
    
         var cursor = await db.collection("urunler").find({"marka":"Apple"}).toArray(function(err, results) {
             if(err){
                res.status(204).send("err")
              
             }
             console.log(results)
             res.status(200).json(results)
             
          })
        }) 
       
        app.get("/gettelevizyon",async(req,res)=>{
    
         var cursor = await db.collection("urunler").find({"tur":"televizyon"}).toArray(function(err, results) {
             if(err){
                res.status(204).send("err")
             }
             res.status(200).json(results)
             console.log(results)
             
          })
        }) 
    