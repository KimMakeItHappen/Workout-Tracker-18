const router = require("express").Router()
const Workout = require("../models/Workout")

router.get('/workouts', (req,res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ]).then((data) => {
        console.log(data);
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})

router.post('/workouts', (req,res) => {
    Workout.create([
        req.body
    ]).then(data => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
})

// /workouts/:id router.put

// /workout/range 5-12 lines last 7workouts greatest to least 

module.exports = router;