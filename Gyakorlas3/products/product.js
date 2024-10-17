import express from 'express'

const product = express.Product()

product.get("/product", (req, res) =>{
    console.log("App use 1. üzenet.")
    res.send("<h2>product page</h2>")
})

product.post("/product", (req, res) =>{
    console.log("POST toy üzenet.")
    res.send(`Megkaptam a játékot.`)
})

export default product