module.exports=(...arg)=>{
    return arg.reduce((agg,val)=>{
        let validate = require('./validators');
        validate(val);
        return agg-=val;
      
    
})
}