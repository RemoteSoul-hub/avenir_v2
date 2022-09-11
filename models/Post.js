const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  cdd: {
    type: Boolean,
  },
  cdi: {
    type: Boolean,
  },
  alternance: {
    type: Boolean, 
  },
  interim: {
    type: Boolean,
  },
  partiel: {
    type: Boolean,
  },
  plein: {
    type: Boolean,
    },
  creator: {
    type: String
  },
  // tags: {
  //   type: [String]
  // },
  
  avatar : {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

PostSchema.index({ title: 'text' })
module.exports = mongoose.model('post', PostSchema);
