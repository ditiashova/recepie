angular.module('reciPie')
    .controller('RecipeBookController', function (RecipesModel) {
        let recipeBook = this;
        recipeBook.editedRecipe = {};
        recipeBook.currentRecipe = null;
        recipeBook.setCurrentRecipe = function (recipe) {
            recipeBook.currentRecipe = recipe;
            recipeBook.editedRecipe = angular.copy(recipeBook.currentRecipe);
        }
        recipeBook.recipes = RecipesModel.allRecipes();
        recipeBook.cuisines = RecipesModel.allCuisines();
        recipeBook.statuses = RecipesModel.allStatuses();
    });