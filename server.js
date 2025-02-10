const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname, 'image')));

app.get('/navbar.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'navbar.html'));
});

// Serve the script.js file
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

app.listen(5500, () => console.log('Server running on http://localhost:5500'));
