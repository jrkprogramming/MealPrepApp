
const Recipe = require('../models/recipe')


// const index = async (req, res) => {
//     console.log('Our index function ran!')
//     let allMeals = await mealPreps.find({})
//     console.log(allMeals)
//     res.render('index', {allMeals})
// }

const index = async (req, res) => {
    let allMeals = await Recipe.find({})
    res.render('index', {allMeals})
}

function showMeal(req, res) {
    Recipe.findById(req.params.id).then((recipe) => {
        res.render('showMeal', {recipe})
    })
}

async function newMeal(req, res) {
    await res.render('new')
}

function createMeal(req, res) {
    let newMeal = new Recipe(req.body)
    newMeal.save(() => console.log('New meal was saved!'));
    res.redirect('/mealPrep')
}

module.exports = {
    index,
    showMeal,
    newMeal,
    createMeal
}
