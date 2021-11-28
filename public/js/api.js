

const API = {
  async getLastWorkout() {
    let res;
    try {
      //needs to return an array of workouts, then grabs length of array -1 to grab last workout entered
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    console.log('inside getLastWorkout API function, response object below:');
    console.log(json[json.length -1]);
    return json[json.length - 1];
  },
  async addExercise(data) {
    //splits url into array , efore and after = [1] takes second part after =
    const id = location.search.split("=")[1];
    //changed from /api/workouts/ --> /workouts/
    //when url with /api/workouts/second half of url [1] is hit, update data at the end of url with req.body
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    console.log('inside create workout API function, below is that data obj');
    console.log(data);
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
     
    });

    const json = await res.json();

    return json;
  },
//changed from /api/workouts/range 
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    console.log(res);
    return json;
  },
};
// const getLastWorkout = API.getLastWorkout
// module.exports = API;

