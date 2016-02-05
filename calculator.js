 angular.module('calcApp',[]).controller('calcController',calcCalculator);
 function calcCalculator()
 {
     vm=this;

     vm.sum=function()
     {
         vm.z=vm.x+vm.y;
     };
 }
 angular.element(document).ready(function()
 {
    angular.bootstrap(document,['calcApp']);
 });
