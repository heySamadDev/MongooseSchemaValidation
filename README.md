# Course Management API

A RESTful Course Management API built with **Node.js, Express.js, MongoDB, and Mongoose**.

This project was created as a practice assignment to understand **MVC architecture, Mongoose schema validation, centralized error handling, reusable API utilities, and request logging**.

## 🚀 Features

- Create a course
- Get all courses
- Get a single course by ID
- Update a course
- Delete a course
- Mongoose schema validation
- Centralized error handling
- Custom `ApiError` class
- Standardized `ApiResponse` class
- Async controller error handling with `asyncHandler`
- Automatic timestamps using Mongoose
- MongoDB Atlas database connection
- Validation during course updates
- Request logging middleware
- Client IP address logging
- Server request logs stored in `server.log`

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **File System (`fs`)**
- **Path (`path`)**

## 📁 Project Structure

```text
project/
├── src/
│   ├── controllers/
│   │   └── course.controller.js
│   │
│   ├── models/
│   │   └── course.model.js
│   │
│   ├── routes/
│   │   └── course.route.js
│   │
│   ├── db/
│   │   └── index.js
│   │
│   ├── middlewares/
│   │   ├── error.middleware.js
│   │   └── logger.middleware.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   │
│   ├── Data/
│   │   └── server.log
│   │
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── .gitignore
├── package.json
└── README.md
```

## 📋 Course Schema

Each course contains the following fields:

| Field | Type | Description |
|---|---|---|
| `title` | String | Course title |
| `description` | String | Course description |
| `category` | String | Web Development, Programming, Database, or Cloud |
| `level` | String | Beginner, Intermediate, or Advanced |
| `durationMonths` | Number | Course duration from 1 to 24 months |
| `fees` | Number | Course fees from 0 to 200000 |
| `trainerName` | String | Name of the trainer |
| `mode` | String | Online, Offline, or Hybrid |
| `active` | Boolean | Course active status |

The schema also uses:

- Required field validation
- String trimming
- Minimum and maximum length validation
- Enum validation
- Number range validation
- Default values
- `createdAt` and `updatedAt` timestamps

## 🔗 API Endpoints

Base URL:

```text
/api/v1/courses
```

### Create Course

```http
POST /api/v1/courses
```

Creates a new course.

### Get All Courses

```http
GET /api/v1/courses
```

Returns all courses.

### Get Single Course

```http
GET /api/v1/courses/:id
```

Returns a course by its MongoDB ID.

Returns `404` if the course does not exist.

### Update Course

```http
PATCH /api/v1/courses/:id
```

Updates the allowed course fields.

Schema validation is applied during updates using:

```js
runValidators: true
```

The updated document is returned using:

```js
new: true
```

### Delete Course

```http
DELETE /api/v1/courses/:id
```

Deletes a course by its ID.

Returns `404` if the course does not exist.

## 📝 Request Logging

The application includes a custom request-logging middleware to monitor incoming API requests.

The logger records information such as:

- Client IP address
- HTTP method
- Requested URL
- Request timestamp
- Request activity

Logs are stored in:

```text
src/Data/server.log
```

The application automatically creates the required log directory and log file if they do not already exist.

The logger is registered as Express middleware:

```js
app.use(logRequest);
```

This helps with:

- API monitoring
- Debugging
- Tracking incoming requests
- Understanding API activity
- Maintaining a record of server requests

## ⚠️ Error Handling

The application uses centralized error handling.

Errors from controllers and Mongoose are passed through `asyncHandler` to the centralized error middleware.

Example validation error:

```json
{
  "success": false,
  "message": "Course validation failed"
}
```

For a nonexistent course:

```json
{
  "success": false,
  "message": "Course Not Found"
}
```

Invalid MongoDB IDs are also handled and returned with a meaningful error message instead of exposing the raw database error.

## 📦 Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Move into the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the `src` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

**Important:** Do not commit your actual `.env` file or MongoDB credentials to GitHub.

Make sure `.env` is included in your `.gitignore`.

## ▶️ Running the Project

Start the server:

```bash
npm start
```

Or, if you have a development script:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

## 🧪 Testing

The API was tested for:

- Successful course creation
- Invalid course data
- Schema validation
- Default values
- String trimming
- Automatic timestamps
- Getting all courses
- Getting a single course
- Nonexistent course handling
- Updating courses
- Update validation
- Deleting courses
- Nonexistent course deletion
- Invalid MongoDB ObjectId handling
- Request logging

API requests can be tested using **Postman** or another API client.

## 📚 What I Learned

Through this project, I practiced:

- Building REST APIs with Express
- MVC project structure
- Mongoose schemas and models
- Schema validation
- MongoDB database operations
- Async/await
- Centralized error handling
- Custom error classes
- Standardized API responses
- Middleware
- Route organization
- Update validation with Mongoose
- Environment variable management
- Request logging
- Client IP address monitoring
- Using Node.js `fs` module for log files
- Using Node.js `path` module for file paths

## 👨‍💻 Author

**Samad**

This project was built as part of my Node.js, Express, and MongoDB learning journey.