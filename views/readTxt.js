exports.readTxt = function () {
    fs.readFile('./request.txt', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data * 1
        content++;
        fs.write('request.txt', content, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        console.log(content);
    });
}