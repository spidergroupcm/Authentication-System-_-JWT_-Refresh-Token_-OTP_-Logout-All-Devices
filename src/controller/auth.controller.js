import userModel from "../models/user.model.js"
import crypto from 'crypto'
import config from "../config/config.js";
import jwt from 'jsonwebtoken'


export  async function register(req,res){
const {name, email, password} = req.body

const isAlreadyRegistered = await userModel.findOne({
    $or : [
      {name},
      {email}
    ]
})

if(isAlreadyRegistered){
  return res.status(409).json({
    message : "User or email already exists"
  })
}


const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");


const user = await userModel.create({
  name,
  email,
  password : hashedPassword
})

const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "1d" })

res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })

res.status(201).json({
        message: "User registered successfully",
        user: {
            username: user.name,
            email: user.email,
            
        },
        token
})


}