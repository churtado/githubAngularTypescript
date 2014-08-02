/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

var githubModule = angular.module("githubModule", []);

var MainController = (function () {
    function MainController($scope, $http) {
        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        $http.get("https://api.github.com/users/robconery").then(onUserComplete, onError);

        $scope.message = "Github example using $http and promises";
    }
    return MainController;
})();

githubModule.controller("mainController", MainController);
/*
var MainController = function ($scope, $http) {
var onUserComplete = function (response) {
$scope.user = response.data;
}
var onError = function (reason) {
$scope.error = "Could not fetch the user";
};
$http.get("https://api.github.com/users/robconery")
.then(onUserComplete, onError);
$scope.message = "Github example using $http and promises";
};
*/
//# sourceMappingURL=app.js.map
