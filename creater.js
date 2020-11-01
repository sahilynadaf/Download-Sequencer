let fs = require('fs');

let i = 1;

function loopThrough() {
    fs.writeFileSync(`./Initial/${i}-File.mp4`);
    i++;
    if (i < 21) {
        setTimeout(loopThrough, 3000)
    }
}

loopThrough();