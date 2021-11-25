

//firing on initial load (homepage)
init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    console.log('were firinggg')
    const workout = await API.getLastWorkout();
    console.log(workout)
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

//need to find way to respond with data as array of workouts with exercises from array of past wrokouts

