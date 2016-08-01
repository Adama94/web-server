var express = require('express');
var router = express.Router();
var fs = require('fs');
var content = fs.readFileSync(__dirname + '/../public/descriptions.json');
var contents = JSON.parse(content);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AdamAbdulhamid.com' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/229', function(req, res, next) {
  res.render('project', {title: 'CS229 Class Project (Machine Learning)', pdf: 'CS229.pdf', description: contents.cs229});
});

router.get('/224w', function(req, res, next) {
  res.render('project', {title: 'CS224W Class Project (Social Network Analysis)', pdf: 'CS224w.pdf', linkToCode: 'https://github.com/ethanyishchan/siliconvalleyanalysis', description: contents.cs224w});
});

router.get('/221', function(req, res, next) {
  res.render('project', {title: 'CS221 (Intro to Artifical Intelligence)', linkToCode: 'https://github.com/Adama94/fantasy-football', description: contents.cs221});
});

router.get('/DowJones', function(req, res, next) {
  res.render('project', {title: 'Dow Jones stock project', linkToCode: 'https://github.com/Adama94/DowJones', description: contents.dowjones});
});

module.exports = router;
