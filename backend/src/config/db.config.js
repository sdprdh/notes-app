import mongoose from 'mongoose';

mongoose
   .connect(process.env.MONGODB_URL)
   .then(() => {})
   .catch((e) => {
      console.log(e.message);
   });
