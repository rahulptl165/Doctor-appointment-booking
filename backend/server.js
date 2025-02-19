import express from 'express'
import cors from 'cors'
import env from 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRouter.js'


const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()

app.use(express.json())
app.use(cors())

// api end points
app.use('/api/admin',adminRouter)
// localhost:4000/api/admin/add-doctor

app.get('/', (req, res)=>{
    res.send('Api working')
})

app.listen(port, ()=>{
    console.log('server started ', port)
})