var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexgethank = /^\/gethankt/;    botRegexemo = /^\/emotim/;      botRegexanimeisbad = /^\/animeisnotreal/;     botRegexdoyou = /^\/doyou/;    
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
    postMessage("Anime isn't real you fucking losers. Save your love for the real world. Stop acting like anime is real or better then real life. You're going to be sad and alone if you do nothing but watch anime. Nothing wrong with being antisocial but damn. Some of you weebs take everything too far. Why're you collecting foreign weapons you don't know how to use? That's red flaggy. Put you on a watch list when your clumsy ass sloppily cuts up your grandma cause she wouldn't buy you your narutos. Life is stressful, life is hard.");
    this.res.end();
    } 
    else if(request.text && botRegexdoyou.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Do you honestly think you're fucking funny, fucking with my friends? Seriously, you're a fucking ugly little cunt mate, and if I ever see you i'm gunna slit your fucking face wide open yeh? You're a fucking angry little fucking spastic. OK, right, let’s, first off, uhh you’re seventeen so you’re not even old enough to play the game, you’re from Scotland not Nigeria and you annoy people and put them on YouTube ‘cos you’re a cunt, which I totally agree with. So why don’t you crawl back up your mum’s fanny and die? Right, I’ll tell you what, you fat little cunt, you’re borin’ you don’t sound Nigerian at all so go fuck yourself.");
    this.res.end();
  } 
    else if(request.text && botRegexemo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/q2d8a7S.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexgethank.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/mK4YAIj.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexhowtrump.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Visit my campaign site: http://www.donaldjdrumpf.com");
    this.res.end();
  } 
    else if(request.text && botRegextrump2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("loan of a million dollars");
    this.res.end();
  } 
    else if(request.text && botRegextrump1.test(request.text)) {
    this.res.writeHead(200);
    postMessage("America Great Again!");
    this.res.end();
  } 
    else if(request.text && botRegexfedorabot.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/iO5Jk8S.png");
    this.res.end();
  } 
    else if(request.text && botRegeximtriggered.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.thedailytouch.com/2015/05/933.gif");
    this.res.end();
  } 
    else if(request.text && botRegexnondankmeme.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.memecdn.com/tootie-from-fairly-odd-parents_o_1230182.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdankmeme.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.memecdn.com/dun-dun-ddddunnnnnn_o_1240295.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexmeme.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.memecdn.com/fairly-odd-parents_o_1330033.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdank.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://41.media.tumblr.com/76770885cab4b49306470231ccac882a/tumblr_n9v3p5pWPE1rgeqm5o1_500.jpg");
    this.res.end();
  } 
    else if(request.text && botRegextrig.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.memecdn.com/uh-oh_o_4457687.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexgoopply.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://vignette2.wikia.nocookie.net/fairlyoddparents/images/8/84/ShelfLife240.png/revision/latest?cb=20110307232622&path-prefix=en");
    this.res.end();
  } 
    else if(request.text && botRegexdep.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Xn3ZVJT.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexfap.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/RMcqL7i.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdick.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.tumblr.com/tumblr_ll8ztmGiG51qafrh6.gif");
    this.res.end();
  } 
    else if(request.text && botRegexandrew.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/raWW699.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexfamily.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Lt8K0Vf.png");
    this.res.end();
  } 
    else if(request.text && botRegexbernie.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/iNxUdbk.png");
    this.res.end();
  } 
    else if(request.text && botRegextrump.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/ipEA6CH.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexnb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.youtube.com/nerdbarrel");
    this.res.end();
  } 
    else if(request.text && botRegextip.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/oPnRrh6.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexcole.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/dO3FkKq.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexdecoy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/5mlybBD.png");
    this.res.end();
  } 
    else if(request.text && botRegexlike.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/hAUvd4o.jpg");
    this.res.end();
  } 
    else if(request.text && botRegextygr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://data.whicdn.com/images/9730936/original.png");
    this.res.end();
  } 
    else if(request.text && botRegexsex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/media/Bc7qQnKCQAAy_LJ.jpg");
    this.res.end();
  } 
    else if(request.text && botRegextrev.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/pXNXevz.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexhigh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/8cAfHcZ.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexhelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("**List of commands for FurrBot.**  /animeisnotreal: /doyou: /emotim: /gethankt: /make: /small: /swag: /fedorabot: /imtriggered: /dankmeme: /nondankmeme: /meme:  /dank:  /triggered: /goopply: /depression: /fap: /dick: /420: /cool guy: /hank: /tim: /luke: /ayy: /trevor: /tygr: /sex: /like: /decoy: /cole: /bernie: /trump: /andrew: /family: /twitch then enter channel name: /google then+what+you+want+to+search+with+like+this: **Message Tim to add more commands.**"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegextim.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/wmQyjlr.png");
    this.res.end();
  } 
  else if(request.text && botRegexswag.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Fs0cqj0.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexLuke.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/media/CRhm6MPUwAAoh66.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexhank.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/NaTfjHL.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexkill.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.ytimg.com/vi/oIgYIDQPAtI/hqdefault.jpg");
    this.res.end();
  }  
  else if(request.text && botRegex420.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/UkO6Y0v.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ma32/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/w13Rad8.jpg");
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
