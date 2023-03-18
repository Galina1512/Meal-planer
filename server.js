const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();
mongoose.set('strictQuery', false);


const PORT = 4000 || process.env.port;
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then (()=> console.log('We are connected to MONGO'))
.catch((err)=> console.log(err))

app.use(routes);
app.listen(PORT, ()=>{
    console.log(`I am listened on port ${PORT}`)
})


// пароль:  Ko5tinagalina
// name  Galina

// mongodb+srv://Galina:<password>@cluster0.oz5ocrs.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://Galina:<password>@cluster0.oz5ocrs.mongodb.net/?retryWrites=true&w=majority