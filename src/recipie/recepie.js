const app = angular.module('recipieApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when ('/',
            {
                templateUrl: 'src/recipie/book/tmpl/recipe-book.html',
                controller: 'RecipeBookController',
                controllerAs: 'recipeBook'
            })
        .when('/recipe/new', //when pressed on Add New button
            {
                templateUrl: 'book/tmpl/edit-recipe.tmpl.html',
                controller: 'NewRecipeCtrl',
                controllerAs: 'newRecipe'
            })
        .when('/recipe/:id', //when pressed on recipe itself
            {
                templateUrl: 'book/tmpl/create-recipe.tmpl.html',
                controller: 'SingleRecipeCtrl',
                controllerAs: 'singleRecipe'
            })
        .when ('/recipe/edit/:id',
            {
                templateUrl: 'book/tmpl/edit-recipe.tmpl.html',
                controller: 'EditRecipeCtrl',
                controllerAs: 'editRecipe'
            })
        .otherwise({redirectTo: '/'})
});