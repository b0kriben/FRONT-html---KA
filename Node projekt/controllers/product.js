import Product from '../models/product.js'


export const getAddProduct = (req, res) => {
    res.render('add-product.ejs', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
}

export const postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

export const getAllProducts = (req, res) => {
    res.render('shop.ejs', {
        pageTitle: 'Shop',
        path: '/',
        prods: Product.getAllProducts()
    })
}