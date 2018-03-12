var app=angular.module("app",[]);
app.controller("demo",function($scope,$rootScope){
	  $scope.services = [
        {
        	id:1,
            name: 'Web Development',
            price: 300,
            active:false
        },{
        	id:2,
            name: 'Design',
            price: 400,
            active:false
        },{
        	id:3,
            name: 'Integration',
            price: 250,
            active:false
        },{

        	id:4,
            name: 'Training',
            price: 220,
            active:false
        }
    ];

    $scope.toggleActive=function(ser){
    	//console.log(ser)
    	ser.active=!ser.active;
    }
    $scope.total=function(){
    	var total = 0;
    	// for(var i=0;i<$scope.services.length;i++){
    	// 	if($scope.services[i].active == true){
    	// 		total+=$scope.services[i].price;
    	// 	}
    	// }
    	angular.forEach($scope.services,function(s){
    		//console.log(s)
    		if(s.active){
    			total+=s.price;
    		}
    	})
    	 return total;
    }
	$scope.selechec=[];
   $scope.toggleSelection =function(chec){
   	console.log(chec.id);

   	var idx=$scope.selechec.indexOf(chec.id);
   	console.log(idx)
   	if(idx>-1){
   		$scope.selechec.splice(idx,1);
   	}else{
   		$scope.selechec.push(chec.id);
   	}
   	console.log($scope.selechec)
   }
   
})