var obj=angular.module("myApp",[]);
obj.controller("democtrl",function($scope){
	var first="";
	var second="";
	var res="";
	$scope.add=function(){
		var x=demoservice.sum(parseInt($scope.first),parseInt($scope.second));
		$scope.res=x;
	};
	$scope.min=function(){
		var x=demoservice.mul(parseInt($scope.first),parseInt($scope.second));
		$scope.res=x;
	};
});