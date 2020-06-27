var test = require('tape');
var path = require('path');

test.createStream().pipe(process.stdout);

process.argv.slice(2).forEach(function (file) {
    require(path.resolve(file));
});