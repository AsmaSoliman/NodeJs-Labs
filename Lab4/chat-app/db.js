const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab4',{
    autoIndex:true,
    useNewUrlParser:true
});