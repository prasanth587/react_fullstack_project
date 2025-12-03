# Backend (Express + MySQL)

## Setup

1. Make sure MySQL is running and you have this user and database:

   ```sql
   CREATE USER IF NOT EXISTS 'devuser'@'localhost' IDENTIFIED BY '123456789';
   GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'localhost' WITH GRANT OPTION;
   FLUSH PRIVILEGES;

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

2. Install dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Run in dev mode:

   ```bash
   npm run dev
   ```

The server will run on http://localhost:5000
