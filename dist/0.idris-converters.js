webpackJsonp([0],{106:function(n,e,t){"use strict";var r=t(261);n.exports=function(n,e){var t={type:"FeatureCollection",features:[]};r.open(n.shpData,n.dbfData).then(function(n){return n.read().then(function r(o){return o.done?void e(null,t):(t.features.push(o.value),n.read().then(r))})}).catch(function(n){console.error(n.stack),e(n)})}},261:function(n,e,t){!function(n,t){t(e)}(0,function(n){"use strict";function e(n){return new t(n instanceof Uint8Array?n:new Uint8Array(n))}function t(n){this._array=n}function r(n){return("function"==typeof fetch?x:F)(n)}function o(n){return"function"==typeof n.read?n:n.getReader()}function i(n,e){if(!n.length)return e;if(!e.length)return n;var t=new Uint8Array(n.length+e.length);return t.set(n),t.set(e,n.length),t}function u(n){return"function"==typeof n.slice?n:new a("function"==typeof n.read?n:n.getReader())}function a(n){this._source=n,this._array=U,this._index=0}function c(n,e,t,r){this._source=n,this._decode=e.decode.bind(e),this._recordLength=t.getUint16(10,!0),this._fields=[];for(var o=0;13!==r.getUint8(o);o+=32){for(var i=0;i<11&&0!==r.getUint8(o+i);++i);this._fields.push({name:this._decode(new Uint8Array(r.buffer,r.byteOffset+o,i)),type:String.fromCharCode(r.getUint8(o+11)),length:r.getUint8(o+16)})}}function f(){return this._source.cancel()}function s(n){if((e=n.length)<4)return!1;for(var e,t=0,r=n[e-1][1]*n[0][0]-n[e-1][0]*n[0][1];++t<e;)r+=n[t-1][1]*n[t][0]-n[t-1][0]*n[t][1];return r>=0}function l(n,e){for(var t,r=-1,o=e.length;++r<o;)if(t=h(n,e[r]))return t>0;return!1}function h(n,e){for(var t=e[0],r=e[1],o=-1,i=0,u=n.length,a=u-1;i<u;a=i++){var c=n[i],f=c[0],s=c[1],l=n[a],h=l[0],y=l[1];if(d(c,l,e))return 0;s>r!=y>r&&t<(h-f)*(r-s)/(y-s)+f&&(o=-o)}return o}function d(n,e,t){var r=t[0]-n[0],o=t[1]-n[1];if(0===r&&0===o)return!0;var i=e[0]-n[0],u=e[1]-n[1];if(0===i&&0===u)return!1;var a=(r*i+o*u)/(i*i+u*u);return!(a<0||a>1)&&(0===a||1===a||a*i===r&&a*u===o)}function y(n,e){var t=e.getInt32(32,!0);if(!(t in J))throw new Error("unsupported shape type: "+t);this._source=n,this._type=J[t],this.bbox=[e.getFloat64(36,!0),e.getFloat64(44,!0),e.getFloat64(52,!0),e.getFloat64(60,!0)]}function p(){}function g(n,e){this._shp=n,this._dbf=e,this.bbox=n.bbox}function v(n,t,i){return"string"==typeof t?(/\.dbf$/.test(t)||(t+=".dbf"),t=r(t,i)):t instanceof ArrayBuffer||t instanceof Uint8Array?t=e(t):null!=t&&(t=o(t)),"string"==typeof n?(/\.shp$/.test(n)||(n+=".shp"),void 0===t&&(t=r(n.substring(0,n.length-4)+".dbf",i).catch(function(){})),n=r(n,i)):n=n instanceof ArrayBuffer||n instanceof Uint8Array?e(n):o(n),Promise.all([n,t]).then(function(n){var e=n[0],t=n[1],r="windows-1252";return i&&null!=i.encoding&&(r=i.encoding),Q(e,t,t&&new TextDecoder(r))})}function _(n,t){return"string"==typeof n?(/\.shp$/.test(n)||(n+=".shp"),n=r(n,t)):n=n instanceof ArrayBuffer||n instanceof Uint8Array?e(n):o(n),Promise.resolve(n).then(V)}function b(n,t){var i="windows-1252";return t&&null!=t.encoding&&(i=t.encoding),i=new TextDecoder(i),"string"==typeof n?(/\.dbf$/.test(n)||(n+=".dbf"),n=r(n,t)):n=n instanceof ArrayBuffer||n instanceof Uint8Array?e(n):o(n),Promise.resolve(n).then(function(n){return T(n,i)})}function w(n,e,t){return v(n,e,t).then(function(n){var e=[],t={type:"FeatureCollection",features:e,bbox:n.bbox};return n.read().then(function r(o){return o.done?t:(e.push(o.value),n.read().then(r))})})}var m=function(){return this._array=null,Promise.resolve()},A=function(){var n=this._array;return this._array=null,Promise.resolve(n?{done:!1,value:n}:{done:!0,value:void 0})};t.prototype.read=A,t.prototype.cancel=m;var x=function(n){return fetch(n).then(function(n){return n.body&&n.body.getReader?n.body.getReader():n.arrayBuffer().then(e)})},F=function(n){return new Promise(function(t,r){var o=new XMLHttpRequest;o.responseType="arraybuffer",o.onload=function(){t(e(o.response))},o.onerror=r,o.ontimeout=r,o.open("GET",n,!0),o.send()})},U=new Uint8Array(0),P=function(){return this._source.cancel()},I=function(){var n=this,e=n._array.subarray(n._index);return n._source.read().then(function(t){return n._array=U,n._index=0,t.done?e.length>0?{done:!1,value:e}:{done:!0,value:void 0}:{done:!1,value:i(e,t.value)}})},D=function(n){if((n|=0)<0)throw new Error("invalid length");var e=this,t=this._array.length-this._index;if(this._index+n<=this._array.length)return Promise.resolve(this._array.subarray(this._index,this._index+=n));var r=new Uint8Array(n);return r.set(this._array.subarray(this._index)),function o(){return e._source.read().then(function(i){return i.done?(e._array=U,e._index=0,t>0?r.subarray(0,t):null):t+i.value.length>=n?(e._array=i.value,e._index=n-t,r.set(i.value.subarray(0,n-t),t),r):(r.set(i.value,t),t+=i.value.length,o())})}()};a.prototype.read=I,a.prototype.slice=D,a.prototype.cancel=P;var L=function(){return this._source.cancel()},B=function(n){return!/^[nf]$/i.test(n)&&(!!/^[yt]$/i.test(n)||null)},M=function(n){return new Date(+n.substring(0,4),n.substring(4,6)-1,+n.substring(6,8))},$=function(n){return!(n=n.trim())||isNaN(n=+n)?null:n},C=function(n){return n.trim()||null},E={B:$,C:C,D:M,F:$,L:B,M:$,N:$},R=function(){var n=this,e=1;return n._source.slice(n._recordLength).then(function(t){return t&&26!==t[0]?{done:!1,value:n._fields.reduce(function(r,o){return r[o.name]=E[o.type](n._decode(t.subarray(e,e+=o.length))),r},{})}:{done:!0,value:void 0}})},S=function(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)},T=function(n,e){return n=u(n),n.slice(32).then(function(t){var r=S(t);return n.slice(r.getUint16(8,!0)-32).then(function(t){return new c(n,e,r,S(t))})})},N=c.prototype;N.read=R,N.cancel=L;var O=function(n){var e,t=40,r=n.getInt32(36,!0),o=new Array(r);for(e=0;e<r;++e,t+=16)o[e]=[n.getFloat64(t,!0),n.getFloat64(t+8,!0)];return{type:"MultiPoint",coordinates:o}},k=function(){return null},j=function(n){return{type:"Point",coordinates:[n.getFloat64(4,!0),n.getFloat64(12,!0)]}},q=function(n){var e,t=44,r=n.getInt32(36,!0),o=n.getInt32(40,!0),i=new Array(r),u=new Array(o),a=[],c=[];for(e=0;e<r;++e,t+=4)i[e]=n.getInt32(t,!0);for(e=0;e<o;++e,t+=16)u[e]=[n.getFloat64(t,!0),n.getFloat64(t+8,!0)];return i.forEach(function(n,e){var t=u.slice(n,i[e+1]);s(t)?a.push([t]):c.push(t)}),c.forEach(function(n){a.some(function(e){if(l(e[0],n))return e.push(n),!0})||a.push([n])}),1===a.length?{type:"Polygon",coordinates:a[0]}:{type:"MultiPolygon",coordinates:a}},G=function(n){var e,t=44,r=n.getInt32(36,!0),o=n.getInt32(40,!0),i=new Array(r),u=new Array(o);for(e=0;e<r;++e,t+=4)i[e]=n.getInt32(t,!0);for(e=0;e<o;++e,t+=16)u[e]=[n.getFloat64(t,!0),n.getFloat64(t+8,!0)];return 1===r?{type:"LineString",coordinates:u}:{type:"MultiLineString",coordinates:i.map(function(n,e){return u.slice(n,i[e+1])})}},H=function(){var n=this;return n._source.slice(8).then(function(e){if(null==e)return{done:!0,value:void 0};var t=S(e);return n._source.slice(2*t.getInt32(4,!1)).then(function(e){var t=S(e);return{done:!1,value:t.getInt32(0,!0)?n._type(t):k()}})})},J={0:k,1:j,3:G,5:q,8:O,11:j,13:G,15:q,18:O},V=function(n){return n=u(n),n.slice(100).then(function(e){return new y(n,S(e))})},X=y.prototype;X.read=H,X.cancel=f;var z=function(){return Promise.all([this._dbf&&this._dbf.cancel(),this._shp.cancel()]).then(p)},K=function(){var n=this;return Promise.all([n._dbf?n._dbf.read():{value:{}},n._shp.read()]).then(function(n){var e=n[0],t=n[1];return t.done?t:{done:!1,value:{type:"Feature",properties:e.value,geometry:t.value}}})},Q=function(n,e,t){return Promise.all([V(n),e&&T(e,t)]).then(function(n){return new g(n[0],n[1])})},W=g.prototype;W.read=K,W.cancel=z,n.open=v,n.openShp=_,n.openDbf=b,n.read=w,Object.defineProperty(n,"__esModule",{value:!0})})}});