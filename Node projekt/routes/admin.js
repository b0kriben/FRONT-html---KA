import express from 'express'

import * as controllers from '../controllers/product.js'

const router = express.Router()

/**
 * 
 */

router.get('/add-product', controllers.getAddProduct)

router.post('/add-product', controllers.postAddProduct)

export default router