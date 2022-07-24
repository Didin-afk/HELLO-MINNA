__path = process.cwd()
//var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creator = "HADIR_HMM"
var neoxr = "yntkts"
var zeks = "administrator"
var zeks2 = "apivinz"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var Dither = require('canvas-dither');
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var tebakGambar = require('./../lib/utils/tebakGambar');

var { TiktokDownloader } = require('../lib/tiktokdl.js')
var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./../lib/anjay");

var {
  igStalk,
  igDownloader
} = require("./../lib/utils/igdown");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var {
  fbDownloader,
  fbdown2
} = require('./../lib/utils/fbdl');
var {

	Searchnabi,
	Imagesearch,

	Gempa
} = require('./../lib');

var {
	Vokal,
	
	
	Base
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";


loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'Apikey??? Contact Me On WhatsApp'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey??? Contact Me On WhatsApp'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

const listkey = ["HADIR_HMM"];
//router.use(favicon(__path + "/views/logo.ico"));

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------ZahirGanteng'+'ZHIRRR--GANS';


router.get('/moviestory/cerpen', async (req, res, next) => {

        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != `${listkey}`)  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/cerpen`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/downloader/tiktok3', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/stalking/tiktok', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomtext/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/searching/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/tinyurl', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/entertainment/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/canvas/nulis?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/islami/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (listkey.includes(apikeyInput)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/entertainment/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/islami/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/randomtext/pahlawannasional', async (req, res, next) => {
  var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://indonesia-public-static-api.vercel.app/api/heroes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'HADIR_HMM',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/islami/randomquran', async (req, res, next) => {
  var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran-complete.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'HADIR_HMM',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/islami/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
       fetch(encodeURI(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surah}.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/downloader/pinterest', async(req, res, next) => {

  const apikey = req.query.apikey;

  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/pinterest?q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/searching/pinterest', async(req, res, next) => {



  const apikey = req.query.apikey;

  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/pinterest?q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/facebook3', async (req, res, next) => {

        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       FB(url)
       .then((data) => {
         res.json({
           status: true,
           code: 200,
           creator: `${creator}`,
           title: data.title,
           desc: data.deskripsi,
           durasi: data.durasi,
           thumb: data.thumbnail,
           result: data.hd
         })
       });
} else {
res.json(loghandler.invalidKey)
}
});

router.get('/downloader/facebook2', async (req, res, next) => {

  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
       fbDownloader(`${url}`)
       .then((result) => {
            res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/downloader/facebook', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/islami/tahlil', async (req, res, next) => {
  var apikeyInput = req.query.apikey

		if(!apikeyInput) return res.json(loghandler.notparam)

	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)


       fetch(encodeURI(`https://raw.githubusercontent.com/Didin-afk/database/main/Tahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 data
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomimage/listphoto', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Didin-afk/database/main/list.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/islami/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/akuhantu/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/islami/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/akuhantu/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/islami/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/akuhantu/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/islami/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/akuhantu/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/islami/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
        shalat= req.query.shalat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/akuhantu/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/entertainment/tts', async(req, res, next) => {


const bahasa = req.query.bahasa;
  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  if(!bahasa) return res.json('MASUKAN PARAMETER BAHASA')
  
  if(listkey.includes(apikey)) {
  let hasil = `http://hadi-api.herokuapp.com/api/tts?language=${bahasa}&text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tts.mp3', data)
  res.sendFile(__path +'/tmp/tts.mp3')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/entertainment/tts', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = JSON.parse(fs.readFileSync(__path +'/lib/canvas-dither.js'));
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/canvas-dither.png', data)
  res.sendFile(__path +'/tmp/canvas-dither.png')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/canvas/tololserti', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
 
  if(listkey.includes(apikey)) {
  let hasil = `https://tolol.ibnux.com/img.php?nama=${text}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tololserti.jpg', data)
  res.sendFile(__path +'/tmp/tololserti.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/entertainment/tts', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = JSON.parse(fs.readFileSync(__path +'/lib/canvas-dither.js'));
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/canvas-dither.png', data)
  res.sendFile(__path +'/tmp/canvas-dither.png')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimage/searchphoto', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            q = req.query.q

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(!q) return res.json('masukan parameter q')
  if(listkey.includes(apikeyInput)) {

  const allphoto = JSON.parse(fs.readFileSync(__path +`/data/${q}.json`));
  const randallphoto = allphoto[Math.floor(Math.random() * allphoto.length)];
  data = await fetch(randallphoto).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/allphoto.jpg', data)
  res.sendFile(__path +'/tmp/allphoto.jpg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/searching/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomtext/islami', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/moviestory/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/entertainment/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/searching/liriklagu', async (req, res, next) => {

        var Apikey = req.query.apikey,

            lagu = req.query.query;
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json(loghandler.notquery)
        Lirik(lagu)
        .then((lirik) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: lirik.data
          })
        });
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/searching/liriklagu2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter lagu"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/lirik?search=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/searching/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/islami/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/entertainment/listbahasa', async (req, res, next) => {

        var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {

	listbahasa = JSON.parse(fs.readFileSync(__path +'/data/bahasa.json'));
	res.json(listbahasa)
} else {
res.json(loghandler.invalidKey)
}
})
// game
router.get('/games/tebakGambar', async (req, res, next) => {
          var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
  } else {
  res.json(loghandler.invalidKey)
  }
})
router.get('/games/tebakkalimat', async (req, res, next) => {
            var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)

  if(listkey.includes(apikeyInput)) {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkalimat.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/games/tebakkata', async (req, res, next) => {
            var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkata.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/games/tebakjenaka', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)

  if(listkey.includes(apikeyInput)) {
        var pertanyaan = JSON.parse(
            fs.readFileSync(__path + '/data/tebakjenaka.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...pertanyaan[~~(Math.random() * pertanyaan.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/games/tebakkimia', async (req, res, next) => {
            var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {
        var nama = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkimia.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...nama[~~(Math.random() * nama.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/games/tebaklirik', async (req, res, next) => {
            var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {
        var question = JSON.parse(
            fs.readFileSync(__path + '/data/tebaklirik.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...question[~~(Math.random() * question.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/games/tebakchara', async (req, res, next) => {
            var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {
        var name = JSON.parse(
            fs.readFileSync(__path + '/data/tebakchara.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...name[~~(Math.random() * name.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/games/tebaktebakan', async (req, res, next) => {
            var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)

  if(listkey.includes(apikeyInput)) {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebaktebakan.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})
router.get('/games/caklontong', async (req, res, next) => {
            var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)

  if(listkey.includes(apikeyInput)) {
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/games/tebakbendera', async (req, res, next) => {
                var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)

  if(listkey.includes(apikeyInput)) {
        var bendera = JSON.parse(
            fs.readFileSync(__path + '/data/tebakbendera.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...bendera[~~(Math.random() * bendera.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/games/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/family100.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})
// and game
router.get('/randomtext/katabijak', async (req, res, next) => {

        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/katabijak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomtext/faktaunik', async (req, res, next) => {

        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

              fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/faktaunik`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomtext/pantun', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/pantun`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/searching/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/searching/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/infocuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    provinsi = req.query.provinsi
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
	if(!provinsi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter provinsi"})
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/${provinsi}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/infocuaca/bandara', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/searching/emoji', async(req, res, next) => {

              var apikeyInput = req.query.apikey;

const Emoji = req.query.text;

  if(!apikeyInput) return res.json(loghandler.notparam)
if(!Emoji) return res.json(loghandler.nottext)
  if(listkey.includes(apikeyInput)) {
    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});



router.get('/entertainment/infocuaca/dunia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/infotsunami', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})





router.get('/randomtext/quoteskanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/entertainment/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/animanga/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/randomtext/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/animanga/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/randomimage/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/game/asahotak', async (req, res, next) => {
  var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/inirey/database/master/games/asahotak.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'HADIR_HMM',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomtext/bucin', async (req, res, next) => {
  var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Didin-afk/database/main/bucin.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'HADIR_HMM',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/randomimage/renungan', async (req, res, next) => {

          var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {

const renungan = JSON.parse(fs.readFileSync(__path +'/data/renungan.json'))
const randrenungan = renungan[Math.floor(Math.random() * renungan.length)]
//tansole.log(randLoli)
data = await fetch(randrenungan).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/renungan.jpg', data)
res.sendFile(__path +'/tmp/renungan.jpg')
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/games/truth', async (req, res, next) => {

  var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Didin-afk/database/main/truth.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'HADIR_HMM',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/games/dare', async (req, res, next) => {

  var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Didin-afk/database/main/dare.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'HADIR_HMM',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/searching/cnn', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/searching/cnbc', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/searching/republika', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/moviestory/filmapik', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/moviestory/filmapikkategori', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/moviestory/filmapikplay', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            id = req.query.id
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!id) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/moviestory/filmapikterbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/searching/lk21', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/moviestory/lk21', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/moviestory/lk21terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/image-to-sticker', async (req, res, next) => {
        const apikeyInput = req.query.apikey;
        const type = req.query.type;
        const url = req.query.url;
        
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter utl"})
	
  
  if(listkey.includes(apikeyInput)) {
  let hasil = `https://hadi-api.herokuapp.com/api/converter/ezgif-with-url/${type}-to-webp?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/image.png', data)
  res.sendFile(__path +'/tmp/image.png')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/randomimage/darkjokes', async (req, res, next) => {
            var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)

  if(listkey.includes(apikeyInput)) {

  const Shota = JSON.parse(fs.readFileSync(__path +'/data/darkjokes.json'));
  const randShota = Shota[Math.floor(Math.random() * Shota.length)];
  data = await fetch(randShota).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/darkjokes.jpg', data)
  res.sendFile(__path+ '/tmp/darkjokes.jpg');
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/randomimage/dadu', async (req, res, next) => {
              var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)

  if(listkey.includes(apikeyInput)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  
  } else {
    res.json(loghandler.invalidKey)
  }
})
//photooxy


router.get('/textprome/logo-wolf', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/natural-leaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/logo-wolf2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/harry-potter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/magma', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/hallowen-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/neon-light', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/broken-glass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/art-papper', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/glossy', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/water-color', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/multi-color', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/neon-devil', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/sky-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/luxury', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/vintage', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/writing', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/engraved', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/glue-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/minios', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/pornhub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/holograpic', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/deluxe-silver', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/fabric', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/wicker', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/wicker-text-effect-online-932.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/larva', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/lava-text-effect-online-914.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/toxic-bokeh', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/stroberi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/strawberry-text-effect-online-889.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/koi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/koi-fish-text-effect-online-888.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/bread', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/bread-text-effect-online-887.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/horor-blood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/honey', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/honey-text-effect-868.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/ice', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/ice-cold-text-effect-862.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/rusty', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/rusty-metal-text-effect-860.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/3dstone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/1917', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/thunder2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/space', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/blue-circuit', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/joker-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-joker-online-934.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/hallowen', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/blood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/green-horror', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/embossed', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/sketch-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
 
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
 
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/astone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/grafity-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/grafity-text2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/glitch-text-effects', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/ninja-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-ninja-logo-online-935.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/lion-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/avengers-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/marvel-logo2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/marvel-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/glitch', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/glitch-tik-tok', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/logo-wolf3', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/logo-wolf4', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/thunder', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/thunder-text-effect-online-881.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/black-pink', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textprome/eroded-metal', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/eroded-metal-text-effect-834.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/neon-light2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/drop-water', async(req, res, next) => {



  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/christmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/3d-gradient', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textprome/3d-sci-fi', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/textprome/captain', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
//end photooxy
router.get('/downloader/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/downloader/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/downloader/ytplaymp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});

router.get("/downloader/ytplaymp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});


router.get('/downloader/ytsearch', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});
router.get('/searching/ytsearch', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});
router.get('/downloader/tiktok2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://tiktokd.herokuapp.com/tiktok?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.link;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/downloader/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     TiktokDownloader(`${url}`)
        .then(data => {
        var result = data.result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
               result
             })
         })
         .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});

router.get('/downloader/ig', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igDownloader(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/downloader/ig2', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igdl(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/downloader/stickerline', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/stickerline?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/searching/sticker', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/searchsticker?apikey=bangmimma&q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.sticker;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/smule', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://mnazria.herokuapp.com/api/smule?link=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/joox', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/joox?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/joox2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://mnazria.herokuapp.com/api/jooxnich?search=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.lirik;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/searching/joox', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://mnazria.herokuapp.com/api/jooxnich?search=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.lirik;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/apkdl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-download?dl_url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/apk-search', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-search?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/downloader/mediafire', async(req, res, next) => {

  const apikey = req.query.apikey;

  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/mediafire?apikey=bangmimma&url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/downloader/googleimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/googleimage?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/searching/playstore', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-gplay.azharimm.site/apps?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/searching/google', async(req, res, next) => {

  const apikey = req.query.apikey;

  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/googleimage?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalking/instagram', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/stalking/github', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})

       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/stalking/ig2', async(req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});


router.get('/stalking/npm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/canvas/wanted', async (req, res, next) => {
  const apikey = req.query.apikey;

  const url = req.query.url;
  if(!apikey) return res.json(loghandler.notparam)
  if(!url) return res.json('masukan parameter url')
  if(listkey.includes(apikey)){

  let hasil = `https://hadi-api.herokuapp.com/api/canvas/wanted?url=${url}`

  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/wanted.png', data)
        res.sendFile(__path+'/tmp/wanted.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/stalking/repository', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != `${listkey}`) return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan nama repository yang ingin kamu cari"})

       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'hadir_hmm',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


module.exports = router
