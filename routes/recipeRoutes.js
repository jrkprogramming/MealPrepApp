const express = require('express');
const router = express.Router();
const mealPrepCtrl = require('../controllers/recipeController')

router.get('/mealPrep', mealPrepCtrl.index)

router.get('/mealPrep/new', mealPrepCtrl.newMeal)

router.post('/mealPrep', mealPrepCtrl.createMeal)

router.get('/mealPrep/:id', mealPrepCtrl.showMeal)

module.exports = router;