const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/eg1.html');
   
  });
  


app.listen(3000, () => {
  console.log('Server stared at 3000');
});