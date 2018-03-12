var obj=angular.module("myApp",["ngRoute"]);
obj.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"one.html"
	})
	.when("/about",{
		templateUrl:"two.html",
		controller:"democtrl"
	})
	.otherwise({
		templateUrl:"one.html"
	});
});
obj.controller("democtrl",function($scope){
	$scope.items=[1,2,3,4,6,8,];
});