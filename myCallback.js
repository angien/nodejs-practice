var http = require('http');
var cp = require('child_process');
var userCount = 0;
var flag = 0;
/*
function Promise()

var promise = new Promise(function(resolve, reject) {
	if (flag)
			resolve("I SCARED YOU!");
	else
			resolve("I didn't scare you :(");
});

*/
http.createServer(function (req, res) {
    console.log('New connection was made, preparing surprise...');
    userCount++;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('I have managed to scare '+userCount+' people!\n');

    //prints BOO after x/1000 seconds
	function callbackTimer (x,callback) {
		// after 5 seconds!
		var start = new Date().getTime() + x;
		var curr = new Date().getTime();
		var diff = start - curr;
		while (diff > 0) {
			if ((diff % 1000) == 0)
				console.log(''+diff/1000);
			curr = new Date().getTime();
			diff = start-curr;
		}
		callback();
	}

	callbackTimer(4000, function() {
		console.log('BOOOOOO!!!!!!!');
		flag = 1;
		/*promise.then(function(result) {
			console.log(result);
		}, function(err) {
			console.log(err);
		});*/
	});



	res.end();

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');