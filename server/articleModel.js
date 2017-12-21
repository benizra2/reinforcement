const Sequelize = require('sequelize');
const connection = new Sequelize('postgres://wlytbnbn:4RbYkLvPArqr1Q3miyfgvVWUCC7D4Rew@pellefant.db.elephantsql.com:5432/wlytbnbn', {
  dialect: 'postgres'
});

let Article = connection.define('article', {
  title: {type: Sequelize.STRING, unique: true},
  body: {type: Sequelize.TEXT}
})

module.exports = Article;