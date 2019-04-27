const mongoose = require('mongoose');
const validator = require('validator');
// const integerValidator =require('mongoose-integer');

const userSchema = new mongoose.Schema({
      username:{
          type:String,
          unique:true,
          lowercase:true,
          required:true,
          minlength:2,
          index:{unique:true},
      },
      email:{
          type:String,
          unique:true,
          index:{unique:true},
          required:true,
          lowercase:true,
          validate: validator.isEmail
      },
      age:{
           type:Number,
        //    integer:true,
           min:16,
           max:100,
           required:true,
      },
      gender:{
          type:String,
          enum:['male','female','n/a'],
          lowercase: true,
          default:'n/a',

      },
      country:{
          enum:['eg','us','uk'],
          required:true,
          lowercase:true,
          type:String
      }
},{
    autoIndex:true
});

//schema.plugin(integerValidator);

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;