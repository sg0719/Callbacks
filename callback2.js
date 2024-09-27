var fs = require('fs');

fs.readFile('hello.txt', function (err, data) {
    if (err) {
        console.error('can\'t open the file');
    }
    console.log(data.toString());
});

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
