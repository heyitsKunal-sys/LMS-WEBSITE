import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// initailize the Express

const app = express()




// Middleware
app.use(cors())



// creating default route

app.get('/', (req,res)=> res.send("Api Working"))


// PORT

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})