const fs = require('fs');
const path = require('path');

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.getRandomPhotos = async (req, res) => {
	let limit = req.params.limit || 10;
    let listPhoto = [];
    let listRandom = [];

	while (listRandom.length < limit) {
		let random = randomIntFromInterval(1, 28);
		if (listRandom.indexOf(random) === -1) {
            listRandom.push(random);
			listPhoto.push(global.url + '/api/photos/' + random + '.jpg');
		}
	}

	res.send(JSON.stringify(listPhoto));
};

exports.getPhotoById = async (req, res) => {
	let fileName = req.params.file || null;
	console.log(req.params);
	if (!fileName) {
		return res.status(403).end('Forbidden');
	}

	let mime = {
		html: 'text/html',
		txt: 'text/plain',
		css: 'text/css',
		gif: 'image/gif',
		jpg: 'image/jpeg',
		png: 'image/png',
		svg: 'image/svg+xml',
		js: 'application/javascript'
	};
	let dir = path.join(global.__basedir, 'assets/images');
	let file = path.join(dir, fileName);

	// console.log('dir', dir);
	// console.log('file', file);
	// console.log('path.sep', path.sep);

	if (file.indexOf(dir + path.sep) !== 0) {
		return res.status(403).end('Forbidden');
	}
	let type = mime[path.extname(file).slice(1)] || 'text/plain';
	let s = fs.createReadStream(file);
	s.on('open', function() {
		res.set('Content-Type', type);
		s.pipe(res);
	});
	s.on('error', function() {
		res.set('Content-Type', 'text/plain');
		res.status(404).end('Not found');
	});
};
