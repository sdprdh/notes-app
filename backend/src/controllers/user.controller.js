import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../models/user.model.js";
import validator from "validator";

// register user
const registerUserController = async (req, res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required',
        });
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({
            message: 'Email is not valid',
        })
    }

    try {
        const isUser = await User.findOne({email});

        if (isUser) {
            throw new Error('User already exists');
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        const accessToken = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '3d',
        });

        return res.status(201).json({
            message: 'Registered successfully',
            user: {
                username: user.username,
                email: user.email,
                token: accessToken,
            },
        });
    } catch (e) {
        return res
            .status(500)
            .json({message: e.message || 'Internal Server Error'});
    }
};

// login user
const loginUserController = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'All fields are required',
        });
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({
            message: 'Email is not valid',
        })
    }

    try {
        const user = await User.findOne({email});

        if (!user) {
            throw new Error('User not found');
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Wrong email or password');
        }

        // create token without password
        const accessToken = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '3d',
        });

        return res.status(200).json({
            message: 'Login successfully',
            user: {
                username: user.username,
                email: user.email,
                token: accessToken,
            },
        });
    } catch (e) {
        return res
            .status(500)
            .json({message: e.message || 'Internal Server Error'});
    }
};


export {
    registerUserController,
    loginUserController,
};
