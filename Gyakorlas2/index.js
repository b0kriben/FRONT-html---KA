import express from 'express'
import userRoutes from './routes/user.js'

const app = express()
const PORT = 3000

app.use(userRoutes)

app.use((err, req, res, next) => {
    if(err){
        console.log(`Error: ${err}`)
        res.status(err.status || 500).send(`Hiba történt:  ${err}`)
    }
    next()
})

app.listen(PORT, () => console.log(`Fut a szerver a http://localhost:3000${PORT} porton.`))