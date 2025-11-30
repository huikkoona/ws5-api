# WS5 – Movie API

A simple backend project built with Node.js, Express, MongoDB Atlas, and Mongoose.  
This API allows you to create, read, update, and delete (CRUD) movie entries.

---

## Live API
https://ws5-api.onrender.com

## GitHub Repository
https://github.com/huikkoona/ws5-api

---

## Features
- MongoDB Atlas database connection  
- Full CRUD functionality for movies  
- REST API structure  
- Input validation  
- CORS enabled  
- Deployed on Render Web Service  

---

## API Endpoints

### Health Check
GET /api/health

### Get all movies
GET /api/movies

### Get one movie by ID
GET /api/movies/:id

### Create movie
POST /api/movies

Example body:
```json
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010,
  "rating": 9
}
```

### Update movie
PUT /api/movies/:id

### Delete movie
DELETE /api/movies/:id

---

## How to run locally

### macOS
git clone https://github.com/huikkoona/ws5-api
cd ws5-api
npm install
cp .env.example .env
npm start

### Windows
git clone https://github.com/huikkoona/ws5-api
cd ws5-api
npm install
copy .env.example .env
npm start

---

## Technologies Used
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Render Web Service
- GitHub

---

## Demo video timestamps

- 0:00 – 
- 0:20 – 
- 0:40 – 
- 1:00 – 
- 1:30 – 
- 2:30 – 
- 3:00 – 


## Self-Assessment (Rubric)

### Functionality – 5/5
API deployed, CRUD works, no console errors.

### Code Quality – 5/5
Clean server structure, model, routes, .env usage.

### Git & Repository Structure – 5/5
.gitignore, README, commit history, clean files.

### Deployment – 5/5
Live URL stable on Render.
