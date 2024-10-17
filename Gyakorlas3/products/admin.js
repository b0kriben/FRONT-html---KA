import express from 'express'

const admin = express.Product()

admin.get("/admin", (req, res) =>{
    console.log("App use 1. üzenet.")
    res.send("<h2>admin page</h2>")
})

admin.get("/admin/product", (req, res) =>{
    console.log("App use 2. üzenet.")
    res.send(`<form action="/user methode="POST">
    <input type="text" name="userName">
    <button type="submit">Send</button>
    `)
})