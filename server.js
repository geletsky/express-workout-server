import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

import authRoutes from './app/auth/auth.routes.js'
import { prisma } from './app/prisma.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'

dotenv.config()

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', authRoutes)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = 7777

	app.listen(PORT, console.log(`Server is running on PORT - ${PORT}`))
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})