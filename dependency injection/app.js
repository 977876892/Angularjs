var x=function(first,secand){
	this.first=first;
	this.secand=secand;
}
function y(x){
	console.log(x);
}
var item=new x('sai','ram');
y(item);