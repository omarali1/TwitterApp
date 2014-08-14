keyword = process.argv[2]

OAuth = require("oauth")

oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token'
      'https://api.twitter.com/oauth/access_token'
      'kWrLrMfLw4NVgyYbR0NTpAYsK'
      'iY3fASx1kLAhwApVDUGkWOHZF3cp4dPidEoZ74UpGsX4qicOdm'
      '1.0A'
      null
      'HMAC-SHA1'
    )
	console.log("step2")
	oauth.get(
		'https://stream.twitter.com/1.1/statuses/filter.json?track=' + keyword
		'2719762452-CEg9qMDKpnR2d9tjx54xu11VFu6vJzvR5TnbNaM'
		'oo6DDZlflz6kqXRQQRQGCKiwtZLnxF5Yhidd5GXvJ1Jsi'          
		(error, data, response) ->
			console.log("" + data)
			response.on("data", (d) ->
				console.log("" + d)
				tweet = JSON.parse(d)
				console.log("tweet: " + tweet.text)
			)  
	)