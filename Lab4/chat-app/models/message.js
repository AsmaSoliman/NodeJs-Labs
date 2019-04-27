const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    to:{
        type:String
    },
    from:{
        type:String
    },
    text:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

});

const msgModel = mongoose.model('Message',msgSchema);
module.exports = msgModel;