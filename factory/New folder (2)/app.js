var app=angular.module("my",[]);
app.controller("demo",function($scope,demofac){
  $scope.fnum="";
  $scope.snum="";
  $scope.result="";
  $scope.sum=function(){
  	var x=demofac.sum(parseInt($scope.fnum),parseInt($scope.snum));
  	$scope.result=x;
  }
  $scope.min=function(){
  	var x=demofac.min(parseInt($scope.fnum),parseInt($scope.snum));
  	$scope.result=x;
  }
});
app.factory("demofac",function(){
	var obj={};
	obj.sum=function(x,y){
		var z=x+y;
		return z;
	}
	obj.min=function(x,y){
		var z=x-y;
		return z;
	}
	return obj;
});