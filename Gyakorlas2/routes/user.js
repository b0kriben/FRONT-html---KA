import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'

const router = express.Router()
const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_dirname)

router.use(bodyParser.urlencoded({extended: false}))

router.get("/users", (req, res) =>{
    console.log("App use 1. üzenet.")
    res.sendFile(path.join(_filename, '..', 'views', 'index.hrml'))
})

router.get("/users", (req, res) =>{
    console.log("App use 2. üzenet.")
    res.sendFile(path.join(_dirname, '..', 'views', 'users.hrml'))
})

router.post("/creat-user", (req, res) =>{
    const userName = req.body.userName
    console.log("POST üzenet "+ userName)
    res.redirect("/users")
})

export default router