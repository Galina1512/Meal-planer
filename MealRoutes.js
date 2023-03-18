const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');

const router = Router();

// router.get('/', (req, res) =>{
//     res.json({test: "We got here!"})
// })

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
// router.delete('/deleteMeal', deleteMeal);
router.post('/deleteMeal', deleteMeal);
router.put('/editMeal', editMeal);

module.exports = router;