var app=angular.module("myapp",[]);
app.controller("demo",function($scope){
	$scope.items=
	[
       {name:"sai",date:new Date("march 28 2017"),gender:1,salary:50000},
       {name:"ram",date:new Date("30 march 2007"),gender:2,salary:230000},
       {name:"jai",date:new Date("1 june 1965"),gender:3,salary:10000},
       {name:"om",date:new Date("28 may 1985"),gender:2,salary:980000},
       {name:"kisan",date:new Date("31 january 1995"),gender:1,salary:50000},
       {name:"hari",date:new Date("22 february 2015"),gender:3,salary:70000},
       {name:"jagdish",date:new Date("19 july 2007"),gender:2,salary:50000},
       {name:"om",date:new Date("15 march 2014"),gender:1,salary:58000},
       {name:"ramji",date:new Date("30 march 2011"),gender:2,salary:60000},
       {name:"bikash",date:new Date("02 march 2010"),gender:3,salary:25500}
	];

});
app.filter("demofilter",function(){
	 return function(gender){
	switch(gender){
		case 1:
		   return "male";
		case 2:
		   return "female";
		case 3:
		   return "other";
	}  
	}
});