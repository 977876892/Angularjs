var app=angular.module("my",[]);
app.controller("demo",function($scope,demoser){
   $scope.fnum="";
   $scope.snum="";
   $scope.sum=function(){
   	var xyz=demoser.sum(parseInt($scope.fnum),parseInt($scope.snum));
   	$scope.result=xyz;
   }
   $scope.mul=function(){
   	var abc=demoser.mul(parseInt($scope.fnum),parseInt($scope.snum));
   	$scope.result=abc;
   }
   $scope.sub=function(){
   	var xyz=demoser.sub(parseInt($scope.fnum),parseInt($scope.snum));
   	$scope.result=xyz;
   }
});
app.service("demoser",function(){
	this.sum=function(x,y){
		var z=x+y;
		return z;
	}
	this.mul=function(x,y){
		var z=x*y;
		return z;
	}
	this.sub=function(x,y){
		var z=x-y;
		return z;
	}
});