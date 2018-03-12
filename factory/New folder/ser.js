obj.service("demoservice",function(){
	this.sum=function(x,y){
		var z=x+y;
		return z;
	};
	this.mul=function(x,y){
		var z=x*y;
		return z;
	};
});