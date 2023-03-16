const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req,res) => {
    const { userName, email, password, picture } = req.body;

    const userExists = await User.findOne({ email });
    
    //checks if user already exists
    if (userExists){
        res.status(400);
        throw new Error('User already exists');
    }
    
    //Creates user
    const user = await User.create({
        userName,
        email,
        password,
        picture,
    });


    //checks if user was created
    if (user){
        res.status(201).json(
            {
               _id: user._id,
               userName: user.userName,
               email: user.email,
               isAdmin: user.isAdmin,
               picture: user.picture,
               token: generateToken(user._id),
            }
        )
    } else {
        res.status(400);
        throw new Error('Error creating user');
    }
});

const authUser = asyncHandler(async (req,res) => {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });
    
    if (user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
               userName: user.userName,
               email: user.email,
               isAdmin: user.isAdmin,
               picture: user.picture,
               token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid username or password');
    }
});

module.exports = { registerUser, authUser };