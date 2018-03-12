var app=angular.module("myApp",[]);
app.directive("demodir",function(){
   return{
   	restrict:"AE",
   	templateUrl:"one.html",
   	controller:"onectrl"
   };
});
app.directive("demodir1",function(){
   return{
   	restrict:"AE",
   	templateUrl:"two.html",
   	controller:"twoctrl"
   };
});
app.controller("onectrl",function($scope){
	$scope.item=["sai","ram","sri","jai"];
});

app.controller("twoctrl",function($scope){
	$scope.item="two";
});