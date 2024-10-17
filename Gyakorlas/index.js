import express from 'express'

const app = express()
const PORT = 3000;

app.use("/", (req, res, next) =>{
    console.log("App use 1. üzenet.")
    next()
})

app.use("/user", (req, res, next) =>{
    console.log("App use 2. üzenet.")
    res.send("<h2>user page</h2>")
    next()
})

app.use("/", (req, res, next) =>{
    console.log("App use 3. üzenet.")
    res.send("Szia!")
})

app.listen(PORT, () => console.log(`Fut a szerver a http://localhost:3000${PORT} porton.`))