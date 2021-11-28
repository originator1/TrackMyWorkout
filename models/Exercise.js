const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String, //resistance || cardio
    name: String, //exercise name
    duration: Number, //time spent on exercise
    weight: Number,// lbs of resistance
    reps: Number,//exercise reps
    sets: Number,//exercise sets
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

// {
//     day: new Date(new Date().setDate(new Date().getDate() - 1)),
//     exercises: [
//       {
//         type: 'resistance',
//         name: 'Military Press',
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4,
//       },
//     ],
// }