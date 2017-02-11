var booksModule = angular.module('books');

var bookSearch = function ($resource, $q) {

    var Search = $resource('/books/search/:query', {query: '@query'});
    // var Search = $resource('/books/search');

    this.getBooks = function (searchString) {
        //var promises = Search.query({query:searchString}).$promise;
        var promise = Search.query({query:searchString}).$promise;
        return new Promise(function (resolve, reject) {
            promise.then(function (response) {
                console.log(response);
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
