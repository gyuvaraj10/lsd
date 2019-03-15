var booksModule = angular.module('books');

var bookSearch = function ($http, $q) {

    this.getBooks = function () {
        return $http.get('http://localhost:8080/accounts/fixed-savers').then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error;
        });
    };

};

booksModule.service('bookSearch',['$http', '$q', bookSearch]);
