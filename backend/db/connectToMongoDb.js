

import mongoose from "mongoose"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`Connected to MongoDB`);
    } catch (e) {
        console.log(`Error connect to MongoDB: ${e}`);
    }
}

export default connect;