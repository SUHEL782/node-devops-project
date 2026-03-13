# Node DevOps Project

This project demonstrates how to containerize a Node.js backend application using **Docker** and orchestrate services using **Docker Compose**.  
The application connects to **MongoDB** for data storage and **Redis** for caching.

The system is designed to simulate a simple production-style backend environment using containerized services.

---

# Technologies Used

- Node.js
- Express.js
- Docker
- Docker Compose
- MongoDB
- Redis

---

# Architecture
![Architecture Diagram](https://github.com/SUHEL782/MERN-Ecommerce/blob/main/Architecture.png)

### Service Communication

Docker Compose automatically creates a **shared network**, allowing containers to communicate using service names.

Example:


Node.js → MongoDB (mongo:27017)
Node.js → Redis (redis:6379)


---

## Project Structure

```
node-devops-project
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── .dockerignore
├── .gitignore
└── README.md
```
---
# Environment Variables

Configuration is managed through environment variables.

Example file:

`.env.example`


PORT=8090

MONGO_URI=mongodb://mongo:27017/devopsdb

REDIS_HOST=redis
REDIS_PORT=6379


Before running the project, create a local `.env` file.


cp .env.example .env


---

# Running the Application

## 1 Clone Repository


git clone https://github.com/SUHEL782/node-devops-project.git

cd node-devops-project


---

## 2 Create Environment File


cp .env.example .env


---

## 3 Build and Run Containers


docker compose up --build


Docker Compose will start:

- Node.js Application
- MongoDB Database
- Redis Cache

---

# Application URL


http://localhost:8090


---

# API Endpoints

### Root Endpoint


GET /


Response


{
"message": "Node.js DevOps Application Running"
}


---

### Health Check Endpoint


GET /health


Example Response


{
"status": "OK",
"mongo": "UP",
"redis": "UP"
}


This endpoint verifies connectivity with MongoDB and Redis.

---

# Docker Services

## Application Service

- Builds image from `Dockerfile`
- Runs Node.js Express application
- Exposes port **8090**

## MongoDB Service

- Uses official MongoDB image
- Data persisted using Docker volumes

## Redis Service

- Uses official Redis image
- Used for caching layer

---

# Data Persistence

MongoDB uses Docker volumes to ensure that data persists even if containers are restarted.


volumes:
mongo-data:


---

# DevOps Best Practices Implemented

This project implements several DevOps best practices:

- Containerized application using Docker
- Multi-stage Docker build
- Service orchestration using Docker Compose
- Environment-based configuration
- Container health checks
- MongoDB persistent storage using volumes
- Docker image optimization using `.dockerignore`
- Logging with Winston

---

# Stopping the Application

To stop containers:


docker compose down


---

# Author

Suhel Khan
