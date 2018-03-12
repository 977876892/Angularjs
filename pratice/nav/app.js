var obj=angular.module("myApp",["ngRoute"]);
obj.config(function($routeProvider){
	$routeProvider
		.when("/home",{
			templateUrl:"two.html"
		})
		.when("/about",{
			templateUrl:"three.html",
			controller:"threectrl"
		})
	
});
obj.controller("threectrl",function($scope){
	$scope.detail=["sai","ram","hari","jai","syam","gita"];
});