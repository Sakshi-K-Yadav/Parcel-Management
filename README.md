# Parcel Tracker API

A simple RESTful API built using **Node.js**, **Express**, and **MongoDB Atlas** for tracking parcels. Each parcel is assigned a unique tracking ID, and users can retrieve parcel information based on it.

---

## Features

- Create new parcel entries with sender, receiver, and status details.
- Auto-generate a **UUID-based tracking ID** for each parcel.
- Retrieve parcel information by its tracking ID.
- Data persistence using **MongoDB Atlas**.
- Clean, modular code with structured routes.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- UUID

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/) (for API testing)
- Git (if cloning from GitHub)

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/parcel-tracker-basic.git
   cd parcel-tracker-basic

	2.	Install dependencies

npm install


	3.	Set up MongoDB
	•	Go to MongoDB Atlas and create a cluster.
	•	Replace the connection string in index.js:

mongoose.connect("your_connection_string", {...});


	4.	Start the server

node index.js

API Endpoints

1. Create a Parcel
	•	POST /parcel
	•	Request Body (JSON):

{
  "sender": "Alice",
  "receiver": "Bob",
  "status": "Dispatched"
}


	•	Response:

{
  "message": "Parcel created",
  "trackingId": "generated-uuid"
}



2. Get Parcel by Tracking ID
	•	GET /parcel/:id
	•	Example: /parcel/56e8f6e6-0ad3-4000-873c-123456abcd89
	•	Response:

{
  "_id": "db-id",
  "trackingId": "56e8f6e6-0ad3-4000-873c-123456abcd89",
  "sender": "Alice",
  "receiver": "Bob",
  "status": "Dispatched"
}

License

This project is licensed under the MIT License.
