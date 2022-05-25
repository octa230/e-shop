import express  from "express";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { generateToken, isAuth } from "../utils.js";
import expressAsycHandler from 'express-async-handler'
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.post('/signin', expressAsycHandler(async (req, res)=> {
    const user = await User.findOne({email: req.body.email});

    if (user) {
    
    if (bcrypt.compareSync(req.body.password, user.password)){
        res.send({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user)
        });
        return;


    }

    }
    res.status(401).send({message: 'Invaid email or password' });
})

);
// add new user to database
userRouter.post('/signup', expressAsyncHandler(async(req, res) =>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
    });
    
    //save to db
    const user = await newUser.save();

    //return to frontend
    res.send({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
    });
}));

userRouter.put(
    '/profile',
    isAuth,
    expressAsycHandler(async (req, res) => {

        const user = await User.findById(req.user._id);

        if (user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;

            if(req.body.password){
                user.password = bcrypt.hashSync(req.body.password, 8);
            }

            const updatedUser = await user.save();

            res.send({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser),
            });
        } else {
            res.status(404).send({message: 'User not found'})
        }
    })
)
export default userRouter;