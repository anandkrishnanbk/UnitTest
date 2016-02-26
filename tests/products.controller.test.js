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
        var controller = $controller('ProdController', {$scope: $scope});
        $scope.load();
        expect($scope.products).toEqual([{categoryId: '1', name: 'Pizza', categoryName: 'Choco'}]);
    });

});

