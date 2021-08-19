const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now
        },
        exercises: [ {
            name: {
                type:String,
                trim: true,
                required: "Enter exercise name"
            },
            type: {
                type: String,
                trim: true,
                required:"Enter exercise type"
            },
            duration: {
                type: Number,
                required: "Enter duration in minutes"
            },
            weight: {
                type:Number,
                required: "Enter weight"
            },
            reps: {
                type: Number,
                required: "Enter number of reps"
            },
            sets: {
                type: Number,
                required: "Enter number of sets"
            },
            distance: {
                type: Number,
                required: "Enter distance"
            }
        }
    ]
    }
    
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;