const express = require('express')
const app = express();
require('dotenv/config')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.options('*',cors());



// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Routers
const productsRouter = require('./routers/products')

const api = process.env.API_URL;

app.use(`${api}/products`,productsRouter)

// Connect to Datbase using Mongoose
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewURLParser : true,
    useUnifiedTopology : true,
    dbName: 'eshop-database'
})
.then(() => {
    console.log('DB Connected Succesfully !!');
})
.catch((err) => {
   console.log(err)
})

// Listen to port
app.listen(3001 , () => {
    console.log(api);
    console.log('Server is listening in Localhost in 3001')
    
} )