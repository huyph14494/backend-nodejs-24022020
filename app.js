require('dotenv').config();
let express = require('express');
const app = express();
const ngrok = require('ngrok');
const port = process.env.PORT || '4000';

// Will print "unhandledRejection err is not defined"
process.on('unhandledRejection', (error) => {
	console.log('unhandledRejection', error);
});

app.get('/', (req, res) => res.send('Hello World ' + process.env.ABC));

(function() {
	app.listen(port, async () => {
		await ngrok.disconnect(); // stops all
		await ngrok.kill(); // kills ngrok process
	
		const url = await ngrok.connect({ proto: 'http', addr: port }); // https://757c1652.ngrok.io -> http://localhost:3000
		console.log(url);

		require('./core/init.js')(app);
	});
})();
