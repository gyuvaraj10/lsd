var booksModule = angular.module('books');

var bookSearch = function ($resource, $q) {

    var Search = $resource('/books/search/:query', {query: '@query'});

    this.getBooks = function (searchString) {
        var promise = Search.query({query:searchString}).$promise;
        return new Promise(function (resolve, reject) {
            promise.then(function (response) {
                var books = response.filter(function (item) {
                    return item != {};
                });
                resolve(books);
            }).catch(function (error) {
                reject(error);
            });
        });
    };

};

booksModule.service('bookSearch',['$resource', '$q', bookSearch]);
