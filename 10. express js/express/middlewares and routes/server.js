const express = require("express")

const app = express()

const port = 5000

const firsthandler = ((req, res, next) => {
    if(10 < 20){
        next()
    }
})

const secondhandler = ((req, res, next) => {
    if(10 > 20){
        next()
    }
    else{
        console.log("sorry, you are not allowed")
    }
})

const thirdhandler = ((req, res, next) => {
    if(30 < 40){
        next()
    }
})

app.get('/home', firsthandler, (req,res) => {
    res.send("Hello, I am home page")
})

app.get('/about', secondhandler,  (req,res) => {
    res.send("this is about page")
})

app.get('/user/:121', thirdhandler,  (req,res) => {
    res.send("you searched for 121")
})

app.listen(port, () => {
    console.log('server start running...........')
})