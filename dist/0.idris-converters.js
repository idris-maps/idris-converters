webpackJsonp([0],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wkt = __webpack_require__(254);
var fixString = __webpack_require__(251);

module.exports = function (json, callback) {
	var props = getProps(json.features);
	var table = createTable(props);
	var inserts = createInserts(json.features, props);
	var string = table + inserts;
	callback(string);
};

function createInserts(feats, props) {
	var colStr = columnString(props);
	var str = '';
	feats.forEach(function (f) {
		var valStr = valuesString(props, f);
		str = str + 'INSERT INTO temp_from_geojson (' + colStr + ') VALUES(' + valStr + ');\n';
	});
	return str;
}

function valuesString(props, f) {
	var str = '';
	props.forEach(function (p) {
		if (p.type === 'varchar') {
			str = str + '\'' + f.properties[p.name] + '\', ';
		} else {
			str = str + +f.properties[p.name] + ', ';
		}
	});
	str = str + '\'' + wkt.stringify(f.geometry) + '\'';
	return str;
}

function columnString(props) {
	var str = '';
	props.forEach(function (p) {
		str = str + fixString(p.name) + ', ';
	});
	str = str + 'wkt';
	return str;
}

function createTable(props) {
	var str = 'CREATE TABLE temp_from_geojson (\n';
	props.forEach(function (p) {
		str = str + fixString(p.name) + ' ' + p.type + ',\n';
	});
	str = str + 'wkt text\n' + ');\n';
	return str;
}

function getProps(feats) {
	var f0 = feats[0];
	var props = [];
	var k;
	for (k in f0.properties) {
		if (isNaN(f0.properties[k])) {
			var type = 'varchar';
		} else {
			var type = 'numeric';
		}
		props.push({ name: k, type: type });
	}
	return props;
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
  var s1 = removeDiacritics(str);
  var s2 = sqlEsc(s1);
  var s3 = spaces(s2);
  return s3;
};

function spaces(str) {
  return str.replace(' ', '_');
}

function sqlEsc(str) {
  /* http://stackoverflow.com/questions/7744912/making-a-javascript-string-sql-friendly */
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
    switch (char) {
      case "\0":
        return "\\0";
      case "\x08":
        return "\\b";
      case "\x09":
        return "\\t";
      case "\x1a":
        return "\\z";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "\"":
      case "'":
      case "\\":
      case "%":
        return "\\" + char;
    }
  });
}

