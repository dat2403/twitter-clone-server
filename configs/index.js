
const mongoose = require('mongoose');

const connectionString = "mongodb+srv://hoangtiendat:24032000@cluster0.ytvmmmk.mongodb.net/?retryWrites=true&w=majority";


const connectDatabase = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Database connected");
    } catch (e) {
        console.log("Cannot connect database");
    }
}
module.exports = {
    connectDatabase
}