var q = require('q');
var http = require('http');

var promise = function () {
	var deferred = q.defer();
	http.get('http://www.google.com', function (err, resp) {
		var result = {};
		result.err = err;
		result.resp = resp;
		if (err) {
			deferred.reject(result.err);
		}
		deferred.resolve(result.resp);
	});
	return deferred.promise;
}

promise().then(function (resp) {
	console.log('success');
	process.exit();
}, function (reason) {
	console.log('error reason');
	console.log(reason);
	process.exit();
});