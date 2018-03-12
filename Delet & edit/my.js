var obj=angular.module("myApp",[]);
obj.controller("Democtrl",
	function($scope){
       $scope.contacts=
       [
          {name:"sai",number:98666535,city:"bam"},
          {name:"ram",number:88956845,city:"delhi"},
          {name:"om",number:869524572,city:"mumbai"}
       ];
       $scope.saveContact=function(){
       	$scope.contacts.push($scope.newContact);
       	$scope.newContact={}
       }
       $scope.deletContact=function(contact){
       	$scope.contacts.splice($scope.contacts.indexOf(contact),1);
       }
       $scope.edit=function(contact){
       	$scope.newContact=angular.copy(contact);
       }
});
obj.filter("reverse",function(){
	return function(input){
		var result=input.split('').reverse().join("");
		return result;
	}
});