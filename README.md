# Node DevOps Project

This project demonstrates containerizing a Node.js application using Docker Compose with MongoDB and Redis.

## Technologies

Node.js  
Docker  
Docker Compose  
MongoDB  
Redis  
AWS CloudWatch (Monitoring)

---

## Project Structure

node-devops-project

app.js  
package.json  
Dockerfile  
docker-compose.yml  
.env.example  
README.md  

---

## Setup Instructions

Clone repository

git clone <repo-url>

cd node-devops-project

Create environment file

cp .env.example .env

Run containers

docker compose up --build

---

## Application URL

http://localhost:8090

---

## API Endpoints

GET /

Returns confirmation message.

GET /health

Returns application health status.

---

## Services

Node.js Application  
MongoDB Database  
Redis Cache  

---

## Data Persistence

MongoDB data is stored using Docker volumes to ensure persistence.

---

## Bonus Features Implemented

Container health checks  
Multi-stage Docker build  
Application logging with Winston  
Docker image optimization  
Monitoring using AWS CloudWatch