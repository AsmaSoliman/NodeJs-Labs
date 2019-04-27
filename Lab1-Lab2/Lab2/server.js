const fs = require('fs');
const url = require('url');
const http = require('http');

const server = http.createServer(function(req,res){

    const urlObject = url.parse(req.url,true);
    const fileName = "."+ urlObject.pathname;
    console.log(urlObject.pathname.substring(1));

    fs.readFile(fileName,function(err,data){
           
        if(err){
            res.writeHead(404,{'Content-Type' : 'text/html'});
            return res.end("404 Not Found");
        }
         
           res.writeHead(200,{'Contetn-Type':'image/jpg'});
           res.write(data);
           res.end();
    });

});

server.listen(3000,()=>{
    console.log("server is running");
});