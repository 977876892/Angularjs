var obj=angular.module("myApp",[]);
obj.controller("Democtrl",
	function($scope){
		$scope.detail=[
          {name:"sai",number:98666535,city:"bam"},
          {name:"ram",number:88956845,city:"delhi"},
          {name:"om",number:869524572,city:"mumbai"}
       ];
		$scope.save=function(){
			$scope.detail.push($scope.new);
			$scope.new={}
		}
		$scope.delet=function(contact){
			$scope.detail.splice($scope.detail.indexOf(contact),1);

		}
		$scope.edit=function(contact){
			$scope.new=angular.copy(contact);
		}
	});