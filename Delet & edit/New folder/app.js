var app=angular.module("myapp",[]);
app.controller("demo",function($scope){
	$scope.items=["salt","sugar","rice","tea"];
	$scope.sub=function(){
		$scope.error="";
		if(!$scope.items){
		   return;
	   }
		if($scope.items.indexOf($scope.xyz) == -1){
			$scope.items.push($scope.xyz);
		}
		else{
			$scope.error="already available";
		}
	}
	$scope.cli=function(x){
      $scope.items.splice(x,1);
	}
});