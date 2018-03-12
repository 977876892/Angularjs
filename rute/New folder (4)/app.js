var app=angular.module("myapp",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"one.html",
		controller:"onectrl"
	})
	.when("/about",{
		templateUrl:"two.html",
		controller:"twoctrl"
	})
	.when("/service",{
		templateUrl:"three.html",
		controller:"threectrl"
	})
	
});
app.controller("onectrl",function($scope){
	$scope.x=["om","ram","syam","hari","jai"];
});