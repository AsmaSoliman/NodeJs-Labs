module.exports=(...arg)=>{
    return arg.reduce((agg,val)=>{
        let validate = require('./validators');
        validate(val);
        if(val === 0){
            throw "can't divide by 0" ;
        }
        return agg%=val;
})
}