let commonModule = angular.module('Recipie.Common', [])
    .service('RecipesModel', function ($http) {
        let service = this;
        service.all = function () {
            return $http.get()
        };

    });