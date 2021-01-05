const ErrorRenspose = require("../app/utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    // Bad object ID error handler
    if (err.name === 'CastError') {
        const message = `User not found for id of ${err.value}`;
        error = new ErrorRenspose(message, 404);
    }

    // Duplicate key error handler
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorRenspose(message, 400);
    }

    // Validation error handler
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(er => er.message);
        error = new ErrorRenspose(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode,
        errorType: err.name,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;