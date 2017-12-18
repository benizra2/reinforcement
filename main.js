const express = require('express');
const app = express();
const pg = require('pg');
const conString = process.env.ELEPHANTSQL_URL || 'postgres://wlytbnbn:4RbYkLvPArqr1Q3miyfgvVWUCC7D4Rew@pellefant.db.elephantsql.com:5432/wlytbnbn';
const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: 2017-12-18T21:17:27.347Z;
    client.end();
  });
});


