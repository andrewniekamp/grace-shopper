const router = require('express').Router();
const { User, Order, Product, productOrders } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:id/cart', (req, res, next) => {
  User.findById(req.params.id)
    .then(user =>
      Order.findOrCreate({
        where: { userId: user.id, isSubmitted: false },
        include: [{ model: Product }]
      })
    )
    .then(order => res.json(order));
});

router.put('/:id/cart/submit', (req, res, next) => {
  User.findById(req.params.id)
    .then(user =>
      Order.find({
        where: { userId: user.id, isSubmitted: false },
        include: [{ model: Product }]
      })
    )
    .then(order => order.update({ isSubmitted: true, status: 'submitted' }))
    .then(order => res.json(order));
});

router.put('/:id/cart/add', (req, res, next) => {
  console.log('here we are in routes', req.body)
  // let quantity = req.body.quantity
  let currentOrder = null;
  let addedProduct = null;
  User.findById(req.params.id)
    .then(user =>
      Order.find({
        where: { userId: user.id, isSubmitted: false },
        include: [{ model: Product }]
      })
    )
    .then(order => {
      currentOrder = order;
      return Product.findById(Number(req.body.productId)).then(product => {
        addedProduct = product;
        currentOrder.addProduct(product)
      });
    })
    .then(stuff => {
      productOrders.findAll({
        where:
        {
          orderId: currentOrder.id,
          productId: Number(req.body.productId)
        }
      }).then(productOrder => {
        console.log("THIS IS THE THING YOU WANT ",JSON.stringify(productOrder[0].quantity + 1))
    return productOrder[0].update({quantity: productOrder[0].quantity + 1})
  })
      })
    .then(() => res.json(addedProduct))
    .catch(next);
});

//how to access quantity? won't work. have to check this. 