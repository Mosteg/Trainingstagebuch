import userAuthentication from "./userAuth";
import Loader from "./loader";
import Render from "./render";
import "./header";
const userAuth = new userAuthentication();
const loader = new Loader();
const render = new Render();

//workout.js und exercise.js aus public verschieben damit diese auch komprimiert werden!!!

userAuth.authenticate()
.then(() => loader.loadChallenge('every'))
.then(workouts => {
    console.log(workouts);
    render.renderStatistic(workouts);
    main();
})
.catch(err => {
    console.log(err);
    //hier error dem nutzer anzeigen
});

// loader.loadExercises().then(exercises => console.log(exercises));


const main = () => {
    console.log('main');
    const addWorkout = document.querySelector('form.add-workout');
    addWorkout.addEventListener('submit', e => {
        e.preventDefault();

        let exercises = [];
        Array.from(e.target.elements).forEach(element => {
            if(element.value !== '' && element.value !== '+') exercises.push([element.id, element.value]);
        });

        const url = '/api/createWorkout';
        fetch(url, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                exercises
            })
        })
        .then(response => {
            if(!response.ok) {
                console.error('Server error trying to ');
                //hier error dem nutzer anzeigen
                
            }
            else {
                console.log('workout hinzugefügt');
                addWorkout.reset();
                loader.refreshData();
            }
        })
    })




}


