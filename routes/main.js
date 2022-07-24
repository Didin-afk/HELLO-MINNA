__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
router.get('/api/textprome', (req, res) => {
    res.sendFile(__path + '/textprome.html')
})
router.get('/api/photooxy', (req, res) => {
    res.sendFile(__path + '/photooxy.html')
})
router.get('/api/canvas', (req, res) => {
    res.sendFile(__path + '/canvas.html')
})
router.get('/api/downloader', (req, res) => {
    res.sendFile(__path + '/downloader.html')
})
router.get('/api/games', (req, res) => {
    res.sendFile(__path + '/games.html')
})
router.get('/api/entertainment', (req, res) => {
    res.sendFile(__path + '/entertainment.html')
})
router.get('/api/islami', (req, res) => {
    res.sendFile(__path + '/islam.html')
})
router.get('/api/moviestory', (req, res) => {
    res.sendFile(__path + '/moviestory.html')
})
router.get('/api/randomimage', (req, res) => {
    res.sendFile(__path + '/randomimage.html')
})
router.get('/api/randomtext', (req, res) => {
    res.sendFile(__path + '/randomtext.html')
})
router.get('/api/searching', (req, res) => {
    res.sendFile(__path + '/searching.html')
})
router.get('/api/stalking', (req, res) => {
    res.sendFile(__path + '/stalking.html')
})
router.get('/api/animanga', (req, res) => {
    res.sendFile(__path + '/animanga.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/index.html')
})

router.get('/api/minigame/pingpong', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})
router.get('/api/minigame/flappybird', (req, res) => {
    res.sendFile(__path + '/views/flappybird.html')
})
router.get('/api/minigame/asahotak', (req, res) => {
    res.sendFile(__path + '/views/asahotak.html')
})

router.get('/api/minigame/puzzleangka', (req, res) => {
    res.sendFile(__path + '/views/puzzleangka.html')
})
router.get('/api/minigame/tembak-tembakan', (req, res) => {
    res.sendFile(__path + '/views/tembakan.html')
})

router.get('/api/minigame/tictactoe', (req, res) => {
    res.sendFile(__path + '/views/tictactoe.html')
})
router.get('/api/404', (req, res) => {
    res.sendFile(__path + '/views/404.html')
})
router.get('/api/minigame', (req, res) => {
    res.sendFile(__path + '/views/minigame.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'ZhirrrBot',
            namaowner: 'Zhirrr',
            instagram: 'zhirr_ajalah',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
