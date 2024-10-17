import fs from 'fs'
import path from 'path'
import __dirname from '../util/rootpath.js'

const FILE_PATH = path.join(__dirname, 'data', 'product.json')

const getFileContent = () => {
    let content = []
    try{
        content = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
    }catch (err){
        console.log(`File reading error: ${err}`)
    }
    return content
}

const setFileContent = (content) => {
    try{
        fs.writeFileSync(FILE_PATH, JSON.stringify(content))
    }catch (err){
        console.log(`File reading error: ${err}`)
    }
}

class Product {
    constructor(title) {
        this.title = title
    }

    save(){
        const products = getFileContent()
        products.push(this)
        setFileContent(products)
    }

    static getAllProducts(){
        return getFileContent()
    }


}

export default Product
