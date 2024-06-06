# Task Management Application

This is a simple task management application built with Node.js, Express, and MongoDB using Mongoose.

## Features

- Create tasks with a title, description, category.
- View a list of all tasks for a user.
- Mark tasks as completed.
- Edit task details.
- Delete tasks.

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Kushal293/my-task-app.git
    cd my-task-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start MongoDB:
    Make sure MongoDB is running on your machine. If you haven't installed it, you can follow the [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

4. Start the server:
    ```sh
    node server.js
    ```

5. The server will run on `http://localhost:3000`.

## API Endpoints

- **Create a new user**: `POST /auth/register`
- **login already registered user**: `POST /auth/login`
- **logout already loggedIn user**: `POST /auth/logout`

- **Create a new task**: `POST /api/users/:userId/tasks`
- **Get all tasks for a user**: `GET /api/users/:userId/tasks`
- **Mark a task as completed**: `PATCH /api/users/:userId/tasks/:taskId/complete`
- **Edit a task**: `PUT /api/users/:userId/tasks/:taskId`
- **Delete a task**: `DELETE /api/users/:userId/tasks/:taskId`

## Validation

- Task titles are required.
- Users cannot mark a task as complete if it's already completed.

## Error Handling

The application provides meaningful error messages for validation errors and other issues.

## Code Structure

```plaintext
├── models/
│   └── task.model.js       # Mongoose model for tasks
│   └── user.model.js       # Mongoose model for users
│   └── category.model.js   # Mongoose model for categories
├── routes/
│   └── task.routes.js      # Express routes for task-related operations
│   └── user.routes.js      # Express routes for user-related operations
├── controllers/
│   └── task.controller.js  # Controllers for handling task-related logic
│   └── user.controller.js  # Controllers for handling user-related logic
├── middlewares/
│   └── auth.middleware.js  # Middleware for authentication and authorization
├── utils/
│   └── ApiError.js     # Provide Meaningfull and structred error 
│   └── ApiResponse.js  # Provide structured and consistant response
│   └── AsyncHandler.js # Utility function to effectively handle asyncronous task
├── app.js                  # Starting point of application
├── database.js                  # Establishes connection with database
└── README.md               # Project documentation
