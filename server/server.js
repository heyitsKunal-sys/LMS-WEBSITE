import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configs/mongodb.js' 


// initailize the Express

const app = express()

// connect to database
await connectDb()



// Middleware
app.use(cors())



// creating default route

app.get('/', (req,res)=> res.send("Api Working"))


// PORT

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})