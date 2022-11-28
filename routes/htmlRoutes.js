const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get('/exercise', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get('/stats', (req, res) => {
  console.log("stats __dirname", __dirname)
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get('/schedule', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


module.exports = router;