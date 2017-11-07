const router = require('express').Router();
const { Review } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Review.findAll()
    .then(reviews => res.send(reviews))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Review.findById(req.params.id)
    .then(review => res.send(review))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Review.create(req.body)
    .then(res.status(201).json)
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Review.findById(req.params.id)
    .then(product => product.update(req.body))
    .then(res.json)
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Review.findById(req.params.id)
    .then(product => product.destroy())
    .then(res.status(204).end)
    .catch(next);
});

module.exports = router;
