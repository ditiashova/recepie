angular.module('reciPie')
    .service('RecipesModel', function ($http) {
        let service = this;
        let cuisines = [
            {name: 'English'},
            {name: 'French'},
            {name: 'American'},
            {name: 'Italian'},
            {name: 'Greek'}
        ];
        let statuses = [
            {name: 'To Do'},
            {name: 'To Serve'},
            {name: 'In Process'},
            {name: 'To Shop'},
            {name: 'Utilize'}
        ];
        let recipes = [{
                "id": "1",
                "title": "Scrambled Eggs",
                "status": "To Do",
                "cuisine": "English",
                "description": "Scrambled eggs is a dish made from whites and yolks of eggs (usually chicken eggs) stirred or beaten together in a pan while being gently heated, typically with salt and butter and variable other ingredients.",
                "time": "10 minutes",
                "cook": "Chief D.McCallen"
            }, {
                "id": "2",
                "title": "French fries",
                "status": "To Serve",
                "cuisine": "American",
                "description": "French fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars. ",
                "time": "5 minutes",
                "cook": "Monica B. Hoff"
            }, {
                "id": "3",
                "title": "Pizza Margherita",
                "status": "In Process",
                "cuisine": "Italian",
                "description": "Pizza Margherita",
                "time": "30 minutes",
                "cook": "Chief D.McCallen"
            }];
        service.allRecipes = function () {
            return recipes;
        };
        service.allCuisines = function () {
            return cuisines;
        };
        service.allStatuses = function () {
            return statuses;
        };
        function successCallBack(data) {
            return data.data;
        }
        function errorCallBack(error) {
            console.log(error);
        }

    });