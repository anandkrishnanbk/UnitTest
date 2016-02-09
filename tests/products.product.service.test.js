describe('Product Service - ',function()
{
    beforeEach(module('prodApp.service'));
    var service;
    beforeEach(inject(function getDependencies(productService)
    {
       service = productService;

    }));
    it('category names should be appended to products',function()
    {
        var products=service.getProducts();
        expect(products[0].categoryName).toEqual('coffee1');
        expect(products[1].categoryName).toEqual('coffee2');


    });

});