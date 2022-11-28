

const API = {
  // (return last entered workout)
  async getLastWorkout() {
    let res;
    try {
      //returns all workout collections by date
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    return json[json.length - 1];
  },
  //(update workout with id, using data object)
  async addExercise(data) {
    const id = location.search.split("=")[1];
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    return json;
  },
  //(create new workout, empty workout if no data)
  async createWorkout(data = {}) {
    console.log("POST new workout data param: ", data);
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
    console.log(json);
    return json;
  },
};
// module.exports = API;

