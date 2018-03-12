app.factory("getser",function($http,$q){
	var defreed=$q.defer();
		return{
			getpromise:function(){
				return $http.get("https://api.github.com/users/haroldrv").then(function(res){
					defreed.resolve(res.data);
					return defreed.promise;
				},function(res){
					defreed.reject(res);
					return defreed.promise;
				});
			}
		};
	});