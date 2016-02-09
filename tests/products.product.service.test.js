describe('Product Service - ', function () {
    //using the string alias form to register module
    beforeEach(module('prodApp.service'));
    //using the object form to register module
    beforeEach(module({
        'categoryService': {
            getCategoryService: function () {
                return {1: 'sushi', 2: 'tofu'};
            }
        }
    }));

    var service;

    beforeEach(inject(function getDependencies(productService) {
        service = productService;

    }));
    it('category names should be appended to products', function () {

        var products = service.getProducts();
        expect(products[0].categoryName).toEqual('sushi');
        expect(products[1].categoryName).toEqual('tofu');


    });

});