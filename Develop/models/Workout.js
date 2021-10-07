const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutPlan = new Schema ({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
{
    toJSON: {virtuals: true}
});

workOutPlan.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, value) => {
        return total + value.duration;
    },0);
});


const Workout = mongoose.model('Workout', workOutPlan);
module.exports = Workout;