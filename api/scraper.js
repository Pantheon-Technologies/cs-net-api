const request = require('request');
const cheerio = require('cheerio');

request('https://github.com/orgs/CodesmithLLC/people', (err, res, html) => {
  if (!err && res.statusCode === 200) {
    const $ = cheerio.load(html);

    const membersTable = $('#org-members-table');

    console.log(membersTable.html());
  }
  else {
    console.log('Something went wrong >>>>', err);
  }
});
