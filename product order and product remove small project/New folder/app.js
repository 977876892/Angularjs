var app=angular.module("my",[]);
app.controller("demo",function($scope){
	$scope.order=
	[
      "salt","sugar","rice","tea"
	];
	$scope.order1="";
	$scope.add=function(){
		$scope.error="";
		if(!$scope.items)
		{
			return;
		}
		if($scope.order.indexOf($scope.items) == -1){
			$scope.order.push($scope.items);
		}

		else{
			$scope.error="The item is already in your shopping list.☺";
		}
	}
	$scope.remo=function(x){
		$scope.error="";
		$scope.order.splice(x,1);
	}
});