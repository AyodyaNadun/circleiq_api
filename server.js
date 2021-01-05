const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./app/config/db");
const errorHandler = require("./middleware/error");

// Get env configurations
dotenv.config({ path: "./app/config/devConfig.env" });

const PORT = process.env.PORT;
const mode = process.env.NODE_ENV;

// Connect to the Database
connectDB();

// Get Routes
const userRoute = require("./app/routes/user-route");

const app = express();

// Body parser
app.use(express.json());

// Dev logger
if (mode === 'development') {
    app.use(morgan('dev'));
};

app.use('/api/v1/user', userRoute);

// Handle Errors
app.use(errorHandler);

app.listen( PORT, console.log(`Server is running in ${mode} mode on port ${PORT}`) );
