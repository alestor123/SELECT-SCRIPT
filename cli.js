#!/usr/bin/env node
var run = require('./App'),
{ spawn } = require('child_process')
select = require('cli-select'),
chalk = require('chalk');
(async () => {
var opts = [],
data = run();
data.map(src => opts.push(src[0]))
var ans = await select({values: opts});
spawn('npm', ['run', data[ans.id][0]]).stdout.on('data',data => console.log(data.toString()))
})();
