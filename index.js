const express = require('express')
const bodyParser = require('body-parser');
// CORS module provides middleware for handling Cross-Origin Resource Sharing.
// mechanism that allows a web page from one origin to access resources from another origin. 
const cors = require('cors');
const connectDB = require('./config/db')
const books = require('./routes/book')
//allows you to define routes and middleware to handle HTTP requests
const app =express();

//to establish a connection to the database
connectDB()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin:true,  //means har url pe work krega kisi bhi url pe deploy krenge work krega  
    credentials: true 
}))

app.use(express.json({extented: false}))


app.use('/api/book', books)


app.get('/', (req,res) => {
    res.send('Api is running')
})

const port = 5000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})