var app=angular.module("myapp",[]);
app.controller("democtrl",function($scope){
	$scope.a=0;
	$scope.b=0;
	$scope.result=0;
	$scope.summ=function(){
		var x=mathser.sum(parseInt($scope.a),parseInt($scope.b));
		$scope.result=x;
	};
	$scope.mull=function(){
		var x=mathser.mull(parseInt($scope.a),parseInt($scope.b));
		$scope.result=x;
	};
});
/*
app.service("mathser",function(){
	this.summ=function(x,y){
		var z=x+y;
		return z;
	};
	this.mull=function(x,y){
		var z=x*y;
		return z;
	};
});*/
app.factory("mathser",function(){
	var serobj={};
	serobj.summ=function(x,y){
		var z=x+y;
		return z;
	};
	serobj.mull=function(x,y){
		var z=x*y;
		return z;
	};
	return serobj;
});