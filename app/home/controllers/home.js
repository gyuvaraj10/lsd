var module = angular.module('myApp');

var laranerdsController = function ($scope, bookSearch) {


    $scope.searchForBooks = function () {
        bookSearch.getBooks($scope.searchQuery).then(function(response){
            var bookArray = [{}];
            var total = response.length;
            var start = 0;
            var end = 4;
            if(total > 4){
                while(end < response.length){
                    var items = response.slice(start, end);
                    bookArray.push({books:items});
                    start = end;
                    end = start+4;
                }
            } else {
                bookArray.push({books: response});
            }
            $scope.shelfs = bookArray;
            $scope.$apply();
        });
    };
};

module.controller('LaranerdsHome', ['$scope','bookSearch', laranerdsController]);