/*
http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var defaultDiacriticsRemovalMap = [{ 'base': 'A', 'letters': 'A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' }, { 'base': 'AA', 'letters': '\uA732' }, { 'base': 'AE', 'letters': '\xC6\u01FC\u01E2' }, { 'base': 'AO', 'letters': '\uA734' }, { 'base': 'AU', 'letters': '\uA736' }, { 'base': 'AV', 'letters': '\uA738\uA73A' }, { 'base': 'AY', 'letters': '\uA73C' }, { 'base': 'B', 'letters': 'B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' }, { 'base': 'C', 'letters': 'C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E' }, { 'base': 'D', 'letters': 'D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779' }, { 'base': 'DZ', 'letters': '\u01F1\u01C4' }, { 'base': 'Dz', 'letters': '\u01F2\u01C5' }, { 'base': 'E', 'letters': 'E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' }, { 'base': 'F', 'letters': 'F\u24BB\uFF26\u1E1E\u0191\uA77B' }, { 'base': 'G', 'letters': 'G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' }, { 'base': 'H', 'letters': 'H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' }, { 'base': 'I', 'letters': 'I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' }, { 'base': 'J', 'letters': 'J\u24BF\uFF2A\u0134\u0248' }, { 'base': 'K', 'letters': 'K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' }, { 'base': 'L', 'letters': 'L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' }, { 'base': 'LJ', 'letters': '\u01C7' }, { 'base': 'Lj', 'letters': '\u01C8' }, { 'base': 'M', 'letters': 'M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' }, { 'base': 'N', 'letters': 'N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' }, { 'base': 'NJ', 'letters': '\u01CA' }, { 'base': 'Nj', 'letters': '\u01CB' }, { 'base': 'O', 'letters': 'O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C' }, { 'base': 'OI', 'letters': '\u01A2' }, { 'base': 'OO', 'letters': '\uA74E' }, { 'base': 'OU', 'letters': '\u0222' }, { 'base': 'OE', 'letters': '\x8C\u0152' }, { 'base': 'oe', 'letters': '\x9C\u0153' }, { 'base': 'P', 'letters': 'P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' }, { 'base': 'Q', 'letters': 'Q\u24C6\uFF31\uA756\uA758\u024A' }, { 'base': 'R', 'letters': 'R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' }, { 'base': 'S', 'letters': 'S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' }, { 'base': 'T', 'letters': 'T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' }, { 'base': 'TZ', 'letters': '\uA728' }, { 'base': 'U', 'letters': 'U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' }, { 'base': 'V', 'letters': 'V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' }, { 'base': 'VY', 'letters': '\uA760' }, { 'base': 'W', 'letters': 'W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' }, { 'base': 'X', 'letters': 'X\u24CD\uFF38\u1E8A\u1E8C' }, { 'base': 'Y', 'letters': 'Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' }, { 'base': 'Z', 'letters': 'Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' }, { 'base': 'a', 'letters': 'a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' }, { 'base': 'aa', 'letters': '\uA733' }, { 'base': 'ae', 'letters': '\xE6\u01FD\u01E3' }, { 'base': 'ao', 'letters': '\uA735' }, { 'base': 'au', 'letters': '\uA737' }, { 'base': 'av', 'letters': '\uA739\uA73B' }, { 'base': 'ay', 'letters': '\uA73D' }, { 'base': 'b', 'letters': 'b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' }, { 'base': 'c', 'letters': 'c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184' }, { 'base': 'd', 'letters': 'd\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' }, { 'base': 'dz', 'letters': '\u01F3\u01C6' }, { 'base': 'e', 'letters': 'e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' }, { 'base': 'f', 'letters': 'f\u24D5\uFF46\u1E1F\u0192\uA77C' }, { 'base': 'g', 'letters': 'g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' }, { 'base': 'h', 'letters': 'h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' }, { 'base': 'hv', 'letters': '\u0195' }, { 'base': 'i', 'letters': 'i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' }, { 'base': 'j', 'letters': 'j\u24D9\uFF4A\u0135\u01F0\u0249' }, { 'base': 'k', 'letters': 'k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' }, { 'base': 'l', 'letters': 'l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' }, { 'base': 'lj', 'letters': '\u01C9' }, { 'base': 'm', 'letters': 'm\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' }, { 'base': 'n', 'letters': 'n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' }, { 'base': 'nj', 'letters': '\u01CC' }, { 'base': 'o', 'letters': 'o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275' }, { 'base': 'oi', 'letters': '\u01A3' }, { 'base': 'ou', 'letters': '\u0223' }, { 'base': 'oo', 'letters': '\uA74F' }, { 'base': 'p', 'letters': 'p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' }, { 'base': 'q', 'letters': 'q\u24E0\uFF51\u024B\uA757\uA759' }, { 'base': 'r', 'letters': 'r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' }, { 'base': 's', 'letters': 's\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' }, { 'base': 't', 'letters': 't\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' }, { 'base': 'tz', 'letters': '\uA729' }, { 'base': 'u', 'letters': 'u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' }, { 'base': 'v', 'letters': 'v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' }, { 'base': 'vy', 'letters': '\uA761' }, { 'base': 'w', 'letters': 'w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' }, { 'base': 'x', 'letters': 'x\u24E7\uFF58\u1E8B\u1E8D' }, { 'base': 'y', 'letters': 'y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' }, { 'base': 'z', 'letters': 'z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }];

var diacriticsMap = {};
for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
  var letters = defaultDiacriticsRemovalMap[i].letters;
  for (var j = 0; j < letters.length; j++) {
    diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
  }
}

// "what?" version ... http://jsperf.com/diacritics/12
function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007E]/g, function (a) {
    return diacriticsMap[a] || a;
  });
}

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

/*eslint-disable no-cond-assign */
module.exports = parse;
module.exports.parse = parse;
module.exports.stringify = stringify;

