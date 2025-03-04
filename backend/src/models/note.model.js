import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
   },
   content: {
      type: String,
   },
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
   },
   favorite: {
      type: Boolean,
      default: false,
   },
   created_at: {
      type: Date,
      default: Date.now,
   },
});

export default mongoose.model('Note', noteSchema);
