/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

interface gitHubScope extends ng.IScope {
    user: any;
    error: string;
    message: string;
    username: string;
    repos: any;
    search(username: string);
    repoSortOrder: string;
}

var githubModule = angular.module("githubModule", []);

class MainController {

    constructor($scope:gitHubScope, $http:ng.IHttpService) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        }

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
        }

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        }

        $scope.username = "angular";
        $scope.message = "Github example using $http and promises";
        $scope.repoSortOrder = "-stargazers_count";
    }

}

githubModule.controller("mainController", MainController);