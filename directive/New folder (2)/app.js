
var obj=angular.module("myApp",[]);
obj.directive("demodir",function(){
	return{
		restrict:"EA",
		templateUrl:"one.html"
	};
});
obj.directive("twodir",function(){
	return{
		restrict:"A",
		templateUrl:"two.html",
		controller:"twoctrl"
	};
});
obj.controller("twoctrl",function($scope){
	$scope.x=["sai","ram","sri","jai"];
});