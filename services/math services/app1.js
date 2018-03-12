var app=angular.module("my",[]);
app.controller("demo",function($scope,demoser){
   $scope.fnum="";
   $scope.snum="";
   $scope.result="";
   $scope.getsum=function(){
   	var x=demoser.sum(parseInt($scope.fnum),parseInt($scope.snum));
   	$scope.result=x;
   	$scope.cho="You chooseing a + key";
   }
   $scope.getsub=function(){
   	var y=demoser.sub(parseInt($scope.fnum),parseInt($scope.snum));
   	$scope.result=y;
   	$scope.cho="You chooseing a - key";
   }
   $scope.getmul=function(){
   	var x=demoser.mul(parseInt($scope.fnum),parseInt($scope.snum));
   	$scope.result=x;
   	$scope.cho="You chooseing a * key";
   }
   $scope.getdiv=function(){
   	var x=demoser.div(parseInt($scope.fnum),parseInt($scope.snum));
   	$scope.result=x;
   	$scope.cho="You chooseing a / key";
   }
});
app.service("demoser",function(){
	this.sum=function(x,y){
		var z=x+y;
		return z;
	}
	this.sub=function(x,y){
		var z=x-y;
		return z;
	}
	this.mul=function(x,y){
		var z=x*y;
		return z;
	}
	this.div=function(x,y){
		var z=x/y;
		return z;
	}
	
});