require('dotenv').config()
const {notFound}=require('./handlers/errorHandlers')
const mongoose=require('./config/db/db')
const express=require('express')
const morgan = require('morgan');
const swaggerUI=require('swagger-ui-express')
const swaggerJsDocs=require('swagger-jsdoc')
const appRouter=require('./routes/app.router')

const port=process.env.PORT

const app=express();


// Listen to the custom events emitted by the database connection
mongoose.connection.on('mongodbConnected', () => {
    // The MongoDB connection is open, you can start adding records

    app.use(morgan('dev'));

    const options={
        definition:{
            openapi:'3.0.0',
            info:{
                title:'new hope academy api',
                version:'1.0.0',
                description:"The api"
            },
            servers:[
                {
                    url:"http://localhost/4500"
                }
            ]
        }
    }

    app.use('/api',appRouter)

    app.use(notFound)


    // Start the Express server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

mongoose.connection.on('mongodbError', (error) => {
    // There was an error connecting to MongoDB
    console.error('MongoDB connection error:', error);
    // Handle the error as needed
});


