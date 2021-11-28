const router = require('express').Router();
const {  Workout } = require('../../models');




// ## /api/workouts returns all Workouts models

router.get('/', async (req, res) => {
  try {
    //need to return a day key and total duration?
    const workoutData = await Workout.aggregate([
      { 
        "$project": {
            "day": 1,
            "exercises": 1,
            "totalDuration": {
               "$sum": "$exercises.duration"
            },

        }
      }
         
    ]);
    

    // console.log(workoutData);
    res.json(workoutData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newWorkout = await Workout.create({...req.body});
    // console.log("this is my post body: ", req.body)
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ## /api/workouts/range returns all workouts models

router.get('/range', async (req, res) => {
  try {
    const workoutRange = await Workout.aggregate([
      { 
        "$project": {
            "day": 1,
            "exercises": 1,
            "totalDuration": {
               "$sum": "$exercises.duration"
            },

        }
      }
         
    ]);
    res.json(workoutRange);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ## /api/workouts/url(id)

router.put('/:id', async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      { "_id": req.params.id },
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    );
    // console.log(workout);
    res.json(workout);
  } catch (err) {
    res.status(500).json(err);
  }
});


// db.Workouts.insert({
//   day: Date().now,

// })





module.exports = router;