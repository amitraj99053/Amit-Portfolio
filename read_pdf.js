const fs = require('fs');
const pdf = require('./backend/node_modules/pdf-parse');

let dataBuffer = fs.readFileSync('Amit Kumar Resume AI.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(console.error);
