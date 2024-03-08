const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const conn  = await  mongoose.connect(process.env.MONGO_URI)
        console.log(`db successfully connected`,  conn.connection.host)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;