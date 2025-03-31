class Render {
    constructor() {

    }

    renderStatistic(workouts) {
        const userStats = document.querySelector('section.userStats');
        console.log(userStats);
        const anzTeilnehmer = workouts.length -1;

        const exerciseOverview = 
            `<div class="user ">
                <div class="profile"></div>
                <div class="stats">
                    <div class="image-container"><img src="/data/Icon-pushup.jpg" alt=""></div>
                    <div class="image-container"><img src="/data/Icon-upllup.jpg" alt=""></div>
                    <div class="image-container"><img src="/data/Icon-situp.jpg" alt=""></div>
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
        let points;

        for(let i = 0; i < 3; i++) {
            let max = workouts[1];
            console.log(max);
            for(let i = 2; i <= anzTeilnehmer; i++) {
                
            }
        }
    }


    #createUserFild(data) {
        const userFild =
        `<div class="user" id="user_id:${data.user_id}">
            <div class="profile">
                <div class="image-container winning">
                    <img src="data/WIN_20250118_11_30_15_Pro.jpg" alt="">
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