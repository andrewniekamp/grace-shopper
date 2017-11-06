const router = require('express').Router()
const { Category } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Category.findAll()
  .then(categories => res.json(categories))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Category.findById(req.params.id)
  .then(category => res.json(category))
  .catch(next)
})
