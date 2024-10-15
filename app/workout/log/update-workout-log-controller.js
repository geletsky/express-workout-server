import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

// @desc Update workout log completed
// @route PATCH /api/workouts/log/complete/:id
// @access Private
export const updateCompleteWorkoutLog = asyncHandler(async (req, res) => {

	try {
		const workoutLogTime = await prisma.workoutLog.update({
			where: {
				id: +req.params.id
			},
			data: {
				isCompleted: true
			}
		})

		res.json(workoutLogTime)
	} catch (error) {
		res.status(404)
		throw new Error('Workout log not found!')
	}
})
