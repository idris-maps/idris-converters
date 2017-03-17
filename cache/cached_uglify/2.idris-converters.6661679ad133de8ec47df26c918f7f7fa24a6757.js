webpackJsonp([2],{105:function(t,e,n){"use strict";var o=n(259);t.exports=function(t){return o.valid(t)}},259:function(t,e,n){!function(t){function e(t){return"function"==typeof t}function n(t){return t===Object(t)}function o(t,n){var o=!1;return"string"==typeof n?n=[n]:"[object Array]"===Object.prototype.toString.call(n)?0===n.length&&(o=!0):o=!0,e(t)&&(o?t(o,[]):t(o,n)),o}function i(t,n){var o;if(e(a[t])){try{o=a[t](n)}catch(e){o=["Problem with custom definition for '"+t+": "+e]}if("string"==typeof result&&(o=[o]),"[object Array]"===Object.prototype.toString.call(o))return o}return[]}function r(e,n){var i=[];return Array.isArray(e)?(e.forEach(function(e,n){t.isPosition(e,function(t,e){t||(e[0]="at "+n+": ".concat(e[0]),i=i.concat(e))})}),e[0].toString()!==e[e.length-1].toString()&&i.push("The first and last positions must be equivalent"),e.length<4&&i.push("coordinates must have at least four positions")):i.push("coordinates must be an array"),o(n,i)}var a={};t.define=function(t,n){return!!(t in c&&e(n))&&(a[t]=n,!0)},t.isPosition=function(t,e){var n=[];return Array.isArray(t)?t.length<=1&&n.push("Position must be at least two elements"):n.push("Position must be an array"),n=n.concat(i("Position",t)),o(e,n)},t.isGeoJSONObject=t.valid=function(t,e){if(!n(t))return o(e,["must be a JSON Object"]);var r=[];if("type"in t){if(u[t.type])return u[t.type](t,e);if(s[t.type])return s[t.type](t,e);r.push('type must be one of: "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", "GeometryCollection", "Feature", or "FeatureCollection"')}else r.push("must have a member with the name 'type'");return r=r.concat(i("GeoJSONObject",t)),o(e,r)},t.isGeometryObject=function(t,e){if(!n(t))return o(e,["must be a JSON Object"]);var r=[];if("type"in t){if(s[t.type])return s[t.type](t,e);r.push('type must be one of: "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon" or "GeometryCollection"')}else r.push("must have a member with the name 'type'");return r=r.concat(i("GeometryObject",t)),o(e,r)},t.isPoint=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"Point"!==e.type&&a.push("type must be 'Point'"):a.push("must have a member with the name 'type'"),"coordinates"in e?t.isPosition(e.coordinates,function(t,e){t||a.push("Coordinates must be a single position")}):a.push("must have a member with the name 'coordinates'"),a=a.concat(i("Point",e)),o(r,a)},t.isMultiPointCoor=function(e,n){var i=[];return Array.isArray(e)?e.forEach(function(e,n){t.isPosition(e,function(t,e){t||(e[0]="at "+n+": ".concat(e[0]),i=i.concat(e))})}):i.push("coordinates must be an array"),o(n,i)},t.isMultiPoint=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"MultiPoint"!==e.type&&a.push("type must be 'MultiPoint'"):a.push("must have a member with the name 'type'"),"coordinates"in e?t.isMultiPointCoor(e.coordinates,function(t,e){t||(a=a.concat(e))}):a.push("must have a member with the name 'coordinates'"),a=a.concat(i("MultiPoint",e)),o(r,a)},t.isLineStringCoor=function(e,n){var i=[];return Array.isArray(e)?e.length>1?e.forEach(function(e,n){t.isPosition(e,function(t,e){t||(e[0]="at "+n+": ".concat(e[0]),i=i.concat(e))})}):i.push("coordinates must have at least two elements"):i.push("coordinates must be an array"),o(n,i)},t.isLineString=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"LineString"!==e.type&&a.push("type must be 'LineString'"):a.push("must have a member with the name 'type'"),"coordinates"in e?t.isLineStringCoor(e.coordinates,function(t,e){t||(a=a.concat(e))}):a.push("must have a member with the name 'coordinates'"),a=a.concat(i("LineString",e)),o(r,a)},t.isMultiLineStringCoor=function(e,n){var i=[];Array.isArray(e)?e.forEach(function(e,n){t.isLineStringCoor(e,function(t,e){t||(e[0]="at "+n+": ".concat(e[0]),i=i.concat(e))})}):i.push("coordinates must be an array"),o(n,i)},t.isMultiLineString=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"MultiLineString"!==e.type&&a.push("type must be 'MultiLineString'"):a.push("must have a member with the name 'type'"),"coordinates"in e?t.isMultiLineStringCoor(e.coordinates,function(t,e){t||(a=a.concat(e))}):a.push("must have a member with the name 'coordinates'"),a=a.concat(i("MultiPoint",e)),o(r,a)},t.isPolygonCoor=function(t,e){var n=[];return Array.isArray(t)?t.forEach(function(t,e){r(t,function(t,o){t||(o[0]="at "+e+": ".concat(o[0]),n=n.concat(o))})}):n.push("coordinates must be an array"),o(e,n)},t.isPolygon=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"Polygon"!==e.type&&a.push("type must be 'Polygon'"):a.push("must have a member with the name 'type'"),"coordinates"in e?t.isPolygonCoor(e.coordinates,function(t,e){t||(a=a.concat(e))}):a.push("must have a member with the name 'coordinates'"),a=a.concat(i("Polygon",e)),o(r,a)},t.isMultiPolygonCoor=function(e,n){var i=[];Array.isArray(e)?e.forEach(function(e,n){t.isPolygonCoor(e,function(t,e){t||(e[0]="at "+n+": ".concat(e[0]),i=i.concat(e))})}):i.push("coordinates must be an array"),o(n,i)},t.isMultiPolygon=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"MultiPolygon"!==e.type&&a.push("type must be 'MultiPolygon'"):a.push("must have a member with the name 'type'"),"coordinates"in e?t.isMultiPolygonCoor(e.coordinates,function(t,e){t||(a=a.concat(e))}):a.push("must have a member with the name 'coordinates'"),a=a.concat(i("MultiPolygon",e)),o(r,a)},t.isGeometryCollection=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"GeometryCollection"!==e.type&&a.push("type must be 'GeometryCollection'"):a.push("must have a member with the name 'type'"),"geometries"in e?Array.isArray(e.geometries)?e.geometries.forEach(function(e,n){t.isGeometryObject(e,function(t,e){t||(e[0]="at "+n+": ".concat(e[0]),a=a.concat(e))})}):a.push("'geometries' must be an array"):a.push("must have a member with the name 'geometries'"),a=a.concat(i("GeometryCollection",e)),o(r,a)},t.isFeature=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"Feature"!==e.type&&a.push("type must be 'feature'"):a.push("must have a member with the name 'type'"),"properties"in e||a.push("must have a member with the name 'properties'"),"geometry"in e?null!==e.geometry&&t.isGeometryObject(e.geometry,function(t,e){t||(a=a.concat(e))}):a.push("must have a member with the name 'geometry'"),a=a.concat(i("Feature",e)),o(r,a)},t.isFeatureCollection=function(e,r){if(!n(e))return o(r,["must be a JSON Object"]);var a=[];return"bbox"in e&&t.isBbox(e.bbox,function(t,e){t||(a=a.concat(e))}),"type"in e?"FeatureCollection"!==e.type&&a.push("type must be 'FeatureCollection'"):a.push("must have a member with the name 'type'"),"features"in e?Array.isArray(e.features)?e.features.forEach(function(e,n){t.isFeature(e,function(t,e){t||(e[0]="at "+n+": ".concat(e[0]),a=a.concat(e))})}):a.push("'features' must be an array"):a.push("must have a member with the name 'features'"),a=a.concat(i("FeatureCollection",e)),o(r,a)},t.isBbox=function(t,e){var n=[];Array.isArray(t)?t.length%2!=0&&n.push("bbox, must be a 2*n array"):n.push("bbox must be an array"),n=n.concat(i("Bbox",t)),o(e,n)};var u={Feature:t.isFeature,FeatureCollection:t.isFeatureCollection},s={Point:t.isPoint,MultiPoint:t.isMultiPoint,LineString:t.isLineString,MultiLineString:t.isMultiLineString,Polygon:t.isPolygon,MultiPolygon:t.isMultiPolygon,GeometryCollection:t.isGeometryCollection},c={Feature:t.isFeature,FeatureCollection:t.isFeatureCollection,Point:t.isPoint,MultiPoint:t.isMultiPoint,LineString:t.isLineString,MultiLineString:t.isMultiLineString,Polygon:t.isPolygon,MultiPolygon:t.isMultiPolygon,GeometryCollection:t.isGeometryCollection,Bbox:t.isBox,Position:t.isPosition,GeoJSON:t.isGeoJSONObject,GeometryObject:t.isGeometryObject};t.all_types=c}(e)}});