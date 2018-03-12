var app=angular.module("my",[]);
app.controller("demo",function($scope,$http){
	$http({method:"get",url:"file:///E:/Angular%20JS/API/api%20set/json/json.json"})
	.then(function success(res){
		$scope.x=res.data;
	});
});
