const UserModel = require('../../mongoose/models/user.model.js');

exports.signup = async (req, res) => {
    let users = await UserModel.find({});
    console.log('users', users);
    
	res.send(JSON.stringify(users));
};
