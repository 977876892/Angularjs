
var app=angular.module("crudApp",[]);

 app.controller("ContactController",function($scope){
	
 $scope.contacts=[{"name":"sarath","phone":"994353634457","city":"HYD"},{"name":"KUMAR","phone":"994353665457","city":"KNR"},
	{"name":"DASHArth","phone":"5467565733453","city":"SEC"}];

	$scope.saveContact=function(){
		$scope.contacts.push($scope.newContact);
		$scope.newContact={}
	}
	$scope.deleteContact=function(contact){
	 $scope.contacts.splice($scope.contacts.indexOf(contact),1);
	}
	$scope.edit=function(contact){
	 $scope.newContact=angular.copy(contact);
	}
});
 app.filter("reverse",function(){
	return function(input){
	var result=input.split('').reverse().join("");
	return result;
  }
});


