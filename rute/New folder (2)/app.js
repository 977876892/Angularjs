var obj=angular.module("myapp",['ngRoute']);
obj.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		template:"hello sairam",
	})
	.when("/about",{
		templateUrl:"one.html",
		controller:"onectrl"
	})
});
obj.controller("onectrl",function($scope){
   $scope.items=["one","two","three","four","five"];
});