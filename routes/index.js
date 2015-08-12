exports.index = function(req, res, next){
  
  res.render('index', {fruits: ['apple', 'oranges', 'mango', 'peach']});
};