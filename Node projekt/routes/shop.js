import express from 'express'

import * as controllers from '../controllers/product.js'

const router = express.Router()

router.get('/', controllers.getAllProducts)

export default router