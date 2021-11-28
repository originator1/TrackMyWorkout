const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const { Workout } = require('./models')

const routes = require('./routes')


const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutapp", 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// db.Library.create({ name: "Campus Library" })
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });


app.use('/', routes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});