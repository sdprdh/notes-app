import jwt from 'jsonwebtoken';

const generateToken = (data) => {
   return jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
   });
};

export default generateToken;
