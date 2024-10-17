import express from 'express'
import userRoutes from './products/product.js'
import userRoute from './products/admin.js'
import {fileURLToPath} from 'url'

const app = express()
const PORT = 3000

app.use("/", userRoutes)
app.use("/", userRoute)

app.listen(PORT, () => console.log(`Fut a szerver a http://localhost:3000${PORT} porton.`))