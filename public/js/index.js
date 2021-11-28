

//firing on initial load (homepage)
//ALL THIS DOES IS CHANGE URL TO LAST WORKOUT OBJ _ID
init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    console.log('firinggg')
    const workout = await API.getLastWorkout();
    
    if (workout) {
      console.log(workout);
      //changes url to ?id=(last workout entire obj id)
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

//need to find way to respond with data as array of workouts with exercises from array of past wrokouts

