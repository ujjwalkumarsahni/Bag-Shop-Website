const express = require('express');

const app = express()


app.get('/', (req, res) =>{
    res.send("hello my name is Ujjwal");
});




const port = 4000;
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting the server: ${err.message}`);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});