exports.index = function(req, res){
  var items = [];
  for(var i = 0; i < 1000; i++) {

    items.push({ nick: 'nick' + i, date: new Date(), args: ['zero', 'one'] });
  }
  res.render('index', {
	  name : 'vash',
      channel: 'Express'
    , buffer: items
  });
};