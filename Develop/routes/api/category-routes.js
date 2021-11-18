const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      model: Product
    }]
  }).then(data => {
    console.log(data);
    res.json(data)
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  }).then(data => {
    console.log(data);
    res.json(data)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(data => {
      console.log(data);
      res.json(data)
    })
})

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      console.log(data);
      res.json(data)
    })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      console.log(data);
      res.json(data)
    })
});
// delete a category by its `id` value


module.exports = router;

