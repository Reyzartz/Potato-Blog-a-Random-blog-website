require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const blogRoutes = require('./routes/BlogRoutes')


mongoose.connect(process.env.dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>{
        app.listen(3000,()=>{
            console.log("Connected to Server")
        })
        console.log("Conneted to DataBase")
    })
    .catch((err)=>{console.error(err)})

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))




app.get("/",(req,res)=>{
    res.redirect("/blogs")
})

app.use("/blogs",blogRoutes)

app.get("/about",(req,res)=>{
    res.render('about')
})


app.use((req,res)=>{
    res.render("404")
})