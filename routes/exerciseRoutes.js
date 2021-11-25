const router = require('express').Router();
const { Woplan, Workout, Exercise} = require('../models');
// just exercise '/' is to create a new exercise 
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const exerciseData = await Workout.find({});

    // Serialize data so the template can read it
    // const mapData = exerciseData.map((exercise) => {
    //     return exercise.exercises
    // })
   
    // Pass serialized data and session flag into template
    res.json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/?', async (req, res) => {
  try {
    const exerciseData = await Workout.find({});
  res.json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;