var fs = require('fs'),
scripts = [];
module.exports = () => {
var data = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
for(var sr in data.scripts) scripts.push([sr,'npm run '+sr])
return scripts
}