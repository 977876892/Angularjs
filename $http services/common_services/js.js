var app=angular.module("my",[]);
		app.controller("demo",['$scope','$http','commonservice',function($scope,$http,commonservice){
               commonservice.demo().then(function mySuccess(response){
               	$scope.item=response.data.description;
               	console.log($scope.item);
               });
               commonservice.demo1().then(function (response){
               	$scope.items=response.data.description;
               	console.log($scope.items);
               });

		}]);