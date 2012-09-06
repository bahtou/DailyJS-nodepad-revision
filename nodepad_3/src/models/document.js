var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var documentSchema = module.exports = new Schema(
    {
      title: {type: String, required: true, index: true},
      data: {type: String, required: true},
      tags: {type: String},
      user_id: {type: String, index: true}
    }
  );