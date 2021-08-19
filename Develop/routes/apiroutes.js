
//linking database
//const { Router } = require("express");
const Workout = require("../models/workout");
const router = require("express").Router();

 router.post('/api/workout', (req, res) => {
     Workout.create({})
     .then((dbWorkout) => {
         res.json(dbWorkout);
     })
 });

 router.get('/api/workout', (req, res) => {
     Workout.find({})
     .then(dbWorkout => {
         res.json(dbWorkout)
     })
 });

 router.put('/api/workouts/:id', (req, res) => {
     db.Workout.findByIdAndUpdate(
         {_id: req.params.id}, {exercises: req.body}
     ).then((dbWorkout) => {
         res.json(dbWorkout);

     }).catch(err => {
         res.json(err)
     })
 })



//     router.get("/api/workout", (req, res) => {
//         workout.find({})
//         .then(workout => {
//             res.json(workout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
//     });

//    router.post("/api/workouts/", (req, res) => {
//        workout.create(req.body)
//        .then((workout) => {
//            res.json(workout);
       
       
//         }).catch(err => {
//             res.json(err);
//         });
//    });


//    //id???
//    router.put("/api/workouts/", (req, res) => {
//        workout.create(req.body)
//        .then((workout) => {
//            res.json(workout);
//        }).catch(err => {
//            res.json(err);
//        });
//    });


   router.get("/api/workouts/range", (req, res) => {
       workout.find({}).then((workout) => {
           res.json(workout);

       }).catch( err => {
           res.json(err);
       })
   })

   module.exports = router;