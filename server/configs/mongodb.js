import mongoose from "mongoose";
// connect to MONGOdb databse

const connectDb = async ()=>{
    mongoose.connection.on('connected' , () => console.log('Database Connected'))  //first we create an event
    await mongoose.connect(`${process.env.MONGODB_URL}/LMS`)

}
export default connectDb
 
// export this to server.js