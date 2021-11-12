const express = require('express')
const app = express();
require('dotenv/config')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handler')
app.use(cors());
app.options('*', cors())



// Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);
// app.use((err,req,res,next) => {

//     if (err) {
//         res.status(500).json({message: err});
//     }

// })

// Routers
const productsRouter = require('./routers/products')



//Routes
const categoriesRoutes = require('./routers/categories');
const productsRoutes = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

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