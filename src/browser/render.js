import Loader from "./loader";
const loader = new Loader();

class Render {
    constructor() {

    }

    async renderStatistic() {
        try {
            const workouts = await loader.loadChallenge();
            const anzTeilnehmer = workouts.length -1;
            const exercises = await loader.loadExercises();
            let users = [];
            for(let i = 1; i <= anzTeilnehmer; i++) {
                users.push(await loader.loadPublicUserData(workouts[i].id));
            }
            console.log(users, exercises, workouts);
        

            const userStats = document.querySelector('section.userStats');
            userStats.innerHTML = '';

            const exerciseOverview = 
                `<div class="user ">
                    <div class="profile"></div>
                    <div class="stats">
                        <div class="image-container"><img src="${(exercises.find(exercise => exercise.id == workouts[0].exercise1)).icon}" alt=""></div>
                        <div class="image-container"><img src="${(exercises.find(exercise => exercise.id == workouts[0].exercise2)).icon}" alt=""></div>
                        <div class="image-container"><img src="${(exercises.find(exercise => exercise.id == workouts[0].exercise3)).icon}" alt=""></div>
                    </div>
                </div>`;
            userStats.innerHTML += exerciseOverview;
            
            for(let i = 1; i <= anzTeilnehmer; i++) {
                const data = {
                    user_id: workouts[i].id,
                    exercise1: workouts[i].exercise1,
                    exercise2: workouts[i].exercise2,
                    exercise3: workouts[i].exercise3,
                }
                const userStat = this.#createUserFild(data);
                userStats.innerHTML += userStat;
            }
            
            const addExercise = 
            `<div class="add-workout">
                    <form class="add-workout">
                        <div class="add"><label for="22">Push-Ups:</label><input type="number" placeholder="Push-Ups" id="22" name="Push-Ups"></div>
                        <div class="add"><label for="23">Pull-Ups:</label><input type="number" placeholder="Pull-Ups" id="23" name="Pull-Ups"></div>
                        <div class="add"><label for="27">Sit-Ups:</label><input type="number" placeholder="Sit-Ups" id="27" name="Sit-Ups"></div>
                        <input type="submit" value="+">
                    </form>
                </div>`;
            userStats.innerHTML += addExercise;


            //gewinner ermitlung
            if(anzTeilnehmer > 1) {
                let points = [[], []];
                let max = [parseInt(workouts[1].exercise1), parseInt(workouts[1].exercise2), parseInt(workouts[1].exercise3)];
                
                for(let i = 2; i <= anzTeilnehmer; i++) {
                    const w = workouts[i];
                    if(max[0] < parseInt(w.exercise1)) max[0] = parseInt(w.exercise1);
                    if(max[1] < parseInt(w.exercise2)) max[1] = parseInt(w.exercise2);
                    if(max[2] < parseInt(w.exercise3)) max[2] = parseInt(w.exercise3);
                }
                for(let i = 1; i <= anzTeilnehmer; i++) {
                    const w = workouts[i];
                    points[0].push(w.id);
                    points[1].push(0);
                    
                    if(max[0] == w.exercise1) points[1][i-1]++;
                    if(max[1] == w.exercise2) points[1][i-1]++;
                    if(max[2] == w.exercise3) points[1][i-1]++;
                }
                const maxPunkte = Math.max(...points[1]);
                let gewinner = [];
                for(let i = 0; i < anzTeilnehmer; i++) {
                    if(points[1][i] === maxPunkte) gewinner.push(points[0][i]);
                }
                const anzGewinner = gewinner.length;
                gewinner.forEach(gewinner => {
                    const user = document.getElementById(`user_id:${gewinner}`);
                    user.classList.remove('losing')
                    user.classList.add(anzGewinner > 1 ? 'equal' : 'winning');
                })   
            }
            else {
                const user = document.getElementById(`user_id:${workouts[1].id}`);
                user.classList.add('winning');
            }

            //EventListener hinzufügen
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
                        this.renderStatistic();
                    }
                })
            });
        }
        catch(error) {
            console.log(error);
           //hier error für nutzer wenn die daten der challange nicht geladen werden konnten

        }
    }


    #createUserFild(data) {
        const userFild =
        `<div class="user losing" id="user_id:${data.user_id}">
            <div class="profile">
                <div class="image-container winning">
                    <div class="defaultProvilePicture">JD</div>
                </div>
                <p>${data.user_id}</p>
            </div>
            <div class="stats">
                <p>${data.exercise1}</p>
                <p>${data.exercise2}</p>
                <p>${data.exercise3}</p>
            </div>
        </div>`;
        return userFild;
    }
}

export {Render as default}