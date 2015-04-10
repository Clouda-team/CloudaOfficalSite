var cache = {};

cache.add = function (key, value) {
	cache[key] = value;
	return ;
}

cache.rm = function (key){
	cache[url] = null;
	return ;
}

cache.get = function(key){
	return cache[key];
}

cache.clear = function (){
	cache = {};
	return ;
}

module.exports = cache;
