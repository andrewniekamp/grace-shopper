const router = require('express').Router();
const { User, Order, Product } = require('../db/models');
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
    .then(order => res.json(order))
    .catch(next)
});

router.put('/:id/cart/submit', (req, res, next) => {
  console.log("HELLO", req.body.discountCode);
  User.findById(req.params.id)
  .then(user =>
    Order.find({
      where: { userId: user.id, isSubmitted: false },
      include: [{ model: Product }]
    })
    .then(order => {
      // Set order total here? map through products?
      let orderTotal = 0;
      order.products.map( product => {
        console.log(orderTotal);
        orderTotal += product.price;
      })
      let discountCode = 'coreysbirthday';
      let discountCodeApostrophe = 'corey\'sbirthday';
      let submittedCode = req.body.discountCode;
      if (!order.codeApplied && submittedCode === discountCode ||
          submittedCode === discountCodeApostrophe) {
            orderTotal = Math.round(orderTotal / 2);
          }
      return order.update({
        isSubmitted: true,
        status: 'Submitted',
        codeApplied: true,
        orderTotal
      })
    })
    .then( () => res.json('OK'))
    .catch(next)
  )
});

router.put('/:id/cart/add', (req, res, next) => {
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
        currentOrder.addProduct(product);
      });
    })
    .then( () => res.json(addedProduct))
    .catch(next)
});

router.put('/:id/cart/destroy', (req, res, next) => {
  let currentOrder;
  let productToRemove;
  User.findById(req.params.id)
  .then(user => {
    return Order.find({
      where: { userId: user.id, isSubmitted: false },
      include: [{ model: Product }]
    })
  })
  .then(order => {
    currentOrder = order;
    return Product.findById(req.body.productId)
    .then( product => {
      productToRemove = product;
      return currentOrder.removeProduct(productToRemove)
      .then( () => res.json(productToRemove))
      .catch(next)
    })
  })
});
