var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexandrew = /^\/andrew/;
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
    else if(request.text && botRegexandrew.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/cvsdBLU.png");
    this.res.end();
  } 
    else if(request.text && botRegexfamily.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/eRJ7BVA.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexbernie.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://images6.fanpop.com/image/photos/34700000/Burnie-Burns-roosterteeth-34724396-1136-640.jpg");
    this.res.end();
  } 
    else if(request.text && botRegextrump.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.theterribletruth.org/wp-content/uploads/Screen-Shot-2015-07-08-at-11.23.21-PM.png");
    this.res.end();
  } 
    else if(request.text && botRegexnb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.youtube.com/nerdbarrel");
    this.res.end();
  } 
    else if(request.text && botRegextip.test(request.text)) {
    this.res.writeHead(200);
    postMessage("m'lady");
    this.res.end();
  } 
    else if(request.text && botRegexcole.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/844x1500.jpeg.3b3a3cc8052e4a09988ffc1f1aa0c05f.large");
    this.res.end();
  } 
    else if(request.text && botRegexdecoy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Yr7eKZk.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexlike.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/egXb2xW.png");
    this.res.end();
  } 
    else if(request.text && botRegextygr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/UC7ZaK1.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexsex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://giant.gfycat.com/UnfinishedTanIndianjackal.gif");
    this.res.end();
  } 
    else if(request.text && botRegextrev.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/0unPBeB.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexhigh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/mZrnald.png");
    this.res.end();
  } 
  else if(request.text && botRegexhelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("**List of commands for Fedora Bot.**        **/swag   /420    /cool guy    /hank    /tim    /luke    /ayy    /trevor    /tygr    /sex    /like    /decoy    /cole   /bernie     /trump      /andrew       /family**. If you wanna share a twitch.tv link type /twitch then enter channel name and bot will auto complete link. **Message Tim to add more commands.**"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegextim.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/B0UyYzo.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexswag.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/JCUUO3U.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexLuke.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/dvhWU9L.png");
    this.res.end();
  } 
  else if(request.text && botRegexhank.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/TCOKt8g.png");
    this.res.end();
  } 
  else if(request.text && botRegexkill.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3ORizZtUhUXFm/giphy.gif");
    this.res.end();
  }  
  else if(request.text && botRegex420.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/uwsxhPG9UO5FK/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ma32/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
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
