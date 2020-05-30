const firebase = require('../config/firebase.config.js');

module.exports = function(app) {
    app.get('/users/:userId', (req, res) => {
        firebase
            .ref(`users/${req.params.userId}`)
            .once('value')
            .then(function(snapshot) {
                res.send(String(JSON.stringify(snapshot.val())));
            })
            .catch(function(errors) {
                console.log(errors);
                res.send('Hello Huy !');
            });
    });
    
    function writeUserData(userId, name, email) {
        firebase.ref('users/' + userId).set({
            name: name,
            email: email
        });
    }
    
    app.get('/users/:userId/update', (req, res) => {
        console.log(`Update ${req.params.userId}`);
        let name = 'asdf';
        writeUserData(req.params.userId, name, name + '@gmail.com');
        res.send(`Update ${req.params.userId}`);
    });
    
    function removeUserData(userId) {
        firebase.ref('users/' + userId).remove();
    }
    
    app.get('/users/:userId/remove', (req, res) => {
        console.log(`Remove ${req.params.userId}`);
        removeUserData(req.params.userId);
        res.send(`Remove ${req.params.userId}`);
    });    
};

