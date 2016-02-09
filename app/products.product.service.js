angular.module('prodApp.service',[]).service('productService',productService);
productService.$inject=['categoryService'];
function productService(categoryService)
{
    return{
        getProducts:function()
        {
            var products=[{categoryId:'1',name:'caffe latte'},
                {categoryId:'2',name:'cappuchino'}];

            var categories=categoryService.getCategoryService();

            products.forEach(function(p)
            {
                p.categoryName=categories[p.categoryId];
            });
            return products;
        }
    }

}