const moment = require('moment/moment')
const mongoose = require('mongoose');
const schema = mongoose.Schema

const postModel = new schema({
  userName: {
    type: String,
    require: true, 
  },
  // title: {
  //   type: String,
  //   require: true, 
  // },
  post: {
    type: String,
    require: true, 
  },

  created_at:{
    type: Date,
    default: Date.now,
    get: function (createdAt){
      return moment(createdAt).format('Do MMMM YYYY')
    }
  }
}, {timestamps: true})

module.exports = mongoose.model('post', postModel)