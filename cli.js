#!/usr/bin/env node
var run = require('./App'),
{execSync} = require('child_process')
select = require('cli-select'),
chalk = require('chalk');
(async () => {
var opts = [],
data = run();
data.map(src => opts.push(src[0]))
var ans = await select({values: opts});
console.log(execSync(data[ans.id][1]).toString())
})();
