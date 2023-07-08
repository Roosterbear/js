const express = require('express');
const app = express();
const port = 3000;

// We need this to say Express where to find static files
app.use(express.static(__dirname+'/public/'));

app.get('/', (req, res)=>res.sendFile('index.html'));

app.listen(port, ()=>console.log(`Example listening port ${port}!`));

