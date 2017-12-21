const Article = require ('./articleModel.js');
// const Sequelize = require('sequelize');
// const connection = new Sequelize('postgres://wlytbnbn:4RbYkLvPArqr1Q3miyfgvVWUCC7D4Rew@pellefant.db.elephantsql.com:5432/wlytbnbn', {
//   dialect: 'postgres'
// });
module.exports = {
  createArticle(req, res) {
    console.log('this is req.body', req.body);
      Article.create({
        'title': req.body.title,
        'body': req.body.body
      })
      res.send("It's saved!")
  },
  readArticle(req, res) {
    Article.findAll({})
      .then(function(articles) {
        console.log("select_data: " + JSON.stringify(articles));
        res.json(articles);
      })
  },
  updateArticle(req, res) {
    Article.findOne({where: req.body.where})
      .then(article => {
        return article.updateAttributes(req.body.updates)
      })
      .then(updatedArticle => {
        console.log('updated!!!')
        res.json(updatedArticle);
      });
  },
  deleteArticle(req, res) {
    Article.destroy({where: req.body.where
    }).then(function(rowDeleted) {
      if (rowDeleted === 1) {
        console.log('this is about to be deleted', );
      }
    })
  }
}