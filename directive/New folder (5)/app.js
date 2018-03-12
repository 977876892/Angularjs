var app=angular.module("myapp",[]);
app.directive("demodir",function(){
	return{
	restrict:"E",
	templateUrl:"one.html",
	controller:"onectrl"
	}
});
app.directive("classdir",function(){
	return{
	restrict:"C",
	templateUrl:"two.html",
	controller:"twoctrl"
	}
});
app.controller("onectrl",function($scope){
	$scope.x=
	[
	{name:"sai",class:"10th"},{name:"jai",class:"8th"}
	];
	$scope.y={name:"",class:""};
});
app.controller("twoctrl",function($scope){
	$scope.x=["one","two","three","four"];
	
});