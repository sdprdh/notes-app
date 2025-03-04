import bcrypt from 'bcrypt';

const generateHashedPassword = async (password) => {
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
};

export default generateHashedPassword;
