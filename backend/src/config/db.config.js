import mongoose from 'mongoose';

mongoose
   .connect(process.env.MONGODB_URL)
   .then(() => {console.log('connect mongodb succesfully');
   })
   .catch((e) => {
      console.log(e.message);
   });
