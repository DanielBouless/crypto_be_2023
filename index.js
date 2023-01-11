const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: `http://localhost:3000`}));



app.get('/', (req, res)=>{
    res.send('welcome')
})



app.listen(5050, ()=>{
    console.log('listening on 5050')
})