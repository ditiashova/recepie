const app = angular.module('recipieApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when ('/',
            {
                templateUrl: 'src/recipie/app/cook-book.html',
                controller: 'CookBookCtrl',
                controllerAs: 'cookBook'
            })
        .when('/recipe/new', //when pressed on Add New button
            {
                templateUrl: 'board/tmpl/recipe-edit.html',
                controller: 'NewRecipeCtrl',
                controllerAs: 'newRecipe'
            })
        .when('/recipe/:id', //when pressed on recipe itself
            {
                templateUrl: 'board/tmpl/recipe.html',
                controller: 'SingleRecipeCtrl',
                controllerAs: 'singleRecipe'
            })
        .when ('/recipe/edit/:id',
            {
                templateUrl: 'board/tmpl/recipe-edit.html',
                controller: 'EditRecipeCtrl',
                controllerAs: 'editRecipe'
            })
        .otherwise({redirectTo: '/'})
}]);