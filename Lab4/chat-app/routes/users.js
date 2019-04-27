const express = require('express');
const user = require('../models/user');
const msg = require('../models/message');
const createError = require('http-errors');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find({})
  .then(users=>res.send(users))
  .catch(err =>next(createError(500,err)));
});

router.post('/add',function(req, res, next) {
  user.create(req.body)
  .then(u =>{
    res.send(u);
  })
  .catch(err =>{
        next(createError(400,err.message));
  });
});

router.patch('/:userId',(req,res,next)=>{
  user
  .findByIdAndUpdate(req.params.userId,req.body,{new:true})
  .exec()
  .then(u =>res.send(u))
  .catch(err => next(createError(400,err.message)));
});

router.delete('/:userId',(req,res,next)=>{
  user.findByIdAndDelete(req.params.userId)
  .then(u=>res.send(u))
  .catch(err=>next((createError(400,err.message))));
});

router.get('/:userId',(req,res,next)=>{
  user.findById(req.params.userId)
  .exec()
  .then(u=>res.send(u))
  .catch(err => next(createError(404,err.message)));
});

router.get('/:id/from',(req,res,next)=>{
  msg.find({"from":req.params.id})
  .exec()
  .then(m=>res.send(m))
  .catch(err =>next(createError(404,err)))

});

router.get('/:id/to',(req,res,next)=>{
  msg.find({"to":req.params.id})
  .exec()
  .then(m=>res.send(m))
  .catch(err =>next(createError(404,err)))

});

module.exports = router;
