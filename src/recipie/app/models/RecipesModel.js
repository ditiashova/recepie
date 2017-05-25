let commonModule = angular.module('Recipe.Common', []);

commonModule.service('RecipesModel', function ($http) {
        let service = this;
        service.all = function () {
            $http.get(
                'http://localhost:63342/recepie/src/recipie/app/models/recipes.json'
            ).then(successCallBack, errorCallBack);
        };
        function successCallBack(data) {
            console.log(data);
            return data.data;
        }
        function errorCallBack(error) {
            console.log(error);
        }

    });