# React + Express + MySQL Fullstack Project

## Structure

- `backend/` – Express API + MySQL
- `frontend/` – React (Vite) app with two forms

## Prerequisites

- Node.js (>= 18)
- MySQL running locally on `localhost:3306`

## 1. Database setup

Log into MySQL:

```bash
mysql -u devuser -p
# or use any user that has privileges
```

Run:

```sql
CREATE DATABASE IF NOT EXISTS test;
USE test;

CREATE TABLE IF NOT EXISTS form1_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS form2_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  message TEXT
);
```

## 2. Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on http://localhost:5000

## 3. Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on http://localhost:5173

Thanks to the Vite proxy, the frontend can call:

- `POST /api/form1`
- `POST /api/form2`

and those requests will hit the backend on port 5000.
