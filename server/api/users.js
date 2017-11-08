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
  console.log('here we are in routes')
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
    .then( () => res.json(addedProduct));
});
