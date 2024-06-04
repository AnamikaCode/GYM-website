import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import {sendEmail} from './utils/sendEmail.js'

const app = express()
const router = express.Router()

config({path: "./config.env"})
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

router.post("/send/mail",async(req,res,next)=>{
    const { name,email,message } = req.body
    if (!name || !email || !message) {
        return next(
            res.status(400).json({
                success: false,
                message:"please provide all details"
            })
        )
    }
    try{
        await sendEmail({
            email:"tmika0232@gmail.com",
            subject:"GYM WEBSITES Contact",
            message,
            userEmail: email,
        })
        res.status(200).json({success: true, message: "Email sent successfully"})
    } catch(error) {
        res.status(500).json({success: false, message: error.message})
    }
})

router.get("/",(req,res,next) => {
    res.json({ success : true, message : "hello everyone"})
})
app.use(router)
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})