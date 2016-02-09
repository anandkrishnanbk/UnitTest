 angular.module('prodApp',['prodApp.service']).controller('ProdController',ProdController);
 ProdController.$inject=['$scope','categoryService','productService'];
 function ProdController($scope,categoryService,productService)
 {
  $scope.products =function() {
   alert(JSON.stringify(productService.getProducts()));
  }

 }
 /*angular.element(document).ready(function()
 {
     angular.bootstrap(document,['prodApp']);
 });*/
