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

const tempBlogs= [
    {
        title:"How to pet a potato in 3 steps",
        body:"-Approaching a potato Cautiously\
              -Ask the owner for permission to pet the potato\
              -Back off if the dog shows signs of aggression or discomfort"
    },
    {
        title:"how to get a potato to sleep",
        body:"-Make a sleep schedule\
        -Bath it before sleep\
        -Put on its fresh pajamas\
        -Give it a good night kiss before sleep"
    },
    {
        title:"how to bath a potato",
        body:"-Hold it gentley with both hands\
        -Ask the owner for permission to pet the potato\
        -Back off if the dog shows signs of aggression or discomfort"
    },
    {
        title:"HOw to train a potato to stay still",
        body:"-Give your potato a traning name eg:- puto\
        -Ask the owner for permission to pet the potato\
        -Back off if the dog shows signs of aggression or discomfort"
    }
]

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