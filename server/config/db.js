const mongoose = require('mongoose');
const config = require('config');

// Get MongoDB connection URI from config file
const db = config.get('mongoURI');

const conectDB = async () => {

    // Connect to Database
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log('MongoDB is Connected...');
    }   catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = conectDB;