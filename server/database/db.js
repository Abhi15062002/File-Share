import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URL = `mongodb://Abhishek:Abhi2002@ac-nacjpaw-shard-00-00.pd8jn0e.mongodb.net:27017,ac-nacjpaw-shard-00-01.pd8jn0e.mongodb.net:27017,ac-nacjpaw-shard-00-02.pd8jn0e.mongodb.net:27017/?ssl=true&replicaSet=atlas-usxffs-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URL, { useNewUrlParser: true });
        console.log('Database connected successfully');     
    }
    catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;