### Running Live @ https://vercel-frontend-deployment.vercel.app/

## Installation

# Prerequisites:

*   Ensure you have Node.js and npm (or yarn) installed on your system. 
    You can check by running node -v and npm -v (or yarn -v) in your terminal.

    If not installed, download the latest version from the official Node.js website: https://nodejs.org/en

*   Ensure you have MySql 8.0 or above is installed.

## Running the project 


# Environment variables:

Project uses a .env file to store sensitive information like database credentials.
To configure database, 
    1.open .env file at root of the directory
    2.configure databases with your credentials.

            DATABASE_USERNAME=your_username
            DATABASE_PASSWORD=your_password

Note : Change the ports only if neccessary.
 
# Run sql file before running the project.
    1. SQL File is located at mysql_db/db.sql 
    2. Run this file using VS Code or MySQL Workbench.



This project consists of 2 parts one frontend and other backend.
And both needs to be run seperately.

# To run BACKEND for the first time
    1. cd backend
    2. npm install
    3. npm start

# To run FRONTEND for the first time
    1. cd frontend_react
    2. npm install
    3. npm run dev

# Note 
* Later backend can be run using, 
         1. cd backend
         2. npm start

* Later frontend_react can be run using, 
         1. cd frontend_react
         2. npm run dev
