var module = angular.module('myApp');

var laranerdsController = function ($scope, bookSearch) {


    $scope.searchForBooks = function () {
        bookSearch.getBooks($scope.searchQuery).then(function(response){
            $scope.books = response;
            $scope.$apply();
        });
    };
};

module.controller('LaranerdsHome', ['$scope','bookSearch', laranerdsController]);