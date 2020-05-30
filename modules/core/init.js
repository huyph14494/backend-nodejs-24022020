const mongooseLib = require('../mongoose/libs/mongoose.lib.js');

module.exports = async function(app) {
	// await mongooseLib.connect();
	// route firebase
	// require('./../firebase/route/firebase.route.js')(app);

	// route users
	require('../jwt/routes/auth.route')(app);
	require('../photos/routes/photos.route')(app);
};
