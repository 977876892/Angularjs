var obj = angular.module('myapp', []);

obj.factory("mathService",
	function(){
       serviceobj.sum=function(x,y)
       {
		   
       	var z=x+y;
       	return z;
       };
       serviceobj.multiply=function(x,y)
       {
       	var z=x*y;
       	return z;
       };
	   return serviceobj;
});