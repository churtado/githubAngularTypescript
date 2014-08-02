/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

var githubModule = angular.module("githubModule", []);

var MainController = (function () {
    function MainController($scope, $http) {
        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url).then(onRepos, onError);
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
        };

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username).then(onUserComplete, onError);
        };

        $scope.username = "angular";
        $scope.message = "Github example using $http and promises";
        $scope.repoSortOrder = "-stargazers_count";
    }
    return MainController;
})();

githubModule.controller("mainController", MainController);
//# sourceMappingURL=app.js.map
