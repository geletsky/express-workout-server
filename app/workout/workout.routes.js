import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { createWorkoutLog } from './log/workout-log.controller.js'
import {
	createWorkout,
	deleteWorkout,
	getWorkout,
	getWorkouts,
	updateWorkout
} from './workout.controller.js'
import { updateCompleteWorkoutLog } from './log/update-workout-log-controller.js'
import { getWorkoutLog } from './log/get-workout-log.controller.js'

const router = express.Router()

router.route('/').post(protect, createWorkout)
router.route('/').get(protect, getWorkouts)
router.route('/:id').get(protect, getWorkout)
router.route('/:id').put(protect, updateWorkout)
router.route('/:id').delete(protect, deleteWorkout)
router.route('/log/:id').post(protect, createWorkoutLog)
router.route('/log/:id').get(protect, getWorkoutLog)
router.route('/log/complete/:id').patch(protect, updateCompleteWorkoutLog)

export default router
