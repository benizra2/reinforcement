'use strict';

const express = require('express');
const app = express();
const pg = require('pg');
const PORT = 3000;
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const articleController = require('./articleController.js');
const articleModel = require('./articleModel.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const connection = new Sequelize('postgres://wlytbnbn:4RbYkLvPArqr1Q3miyfgvVWUCC7D4Rew@pellefant.db.elephantsql.com:5432/wlytbnbn', {
  dialect: 'postgres'
});

connection.sync().then(() => {
  console.log('sync done');
})

app.get('/readArticle', articleController.readArticle);
app.post('/createArticle', articleController.createArticle);
app.post('/updateArticle', articleController.updateArticle);
app.post('/deleteArticle', articleController.deleteArticle);

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));


