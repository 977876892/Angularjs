var obj=angular.module("myapp",[]);
obj.controller("democtrl",function($scope){
	$scope.details=
	[
       {name:"sai",rate:100},
       {name:"ram",rate:150},
       {name:"om",rate:1000},
       {name:"sri",rate:600},
       {name:"jai",rate:1880},
       {name:"hari",rate:1500}
	];
	$scope.toggle=function(x){
		x.active=!x.active;
	};
	$scope.total=function(){
		var total=0;
		angular.forEach($scope.details, function(x){
			if (x.active){
				total+= x.rate;
			}
		});
		return total;
	}
});