const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', (req, res, next) => {
  Product.findAll()
  .then(products => res.json(products))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
  .then(product => res.json(product))
  .catch(next)
})

//add product
router.post('/', (req, res, next) =>{
  Product.create(req.body)
  .then(newProduct=>{
    res.json(newProduct)
  })
  .catch(next)
})

//update product
router.put('/products/:id', (req, res, next)=>{
	const id = req.params.id;
	Product.findById(id)
	.then(foundProduct =>{
		foundProduct.update(req.body)
	})
	.then(updatedProduct =>{
		res.json(updatedProduct)
	})
	.catch(next)
})

module.exports = router
