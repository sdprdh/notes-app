import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
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
   deleted_at: {
      type: Date,
      default: null,
   },
});

export default mongoose.model('Note', noteSchema);
