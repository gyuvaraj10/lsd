var express = require('express');
var router = express.Router();
var API_KEY = "AIzaSyAqYUkXmk0PEEX5_9A02FVkee5aBo7RJIk";

var booksS = require('google-books-search');
var options = {
    key: API_KEY,
    field: 'title',
    offset: 0,
    limit: 40,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};

router.get('/search/:query', function (req, res) {
    var query = req.params.query;
    var promise = new Promise(function (resolve, reject) {
        booksS.search(query,  options, function(error, results, apiResponse) {
            if (!error) {
                resolve(results);
            } else {
                reject(error);
            }
        });
    });
    promise.then(function (response) {
        res.status(200).send(response);
    }).catch(function (error) {
        res.status(400).send(error);
    });
});

module.exports = router;