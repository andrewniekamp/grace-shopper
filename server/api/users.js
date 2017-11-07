const router = require('express').Router()
const {User} = require('../db/models')
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

router.get('/profile', (req, res, next) =>{
  if(req.user){
    res.render('profile', {title: 'Profile', user: req.user})
  } else{
    res.redirect('/login')
  }
})