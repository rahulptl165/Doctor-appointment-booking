import express from 'express'
import cors from 'cors'
import env from 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRouter.js'
import doctorRouter from './routes/doctorRouter.js'
import userRouter from './routes/userRouter.js'


const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()

app.use(express.json())
app.use(cors())

// api end points
app.use('/api/admin',adminRouter)
// localhost:4000/api/admin/add-doctor
app.use('/api/doctor',doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res)=>{
    res.send('Api working')
})

app.listen(port, ()=>{
    console.log('server started ', port)
})