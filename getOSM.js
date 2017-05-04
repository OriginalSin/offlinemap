var request = require('request'),
	base64 = require('node-base64-image'),
	fs = require('fs'),
	writeFile = require('write'),
	tmpl = 'http://c.tile.osm.org/{z}/{x}/{y}.png';

var hash = {
	4: {
		x: [1, 9],
		y: [1, 9]
	}
/*
	,
	5: {
		x: [4, 12],
		y: [6, 16]
	},
	6: {
		x: [9, 20],
		y: [15, 30]
	}
*/
};
var out = '';
for (var z in hash) {
	var xy = hash[z];
	var src = tmpl.replace('{z}', z);
	for (var x = xy.x[0]; x <= xy.x[1]; x++) {
		var src1 = src.replace('{x}', x);
		var yy = xy.y;
		for (var y = yy[0]; y <= yy[1]; y++) {
			var src2 = src1.replace('{y}', y);
			(function() {
				var resFile = '.osm_'+z+'_'+x+'_'+y+' { background-image: url("data:image/png;base64,';
console.log('ssss', src2);
				base64.encode(src2, {
					string : true
				}, function(error, response) {
					var content = fs.readFileSync('tiles.css', 'utf8');
// console.log('dd', response);
					content += resFile + response + "\"); }\n";
					fs.writeFileSync('tiles.css', content);
				});
			})();
		}
	}
}
return;
	
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
/*
base64.encode('http://c.tile.osm.org/4/7/7.png', {
	string : true
}, function(error, response) {
	//console.log('ssss', response);

	fs.writeFileSync('dd.css', '.osm_4_7_7 { background-image: url("data:image/png;base64,' + response + '"); }');
});
return;
		var tileBounds = L.bounds(
		        bounds.min.divideBy(tileSize)._floor(),
		        bounds.max.divideBy(tileSize)._floor());

	getPixelBounds: function () {
		var topLeftPoint = this._getTopLeftPoint();
		return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

		this._addTilesFromCenterOut(tileBounds);
		var queue = [],
		    center = bounds.getCenter();

		var j, i, point;

		for (j = bounds.min.y; j <= bounds.max.y; j++) {
			for (i = bounds.min.x; i <= bounds.max.x; i++) {
				point = new L.Point(i, j);

				if (this._tileShouldBeLoaded(point)) {
					queue.push(point);
				}
			}
		}
var writeFile = require('write');
writeFile.sync('foo.txt', 'This is content to write.');		
*/
var hash = {
	4: {
		x: [1, 9],
		y: [1, 9]
	}
/*
	,
	5: {
		x: [4, 12],
		y: [6, 16]
	},
	6: {
		x: [9, 20],
		y: [15, 30]
	}
*/
};
var out = '';
for (var z in hash) {
	var xy = hash[z];
	var src = tmpl.replace('{z}', z);
	for (var x = xy.x[0]; x <= xy.x[1]; x++) {
		var src1 = src.replace('{x}', x);
		var yy = xy.y;
		for (var y = yy[0]; y <= yy[1]; y++) {
			var src2 = src1.replace('{y}', y);
			(function() {
				var resFile = 'tiles/' + z + '/' + x + '/' + y + '.png';
base64.encode('http://c.tile.osm.org/4/7/7.png', {
	string : true
}, function(error, response) {
	out += '.osm_4_7_7 { background-image: url("data:image/png;base64,' + response + "\"); }\n";
});
				request.get(src2, {}, function(error, response, body) {
console.log('success ', resFile);
					writeFile.sync(resFile, body);	
					fs.writeFileSync('tiles/' + z + '/' + x + '/' + y + '.png', body);
				});
			})();
		}
	}
}
