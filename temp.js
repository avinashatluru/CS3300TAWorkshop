// index.js
const express = require('express');
const mysql = require('mysql2/promise'); // Import the MySQL promise client

const app = express();
const port = process.env.PORT || 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'mysql', // MySQL service name in Docker Compose
  user: 'root',  // Default MySQL root user
  password: 'password', // Root password
  database: 'testdb', // Name of the database
});

app.get('/', async (req, res) => {
  try {
    // Test a simple query: Select all rows from a sample table
    const [rows] = await pool.query('SELECT * FROM test_table');

    if (rows.length) {
      res.json({ data: rows });
    } else {
      res.send('No data found in test_table');
    }
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
