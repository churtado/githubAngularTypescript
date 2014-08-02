/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

interface gitHubScope extends ng.IScope {
    user: Object;
    error: string;
    message: string;
}

var githubModule = angular.module("githubModule", []);

class MainController {

    constructor($scope:gitHubScope, $http:ng.IHttpService) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        }

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        $http.get("https://api.github.com/users/robconery")
            .then(onUserComplete, onError);

        $scope.message = "Github example using $http and promises";

    }

}

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