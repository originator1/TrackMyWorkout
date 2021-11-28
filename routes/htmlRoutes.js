const router = require('express').Router();
const path = require('path');

// just exercise '/' is to create a new exercise 
router.get('/exercise', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  
  // try {
  //   return res.sendFile('../public/exercise.html');
  //   // const exerciseData = await Workout.find({});

  //   // res.json(exerciseData);
   
  // } catch (err) {
  //   res.status(500).json(err);
  // }

});

router.get('/stats', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// router.get('/?id=:id', async (req, res) => {
//   try {
//     const exerciseData = await Workout.find({"_id": req.params.id});
//   res.json(exerciseData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const workout = await Workout.find({"_id": req.params.id});
//     res.json(workout);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




module.exports = router;