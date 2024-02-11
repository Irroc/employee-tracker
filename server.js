const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'human_resources_db'
  },
  console.log(`Connected to the human_resources_db database.`)
);

// View all departments 
app.get('/api/departments', (req, res) => {
  const sql = `Select * FROM departments`;
  
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: result
    });
  });
});

// View all departments 
app.get('/api/roles', (req, res) => {
    const sql = `Select * FROM roles`;
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        data: result
      });
    });
  });

// View all departments 
app.get('/api/employees', (req, res) => {
    const sql = `Select * FROM employees`;
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        data: result
      });
    });
  });

  app.post('/api/new-department', ({ body }, res) => {
    const sql = `INSERT INTO departments (name)
      VALUES (?)`;
    const params = [body.name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        data: body
      });
    });
  });

  app.post('/api/new-role', ({ body }, res) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
      VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        data: body
      });
    });
  });

  app.post('/api/new-employee', ({ body }, res) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
      VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        data: body
      });
    });
  });


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
