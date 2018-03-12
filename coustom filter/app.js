/*module creation*/
var obj=angular.module("myApp",[]);

obj.directive("DemoDirective",
	function(){
       var dirobj={};
       dirobj.restrict="EA";
       dirobj.replace=false;
       dirobj.template="<p>well come</p>";
       return dirobj;
});
/*custom directive*/
obj.directive("studentList"
	function(){
      var dirobj={};
      dirobj.restrict="E";
      dirobj.replace=true;
      dirobj.templateUrl="index1.html";
      return dirobj;
});
/*demo controller*/
obj.controller("DemoController",
	function(){
      $scope.uname="sai";
});
/*stu controller*/
obj.controller("studentController",
	functio(){
        $scope.students=
        [
             {uname:"sai",sid:1025,course:"html"},
             {uname:"jai",sid:445,course:"css"},
             {uname:"ram",sid:55,course:"java"}
        ];
});