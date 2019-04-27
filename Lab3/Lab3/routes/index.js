var express = require('express');
var router = express.Router();


const Cars = [
  {id:'1',name:'Ford Mustang',img:'https://wallpapercave.com/wp/sAJN7wx.jpg'},
  {id:'2',name:'Tesla Roadster',img:'https://www.wsupercars.com/wallpapers/Tesla/2020-Tesla-Roadster-V6-1080.jpg'},
  {id:'3',name: 'Porsche Panamera',img:'https://stmed.net/sites/default/files/porsche-panamera-turbo-wallpapers-32517-2246648.jpg'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listCars',{Cars});
});

router.get('/add', function(req, res, next) {
  res.render('Cars/add');
});

router.post('/add', function(req, res, next) {
  Cars.push(req.body);
  res.redirect("/"); 
});

router.get('/edit/:id', function(req, res, next) {
 const car = Cars.find(c=>c.id === req.params.id)
console.log(car);
  res.render('Cars/edit',{car});
});

router.post('/edit/:id', function(req, res, next) {
      const car = Cars.find(c=>c.id === req.body.id);
      car.name = req.body.name;
  
  res.redirect("/");
 });

 router.get('/delete/:id', function(req, res, next) {
  const car = Cars.find(c=>c.id === req.params.id)
  Cars.forEach((ele,i) => {
    if(ele.id === car.id ){
      Cars.splice(i,1);
    }  
    });
     res.redirect('/');
 });
 

module.exports = router;
