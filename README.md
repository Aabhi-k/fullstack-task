

---

# Greetings App

## Overview

This project is a full-stack web application with a **Node.js backend** and a **React frontend**. It is containerized using **Docker** and can be deployed using **Docker Compose**.

## Requirements

- **Node.js** (for local development)
- **Docker & Docker Compose** (for containerized deployment)

## Setup Instructions

### Running Locally

1. **Backend Setup**
   ```sh
   cd backend
   npm install
   npm run start
   ```

2. **Frontend Setup**
   ```sh
   cd frontend
   npm install
   npm start
   ```

3. The frontend will be available at `http://localhost:3000`, and the backend at `http://localhost:5000` (or as configured).

### Running with Docker

1. Build and start the application:
   ```sh
   docker compose up --build
   ```

2. Stop the application:
   ```sh
   docker compose down
   ```

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Containerization**: Docker, Docker Compose
- **Web Server (Frontend Deployment)**: Nginx
