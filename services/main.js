var obj=angular.module("myApp",[]);
obj.controller("democtrl",function($scope,DemoService){
	$scope.fname="";
	$scope.lname="";
	$scope.res="";
	$scope.getsumresult=function(){
		var n=DemoService.sum(($scope.fname),($scope.lname));
		$scope.res=n;
	};
});
//*service*//
obj.service("DemoService",function(){
	this.sum=function(x,y){
		var z=x+y;
		return z;
	};
});