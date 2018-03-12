var app=angular.module("my",[]);
app.controller("demo",function($scope,$http){
	$http({method:"get",url:"http://api.tvmaze.com/schedule?country=US&date=2014-12-01"})
	.then(function mySuccess(response){
		$scope.mydata=response.data;
	},
	function myError(response){
		$scope.mydata=response.stastusText;
	});
});