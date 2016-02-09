describe('Category service',function()
{
    var service;
    //Using the string alias form to register module
    beforeEach(module('prodApp.service'));
    //Using the object form to register module
    beforeEach(inject(function getDependencies(categoryService)
    {
        service=categoryService;
    }));
    it('getCategoryService should not be null',function()
    {
        expect(service.getCategoryService()).not.toBe(null);
    });
    it('getCategories should return the expected categories',function()
    {
        expect(service.getCategoryService()).toEqual({1:'coffee1',2:'coffee2'});
    });

});