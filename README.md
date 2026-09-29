# Student Management REST API

A simple REST API built with Node.js and Express to manage student records
(Create, Read, Update, Delete). Built for the Web Dev III – Unit 2 lab
assignment. No database is used — student data is stored in memory using a
plain JavaScript array.

## Project Structure

```
student-management-api/
├── app.js                 # main server file
├── middleware/
│   └── logger.js           # custom logger middleware
├── routes/
│   └── studentRoutes.js    # all /students routes
├── data/
│   └── students.js         # in-memory student data (array)
├── public/
│   └── index.html           # simple frontend to test the API in a browser
└── package.json
```

## Requirements

- Node.js installed (v16 or above recommended)
- (Optional) Postman, if you want to test the API with Postman instead of
  the browser UI

## How to Run

1. Extract/unzip the project folder.
2. Open a terminal inside the `student-management-api` folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   You should see:

   ```
   Server is running on http://localhost:5000
   ```

5. Open your browser and go to:

   ```
   http://localhost:5000
   ```

   This loads a small web page where you can add, edit and delete students
   directly, without needing Postman.

   (Optional) If you have `nodemon` and prefer auto-restart while developing:

   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /students        | Get all students         |
| GET    | /students/:id    | Get a single student     |
| POST   | /students        | Add a new student        |
| PUT    | /students/:id    | Update a student         |
| DELETE | /students/:id    | Delete a student         |

### Sample request body (POST / PUT)

```json
{
  "name": "Neha",
  "course": "BCA"
}
```

### Sample success response

```json
{
  "success": true,
  "message": "Student added successfully",
  "data": { "id": 4, "name": "Neha", "course": "BCA" }
}
```

### Sample error response

```json
{
  "success": false,
  "message": "Student with id 10 not found"
}
```

## Status Codes Used

- `200` – Success (GET, PUT, DELETE)
- `201` – Created (POST)
- `400` – Bad Request (missing name/course)
- `404` – Not Found (invalid student id)

## Testing with Postman

1. Open Postman and create a new request.
2. Set the URL to `http://localhost:5000/students` (add `/:id` where needed).
3. Choose the correct method (GET / POST / PUT / DELETE).
4. For POST and PUT, go to the **Body** tab → select **raw** → **JSON**, and
   enter the student data as shown above.
5. Hit **Send** and check the response.

## Notes

- Data resets every time the server restarts, since it is stored only in
  memory (as required — no database or Mongoose is used).
- Every request is logged to the terminal by the custom logger middleware,
  showing the method, URL and timestamp.
