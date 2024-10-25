# Express Workout Server

This project is a backend server built with Node.js and Express.js designed to manage training programs.

## Frontend App

https://github.com/geletsky/react-workout-app

## Features

- **User Authentication**: Secure user login and registration using JSON Web Tokens (JWT).
- **Workout Management**: Create, read, update, and delete workout routines.
- **Exercise Management**: Create, read, update, and delete exercises associated with workouts.
- **Exercise Tracking**: Log exercises, sets, and repetitions for each workout.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL (via Prisma)
- JWT for authentication
- dotenv for environment variable management
- Prettier for code formatting
- Morgan for HTTP request logging
- Nodemon for development server auto-restart

## Getting Started

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/geletsky/express-workout-server.git
```

2. Navigate to the project directory:

```bash
  cd express-workout-server
```

3. Install the dependencies:

```bash
  npm install
```

4. Create a .env file in the root directory and add the necessary environment variables:

```env
NODE_ENV = development
DATABASE_URL = <Your PostgreSQL Connection String>
JWT_SECRET = <Your JWT Secret>
```

5. Run the Prisma migration to set up your database:

```bash
npx prisma migrate dev --name init
```

6. Start the server:

```bash
npm run dev
```

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

### Users

- **GET /api/users/profile**: Retrieve the authenticated user's profile (protected).

### Workouts

- **POST /api/workouts**: Create a new workout (protected).
- **GET /api/workouts**: Retrieve all workouts (protected).
- **GET /api/workouts/:id**: Retrieve a specific workout by ID (protected).
- **PUT /api/workouts/:id**: Update a specific workout by ID (protected).
- **DELETE /api/workouts/:id**: Delete a specific workout by ID (protected).
- **POST /api/workouts/log/:id**: Log a workout for a specific workout ID (protected).
- **GET /api/workouts/log/:id**: Retrieve the log for a specific workout ID (protected).
- **PATCH /api/workouts/log/complete/:id**: Update the completion status of a workout log by ID (protected).

### Exercises

- **POST /api/exercises**: Create a new exercise (protected).
- **GET /api/exercises**: Retrieve all exercises (protected).
- **PUT /api/exercises/:id**: Update a specific exercise by ID (protected).
- **DELETE /api/exercises/:id**: Delete a specific exercise by ID (protected).
- **POST /api/exercises/log/:id**: Log an exercise for a specific exercise ID (protected).
- **GET /api/exercises/log/:id**: Retrieve the log for a specific exercise ID (protected).
- **PUT /api/exercises/log/time/:id**: Update the time for a specific exercise log by ID (protected).
- **PATCH /api/exercises/log/complete/:id**: Mark an exercise log as complete by ID (protected).

### File Uploads

- **GET /uploads**: Access uploaded files (static files served).

### Author

If you have any questions or suggestions regarding this project, feel free to contact the project owner: [here](https://github.com/geletsky)
