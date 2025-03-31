const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.post('/createAccount', apiController.createAccount);
router.post('/login', apiController.login);
router.post('/logout', apiController.logout);
router.post('/checkAuthStatus', apiController.verifyAuthToken, apiController.checkAuthStatus);
router.get('/getUserById', apiController.verifyAuthToken, apiController.getUserById);

router.get('/getWorkoutsByUserId', apiController.verifyAuthToken, apiController.getWorkoutsByUserId);
router.post('/createWorkout', apiController.verifyAuthToken, apiController.createWorkout);
router.get('/getExercisesList', apiController.getExercisesList);
router.get('/getChallengeDataByUserId', apiController.verifyAuthToken, apiController.getChallengeDataByUserId);


module.exports = router;