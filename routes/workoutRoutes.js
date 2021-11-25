const router = require('express').Router();
const { Woplan, Workout, Exercise} = require('../models');
// const { API } = require()
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const workoutData = await Workout.find({});

    // Serialize data so the template can read it
  

    // Pass serialized data and session flag into template
    res.json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/range', (req, res) => {
  
});






module.exports = router;