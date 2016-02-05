 angular.module('CalcApp',[]).controller('CalcController',calcCalculator);

 function calcCalculator($scope)
 {
     //vm=this;

     $scope.sum=function()
     {
         $scope.z=$scope.x+$scope.y;
     };
 }
 angular.element(document).ready(function()
 {
    angular.bootstrap(document,['CalcApp']);
 });
