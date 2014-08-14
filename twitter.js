var keyword = process.argv[2];

var OAuth = require("oauth");

/*var https = require("https");

var options = {
	host : "stream.twitter.com",
	path : "/1/statuses/filter.json?track=" + keyword,
	method : "GET",
	headers : {
		"Authorization" : "Basic " + new Buffer("omarbintricks:omar.ali2014").toString("base64") 
	}
}

var request = https.request(options, function(response){
	response.on("data", function(d){
		console.log("", d.toString("utf8"));
		var tweet = JSON.parse(d);
		console.log("tweet: " + tweet.text);
	});

});

request.end();
*/
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'kWrLrMfLw4NVgyYbR0NTpAYsK',
      'iY3fASx1kLAhwApVDUGkWOHZF3cp4dPidEoZ74UpGsX4qicOdm',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
	console.log("step2");
    oauth.get(
      'https://stream.twitter.com/1.1/statuses/filter.json?track=' + keyword,
      '2719762452-CEg9qMDKpnR2d9tjx54xu11VFu6vJzvR5TnbNaM', //test user token
      'oo6DDZlflz6kqXRQQRQGCKiwtZLnxF5Yhidd5GXvJ1Jsi', //test user secret            
      function (error, data, response){
      	console.log("", data.toString("utf8"));
      	response.on("data", function(d){
		console.log("", d.toString("utf8"));
		var tweet = JSON.parse(d);
		console.log("tweet: " + tweet.text);
		});    
      });   

