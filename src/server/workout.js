class Workout {
    constructor(workout_id, timestamp, notes, exercise) {
        this.workout_id = workout_id;
        this.timestmamp = timestamp;
        this.notes = notes;
        this.exercises = [exercise];
    }

    timer() {
        
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
    }
}

module.exports = Workout;