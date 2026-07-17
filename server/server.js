import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configs/mongodb.js' 
import {clerkWebhooks} from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'


// initailize the Express

const app = express()

// connect to database.
await connectDb()
await connectCloudinary()



// Middleware
app.use(cors())
app.use(clerkMiddleware())


// creating default route or Routes

app.get('/', (req,res)=> res.send("Api Working"))

app.post('/clerk' , express.json(), clerkWebhooks)

app.use('/api/educator',express.json(), educatorRouter)


// PORT

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})