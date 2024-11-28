const mongoose = require('mongoose');
const dotenv = require('dotenv'); 

dotenv.config(); 

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected Successfully');
    } catch (error) {
        console.log("Database connection Error" , error);
        process.exit(1); 
     }
}

module.exports = connectDb