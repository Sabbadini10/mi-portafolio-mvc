const express = require('express');
const app = express();
const path = require('path')
const port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html' )));
app.get('/about', (req,res) => res.sendFile(path.join(__dirname, 'views', 'about.html' )));

app.listen(port, () => console.log('Server running in http://localhost:' + port))

