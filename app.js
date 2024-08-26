const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('style'));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Route for the research page
app.get('/research', (req, res) => {
  res.sendFile(path.join(__dirname, 'research.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
