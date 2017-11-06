const router = require('express').Router()
const {User, Order, Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id/checkout', (req,res,next)=> {
  User.findById(req.params.id)
  .then(user => Order.findOrCreate( {where: {userId: user.id, isSubmitted: false}, include: [{model: Product}] }))
  .then(order => res.json(order))
})
