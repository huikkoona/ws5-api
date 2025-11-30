WS5 – Movie API

A simple full-stack backend project built with Node.js, Express, MongoDB Atlas, and Mongoose.
This API allows you to create, read, update and delete (CRUD) movie entries.

Live API: https://ws5-api.onrender.com
GitHub Repository: https://github.com/huikkoona/ws5-api

- Features
MongoDB Atlas database connection
Full CRUD functionality for movies
Input validation
CORS enabled
REST API structure
Deployed on Render Web Service

- API Endpoints
Health Check
GET /api/health
Get all movies
GET /api/movies
Get one movie
GET /api/movies/:id
Create movie
POST /api/movies
Body example:
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010,
  "rating": 9
}
Update movie
PUT /api/movies/:id
Delete movie
DELETE /api/movies/:id

- How to run locally

macOS

git clone https://github.com/huikkoona/ws5-api
cd ws5-api
npm install
cp .env.example .env
npm start

Windows

git clone https://github.com/huikkoona/ws5-api
cd ws5-api
npm install
copy .env.example .env
npm start

- Technologies Used
Node.js
Express
MongoDB Atlas
Mongoose
Render Web Service
GitHub
