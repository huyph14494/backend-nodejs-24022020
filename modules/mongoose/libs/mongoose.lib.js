const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

async function connect() {
	try {
		await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true  });
		console.log('Monogo connect: ' + MONGO_URL);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {connect};
