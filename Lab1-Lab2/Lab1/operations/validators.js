module.exports=(...val)=>{
    val.forEach(el=>{
        if(isNaN(el))
        {
            throw "The value is not a number"
        }
        
    })
}

