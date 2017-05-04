var fs = require('fs');

var fromFile = 'task/MapSampleData1.csv',
	toFile = 'data/MapSampleData1.js',
	csv = fs.readFileSync(fromFile, 'utf8'),
	arr = csv.split('\r\n'),
	fields = arr.shift().split(';'),
	json = [];

	arr.forEach(function (it, j) {
		if (it.length) {
			var hash = {};
			it.split(';').forEach(function (val, i) {
				if (i === 0) { val = Number(val); }
				if (val === 'ЛОЖЬ') { val = false; }
				else if (val === 'ИСТИНА') { val = true; }

				hash[fields[i]] = val;
			});
			hash.latitude = Number(hash.latitude.replace(',', '.'));
			hash.longitude = Number(hash.longitude.replace(',', '.'));

			json.push({properties: hash, geometry: {'type': 'Point', 'coordinates': [hash.longitude, hash.latitude]}});
		}
	});
	
fs.writeFileSync(toFile, 'var dataArray = ' + JSON.stringify(json, null, 2) + ';');
console.log('Lines: ', arr.length);
