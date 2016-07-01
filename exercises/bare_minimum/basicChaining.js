/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pc = require('./promiseConstructor.js');
var pf = require('./promisification.js');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return pc.pluckFirstLineFromFileAsync(readFilePath)
    .then(pf.getGitHubProfileAsync)
    .then(profile => {
      fs.writeFileSync(writeFilePath, JSON.stringify(profile), 'utf8');
    })
    .catch(err => {
      console.log(err);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