var numberRegexp = /[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/;
// Matches sequences like '100 100' or '100 100 100'.
var tuples = new RegExp('^' + numberRegexp.source + '(\\s' + numberRegexp.source + '){1,}');

/*
 * Parse WKT and return GeoJSON.
 *
 * @param {string} _ A WKT geometry
 * @return {?Object} A GeoJSON geometry object
 */
function parse (input) {
  var parts = input.split(';');
  var _ = parts.pop();
  var srid = (parts.shift() || '').split('=').pop();

  var i = 0;

  function $ (re) {
    var match = _.substring(i).match(re);
    if (!match) return null;
    else {
      i += match[0].length;
      return match[0];
    }
  }

  function crs (obj) {
    if (obj && srid.match(/\d+/)) {
      obj.crs = {
        type: 'name',
        properties: {
          name: 'urn:ogc:def:crs:EPSG::' + srid
        }
      };
    }

    return obj;
  }

  function white () { $(/^\s*/); }

  function multicoords () {
    white();
    var depth = 0;
    var rings = [];
    var stack = [rings];
    var pointer = rings;
    var elem;

    while (elem =
           $(/^(\()/) ||
             $(/^(\))/) ||
               $(/^(,)/) ||
                 $(tuples)) {
      if (elem === '(') {
        stack.push(pointer);
        pointer = [];
        stack[stack.length - 1].push(pointer);
        depth++;
      } else if (elem === ')') {
        // For the case: Polygon(), ...
        if (pointer.length === 0) return null;

        pointer = stack.pop();
        // the stack was empty, input was malformed
        if (!pointer) return null;
        depth--;
        if (depth === 0) break;
      } else if (elem === ',') {
        pointer = [];
        stack[stack.length - 1].push(pointer);
      } else if (!elem.split(/\s/g).some(isNaN)) {
        Array.prototype.push.apply(pointer, elem.split(/\s/g).map(parseFloat));
      } else {
        return null;
      }
      white();
    }

    if (depth !== 0) return null;

    return rings;
  }

  function coords () {
    var list = [];
    var item;
    var pt;
    while (pt =
           $(tuples) ||
             $(/^(,)/)) {
      if (pt === ',') {
        list.push(item);
        item = [];
      } else if (!pt.split(/\s/g).some(isNaN)) {
        if (!item) item = [];
        Array.prototype.push.apply(item, pt.split(/\s/g).map(parseFloat));
      }
      white();
    }

    if (item) list.push(item);
    else return null;

    return list.length ? list : null;
  }

  function point () {
    if (!$(/^(point(\sz)?)/i)) return null;
    white();
    if (!$(/^(\()/)) return null;
    var c = coords();
    if (!c) return null;
    white();
    if (!$(/^(\))/)) return null;
    return {
      type: 'Point',
      coordinates: c[0]
    };
  }

  function multipoint () {
    if (!$(/^(multipoint)/i)) return null;
    white();
    var newCoordsFormat = _
      .substring(_.indexOf('(') + 1, _.length - 1)
      .replace(/\(/g, '')
      .replace(/\)/g, '');
    _ = 'MULTIPOINT (' + newCoordsFormat + ')';
    var c = multicoords();
    if (!c) return null;
    white();
    return {
      type: 'MultiPoint',
      coordinates: c
    };
  }

  function multilinestring () {
    if (!$(/^(multilinestring)/i)) return null;
    white();
    var c = multicoords();
    if (!c) return null;
    white();
    return {
      type: 'MultiLineString',
      coordinates: c
    };
  }

  function linestring () {
    if (!$(/^(linestring(\sz)?)/i)) return null;
    white();
    if (!$(/^(\()/)) return null;
    var c = coords();
    if (!c) return null;
    if (!$(/^(\))/)) return null;
    return {
      type: 'LineString',
      coordinates: c
    };
  }

  function polygon () {
    if (!$(/^(polygon(\sz)?)/i)) return null;
    white();
    var c = multicoords();
    if (!c) return null;
    return {
      type: 'Polygon',
      coordinates: c
    };
  }

  function multipolygon () {
    if (!$(/^(multipolygon)/i)) return null;
    white();
    var c = multicoords();
    if (!c) return null;
    return {
      type: 'MultiPolygon',
      coordinates: c
    };
  }

  function geometrycollection () {
    var geometries = [];
    var geometry;

    if (!$(/^(geometrycollection)/i)) return null;
    white();

    if (!$(/^(\()/)) return null;
    while (geometry = root()) {
      geometries.push(geometry);
      white();
      $(/^(,)/);
      white();
    }
    if (!$(/^(\))/)) return null;

    return {
      type: 'GeometryCollection',
      geometries: geometries
    };
  }

  function root () {
    return point() ||
      linestring() ||
      polygon() ||
      multipoint() ||
      multilinestring() ||
      multipolygon() ||
      geometrycollection();
  }

  return crs(root());
}

/**
 * Stringifies a GeoJSON object into WKT
 */
function stringify (gj) {
  if (gj.type === 'Feature') {
    gj = gj.geometry;
  }

  function pairWKT (c) {
    return c.join(' ');
  }

  function ringWKT (r) {
    return r.map(pairWKT).join(', ');
  }

  function ringsWKT (r) {
    return r.map(ringWKT).map(wrapParens).join(', ');
  }

  function multiRingsWKT (r) {
    return r.map(ringsWKT).map(wrapParens).join(', ');
  }

  function wrapParens (s) { return '(' + s + ')'; }

  switch (gj.type) {
    case 'Point':
      return 'POINT (' + pairWKT(gj.coordinates) + ')';
    case 'LineString':
      return 'LINESTRING (' + ringWKT(gj.coordinates) + ')';
    case 'Polygon':
      return 'POLYGON (' + ringsWKT(gj.coordinates) + ')';
    case 'MultiPoint':
      return 'MULTIPOINT (' + ringWKT(gj.coordinates) + ')';
    case 'MultiPolygon':
      return 'MULTIPOLYGON (' + multiRingsWKT(gj.coordinates) + ')';
    case 'MultiLineString':
      return 'MULTILINESTRING (' + ringsWKT(gj.coordinates) + ')';
    case 'GeometryCollection':
      return 'GEOMETRYCOLLECTION (' + gj.geometries.map(stringify).join(', ') + ')';
    default:
      throw new Error('stringify requires a valid GeoJSON Feature or geometry object as input');
  }
}


/***/ })

});