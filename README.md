# ml-mlb
### A data model for anylizing and predicting future MLB Hall of Fame voting. 

by Anthony Lo, Jesus Velarde, Saahas Buricha and [forgot]

## Clone Repo
In the terminal type 
> `git clone https://github.com/heyyysus/ml-mlb.git`  

Then change directory into the `ml-mlb` folder

> `cd ml-mlb`

## Prerequisites
1. Node.js (latest verison)
2. Docker (latest version)
3. Docker Compose (latest version)

## Front End
Our front end will be presented with a Next.js application.

To run, 

Change directories to `/frontend`
> `cd ./frontend`

Run `npm install` to install dependencies.

To start development server, 
> `npm start`

To build production server,
> `npm build`

To start production server,
> `npm start`

## Backend
Our backend uses Flask, a minimal framework for Python, and Docker to containerize the application. 

Run `docker-compose build` in the root of the project to build and then run `docker-compose up` to start the backend server. 