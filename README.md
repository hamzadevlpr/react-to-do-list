# React CRUD App using Vite and MERN Stack



## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Countries API Integration](#countries-api-integration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a CRUD (Create, Read, Update, Delete) application built using the Vite framework for the frontend and the MERN stack for the backend. The app enables users to perform basic CRUD operations on data, which is stored in a MongoDB database. The frontend is built using React with Vite as the build tool, providing fast and efficient development and production builds. The backend is powered by Node.js, and data is stored and retrieved from a MongoDB database.

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Package Manager:** npm
- **Version Control:** Git, GitHub

## Features

- **Create:** Users can create new data entries and store them in the MongoDB database.
- **Read:** Users can retrieve and view existing data entries from the database.
- **Update:** Users can update the existing data entries and save the changes to the database.
- **Delete:** Users can delete data entries from the database.

## Installation

1. Clone this repository to your local machine using the following command:



git clone https://github.com/hamzadvlpr1/react-to-do-list


2. Change into the project directory:

cd your-repository


3. Install the required dependencies for both the frontend and the backend:

cd frontend
npm install

cd ../backend
npm install


## Usage

1. Start the backend server:

cd backend
npm start


2. Start the frontend development server:


cd frontend
npm run dev



3. Open your browser and navigate to `http://localhost:5000` to access the React CRUD app.

## API Endpoints

- `GET /`: Fetch all data entries from the database.
- `POST /create`: Create a new data entry and save it to the database.
- `GET /getUser/:id`: Fetch a specific data entry by its ID from the database.
- `PUT /update/:id`: Update an existing data entry in the database.
- `DELETE /api/data/:id`: Delete a data entry from the database.

## Countries API Integration

The app also integrates with a countries API to populate a dropdown select menu with the names of countries. When creating or updating data, the user can choose a country from the select menu.

Here is the endpoint used to fetch the countries data:

- `GET https://restcountries.com/v3.1/all`: Fetches a list of countries with their names and other relevant information.

Please note that you need to replace `https://restcountries.com/v3.1/all` with the actual URL of the countries API you are using.

## Contributing

If you wish to contribute to this project, follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add some feature"`.
4. Push the changes to your fork: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the terms of the license.

---

_This README provides an overview of the React CRUD app built using Vite and the MERN stack. For more detailed information and the actual code, please refer to the respective directories within the repository._
