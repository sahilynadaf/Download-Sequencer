let fs = require('fs');
var counter = ((count = 1) => () => count++)()
let existingFiles = 0;

fs.watch('./Initial', (eventType, filename) => {

    if (eventType == 'rename' && /.mp4$/.test(filename)) {
        mainFun(counter);
    }
});

function mainFun(count) {
    check();
    fs.readdir('./Initial', function (err, files) {
        if (err) {
            console.log(err)
        } else {
            if (!files.length) {
                return
            } else {
                files.forEach((file, index) => {
                    index = existingFiles;
                    fs.rename(`./Initial/${file}`, `./Final/${index > 0 ? index +1 : count()}-${file}`, () => {

                    });
                })
            }
        }
    })
}


function check() {
    fs.readdir('./Final', function (err, files) {
        if (err) {
            console.log(err)
        } else {
            if (!files.length) {
                return;
            } else {
                existingFiles = files.length;
            }
        }
    })
}
