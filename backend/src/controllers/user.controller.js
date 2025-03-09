import bcrypt from 'bcrypt';
import validator from 'validator';
import Note from '../models/note.model.js';
import User from '../models/user.model.js';
import generateHashedPassword from '../utils/generateHashedPassword.util.js';
import generateResponse from '../utils/generateResponse.util.js';
import generateToken from '../utils/generateToken.util.js';

const registerUserController = async (req, res) => {
   const { username, email, password } = req.body;

   if (!username || !email || !password) {
      return generateResponse(res, 400, true, 'all fileds required');
   }

   if (!validator.isEmail(email)) {
      return generateResponse(res, 400, true, 'email is not valid');
   }

   try {
      const userExist = await User.findOne({ email });

      if (userExist) {
         return generateResponse(res, 409, true, 'user already exist');
      }

      const hashedPassword = await generateHashedPassword(password);

      const user = new User({
         username,
         email,
         password: hashedPassword,
      });

      await user.save();

      const token = generateToken(user);

      res.cookie('token', token, {
         httpOnly: true,
         secure: true,
         sameSite: 'lax',
         maxAge: 24 * 60 * 60 * 1000,
      });

      return generateResponse(res, 201, false, 'register succesfully', {
         user: {
            username: user.username,
            email: user.email,
         },
      });
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const loginUserController = async (req, res) => {
   const { username, password } = req.body;

   if (!username || !password) {
      return generateResponse(res, 400, true, 'all fileds required');
   }

   try {
      const user = await User.findOne({ username });

      if (!user) {
         return generateResponse(res, 404, true, 'user not found');
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return generateResponse(res, 400, true, 'wrong username or password');
      }

      const token = generateToken(user);

      res.cookie('token', token, {
         httpOnly: true,
         secure: true,
         sameSite: 'None',
         maxAge: 24 * 60 * 60 * 1000,
      });

      return generateResponse(res, 200, false, 'login succesfully', {
         user: {
            username: user.username,
            email: user.email,
         },
      });
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const logoutUserController = async (req, res) => {
   try {
      res.clearCookie('token', {
         httpOnly: true,
         secure: true,
         sameSite: 'None',
      });

      return generateResponse(res, 200, false, 'logout successfully');
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const getUserController = async (req, res) => {
   const { id } = req.user;

   try {
      const user = await User.findById(id)
         .select('-__v -password -_id -created_at')
         .lean();

      if (!user) {
         return generateResponse(res, 404, true, 'user not found');
      }

      return generateResponse(res, 200, false, 'get user succesfully', user);
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const deleteUserController = async (req, res) => {
   const { id } = req.user;

   try {
      const user = await User.findByIdAndDelete(id, { new: false });

      if (!user) {
         return generateResponse(res, 404, true, 'user not found');
      }

      await Note.deleteMany({ user_id: id });

      res.clearCookie('token', {
         httpOnly: true,
         secure: true,
         sameSite: 'lax',
      });

      return generateResponse(res, 200, false, 'delete account successfully');
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

export {
   deleteUserController,
   getUserController,
   loginUserController,
   logoutUserController,
   registerUserController,
};
