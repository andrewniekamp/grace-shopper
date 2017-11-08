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
    .catch(next)
})

router.get('/profile', (req, res, next) =>{
  if(req.user){
    res.render('profile', {title: 'Profile', user: req.user})
  } else{
    res.redirect('/login')
  }
})


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
  User.findById(req.params.id)
  .then(user =>
    Order.find({
      where: { userId: user.id, isSubmitted: false },
      include: [{ model: Product }]
    })
    .then(order => {
      // Set order total here? map through products?
      let orderTotal = 0;
      let discountApplied = false;
      order.products.map( product => {
        orderTotal += product.price;
      })
      let discountCode = 'coreysbday';
      let discountCodeApostrophe = 'corey\'sbday';
      let submittedCode = req.body.discountCode;
      if (!order.codeApplied && submittedCode === discountCode ||
          submittedCode === discountCodeApostrophe) {
            orderTotal = Math.round(orderTotal / 2);
            discountApplied = true;
          }
      return order.update({
        isSubmitted: true,
        status: 'Submitted',
        codeApplied: discountApplied,
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

router.get('/:id/order/', (req, res, next) => {
  Order.findAll({
    where: {
      userId: req.params.id
    }
  })
  .then(orders => {
    return res.json(orders)
  })
  .catch(next)
})

//how to access quantity? won't work. have to check this.
