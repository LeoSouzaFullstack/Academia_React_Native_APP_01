class Workout {
    constructor(id, name, description, exercises, duration, date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.exercises = exercises || [];
        this.duration = duration; // in minutes
        this.date = date;
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
    }

    removeExercise(exerciseId) {
        this.exercises = this.exercises.filter(ex => ex.id !== exerciseId);
    }

    getTotalDuration() {
        return this.duration;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            exercises: this.exercises,
            duration: this.duration,
            date: this.date
        };
    }
}

module.exports = Workout;