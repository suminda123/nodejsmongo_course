exports.fruitpicker = function(req, res, next){
var favorite = req.body.fruit;

if (!favorite)
	next(Error('Please chooser fruit'));
	
	res.render('fruitpicker', {fruitselected: favorite});
};