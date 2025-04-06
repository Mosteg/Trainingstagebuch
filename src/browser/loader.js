class Loader {
    constructor() {

    }

    loadWorkouts() {
        const url = '/api/getWorkoutsByUserId'
        return fetch(url, {
            method: 'get',
            credentials: 'include'
        })
        .then(response => response.json())
        .catch(err => console.error(err));
    };

    loadExercises() {
        const sql = '/api/getExercisesList';
        return fetch(sql, {
            method: 'get',
            credentials: 'include'
        })
        .then(response => response.json())
        .catch(err => console.error(err));
    };

    loadChallenge(timeframe = 'thisWeek') {
        const url = `/api/getChallengeDataByUserId?timeframe=${timeframe}`;
        return fetch(url, {
            method: 'get',
            credentials: 'include'
        })
        .then(response => response.json())
        .catch(err => console.error(err));
    }

    loadPublicUserData(id) {
        const url = '/api/getPublicUserDataById';
        return fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: id
            })
        })
        .then(response => response.json())
        .catch(err => console.error(err));
    }
}


export {Loader as default}