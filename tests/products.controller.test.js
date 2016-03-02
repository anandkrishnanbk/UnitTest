describe('All products controller tests', function () {
    /*var alias='prodApp';
     var obj={"customerService":{getcustIds:function()
     {
     return [23,34,56,76];
     }}
     };
     var func = function($provide)
     {
     $provide.constant('discountPercent',0.10);
     };
     beforeEach(module(alias,obj,func))*/

    beforeEach(module('prodApp'));

    it('products need to load data to scope from product services', function () {
        module({
            'categoryService': {
                getCategoryService: function () {
                    return {1: 'Coke', 2: 'Choco'};

                }
            }
        });
        module(function($provide) {
            $provide.service('productService', function (categoryService) {
                return {
                    getProducts: function () {
                        var categories = categoryService.getCategoryService();
                        return [{categoryId: '1', name: 'Pizza', categoryName: categories[2]}];
                    }
                };
            });
        });
        var $controller;
        inject(function(_$controller_) {
            $controller = _$controller_;
        });
        var $scope={};
        var bindings = {foo:'bar'};
        //var controller = $controller('ProdController', {$scope: $scope});
        var controller = $controller(function inlineController($scope,productService)
        {
            expect(this.data).toEqual(bindings);
          $scope.products = productService.getProducts();
        },{$scope: $scope},{data:bindings});
       // $scope.load();
        expect($scope.products).toEqual([{categoryId: '1', name: 'Pizza', categoryName: 'Choco'}]);
    });

});

