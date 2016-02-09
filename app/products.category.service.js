 angular.module('prodApp.service').service('categoryService',categoryService);
 function categoryService()
 {
     return{
       getCategoryService:function() {
            return {1:'coffee1',2:'coffee2'};
       }
     };
 }
