var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexgethank = /^\/gethankt/;    botRegexemo = /^\/emotim/;      botRegexanimeisbad = /^\/woah/;     botRegexdoyou = /^\/smoke/;    
      botRegexfedorabot = /^\/fedorabot/;    botRegextrump1 = /^\/make/;    botRegextrump2 = /^\/small/;    botRegexhowtrump = /^\/how?/;
      botRegexdankmeme = /^\/dankmeme/;    botRegexnondankmeme = /^\/nondankmeme/;    botRegeximtriggered = /^\/imtriggered/;
      botRegexgoopply = /^\/goopply/;   botRegextrig = /^\/triggered/;   botRegexdank = /^\/dank/;   botRegexmeme = /^\/meme/;
      botRegexandrew = /^\/andrew/;   botRegexdick = /^\/dick/;   botRegexfap = /^\/fap/;   botRegexdep = /^\/depression/;
      botRegexnb = /^\/nb/;   botRegextrump = /^\/trump/;   botRegexbernie = /^\/bernie/;   botRegexfamily = /^\/family/;
      botRegexdecoy = /^\/decoy/;   botRegexcole = /^\/cole/; botRegextip = /^\/tip/;   botRegexgog = /^\/google/i;
      botRegextrev = /^\/trevor/;  botRegexsex = /^\/sex/;   botRegextygr = /^\/tygr/;   botRegexlike = /^\/like/;
      botRegexswag = /^\/swag/;   botRegextim = /^\/tim/;   botRegexhelp = /^\/help/;   botRegexhigh = /^\/high/;
      botRegex420 = /^\/420/;  botRegexkill = /^\/kill/;  botRegexhank = /^\/hank/;  botRegexLuke = /^\/luke/
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/ayy/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
    else if(request.text && botRegexanimeisbad.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I'm high as fuck.");
    this.res.end();
    } 
    else if(request.text && botRegexdoyou.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Weed everyday");
    this.res.end();
  } 
    else if(request.text && botRegexemo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://data.whicdn.com/images/20890190/large.png");
    this.res.end();
  } 
    else if(request.text && botRegexgethank.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://scontent.cdninstagram.com/hphotos-xfa1/l/t51.2885-15/s306x306/e15/10986116_928464173853919_754618097_n.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexhowtrump.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Weed weed weed weeeeeeeeeeeeeed");
    this.res.end();
  } 
    else if(request.text && botRegextrump2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("loan of weed");
    this.res.end();
  } 
    else if(request.text && botRegextrump1.test(request.text)) {
    this.res.writeHead(200);
    postMessage("WEEED");
    this.res.end();
  } 
    else if(request.text && botRegexfedorabot.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.ytimg.com/vi/a3JE3S1yzp8/maxresdefault.jpg");
    this.res.end();
  } 
    else if(request.text && botRegeximtriggered.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/12543347_1618618608188393_102376252_n.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexnondankmeme.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/newsfeed/000/499/656/6c7.png");
    this.res.end();
  } 
    else if(request.text && botRegexdankmeme.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/42/8b/ab/428babc841b79e120b2ae2b93555ef79.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexmeme.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://420singles.com/wp-content/uploads/alpaca-bowl-weed-meme.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdank.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://49.media.tumblr.com/47ff793cb7ba158d4b7a663baf7ef0af/tumblr_ntlt2vsmPx1rmy8suo1_400.gif");
    this.res.end();
  } 
    else if(request.text && botRegextrig.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://scontent.cdninstagram.com/t51.2885-19/s150x150/10817636_464583063740570_576118681_a.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexgoopply.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://fastweedonline.com/images/bud_weed_nanette_gonzalez_law.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdep.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://honestmarijuana.com/wp-content/uploads/2015/12/Marijuana-And-Depression_6.gif");
    this.res.end();
  } 
    else if(request.text && botRegexfap.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://gurukalehuru.files.wordpress.com/2012/04/happy-420-girls-smoking-pot-331.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdick.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://26.media.tumblr.com/tumblr_lstu8hWzuK1qffvh2o1_500.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexandrew.test(request.text)) {
    this.res.writeHead(200);
    postMessage("hhttp://stonerschematics.com/wp-content/uploads/2012/02/Jesus-Weed.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexfamily.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://c8.staticflickr.com/9/8460/8044628759_aa1044d552_z.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexbernie.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Ra6DYR4.png");
    this.res.end();
  } 
    else if(request.text && botRegextrump.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.ytimg.com/vi/QU0DgX1-Wh4/hqdefault.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexnb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.youtube.com/nerdbarrel");
    this.res.end();
  } 
    else if(request.text && botRegextip.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://images.bigcartel.com/bigcartel/product_images/156368998/max_h-1000+max_w-1000/gsdgsd.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexcole.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://space1026.com/wp-content/uploads/2013/04/420ndzws06-560x420.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdecoy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn42.picsart.com/182513090001201.png?r640x640");
    this.res.end();
  } 
    else if(request.text && botRegexlike.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/4a/b6/5b/4ab65b6a85ea79b4267f7f178df5fb10.jpg");
    this.res.end();
  } 
    else if(request.text && botRegextygr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://41.media.tumblr.com/4a9a402a1b41f2712c242394259b1952/tumblr_myu6e9MSih1spltqco1_500.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexsex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://38.media.tumblr.com/af1cc3c25c9da94edf8009a891ca2f82/tumblr_inline_o2kal18QmO1tg8kf9_500.gif");
    this.res.end();
  } 
    else if(request.text && botRegextrev.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://static.seattletimes.com/wp-content/uploads/2015/04/62cd177e-e7bc-11e4-95e4-5b813b50dde0-1020x718.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexhigh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/69/01/20/690120918b33134d3dbc313b184d0929.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexhelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("**Only Active for 4/20/2016 ** List of commands for WeedBot.**  /woah: /smoke: /emotim: /gethankt: /make: /small: /swag: /fedorabot: /imtriggered: /dankmeme: /nondankmeme: /meme:  /dank:  /triggered: /goopply: /depression: /fap: /dick: /420: /cool guy: /hank: /tim: /luke: /ayy: /trevor: /tygr: /sex: /like: /decoy: /cole: /bernie: /trump: /andrew: /family: /twitch then enter channel name: /google then+what+you+want+to+search+with+like+this.**"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegextim.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.ytimg.com/vi/_YpdEGgaapk/maxresdefault.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexswag.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://image.blingee.com/images19/content/output/000/000/000/7c6/782790153_983236.gif");
    this.res.end();
  } 
  else if(request.text && botRegexLuke.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.ozbongs.com.au/images/D/IMG_9642.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexhank.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/NdHzqcS.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexkill.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.420magazine.com/gallery/data/513/dscf0123.jpg");
    this.res.end();
  }  
  else if(request.text && botRegex420.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://45.media.tumblr.com/dd8f874a7cb85709241b36a5dd0af35b/tumblr_o13ju4zgXD1uaoj9mo1_500.gif");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ma32/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://northernutahturf.com/images/fertilization.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("lmao");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ma32/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/ma32/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexgog.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.google.com/#q="+request.text.substring(8,request.text.length));
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(?)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

}

exports.respond = respond;
