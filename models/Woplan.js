const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlanSchema = new Schema({
  day: {
    //need to make this date have time as well for tracking day and referencing 
    //past 7 days(day format?)
    type: Date,
    trim: true,
    required: true,
  },
  exercise: {
    type: String,
    
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const WorkoutPlan = mongoose.model("WorkoutPlan", WorkoutPlanSchema);

module.exports = WorkoutPlan;