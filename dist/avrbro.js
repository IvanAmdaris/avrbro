const t=function(){function t(){}return t.prototype.then=function(r,n){const o=new t,i=this.s;if(i){const t=1&i?r:n;if(t){try{e(o,1,t(this.v))}catch(t){e(o,2,t)}return o}return this}return this.o=function(t){try{const i=t.v;1&t.s?e(o,1,r?r(i):i):n?e(o,1,n(i)):e(o,2,i)}catch(t){e(o,2,t)}},o},t}();function e(r,n,o){if(!r.s){if(o instanceof t){if(!o.s)return void(o.o=e.bind(null,r,n));1&n&&(n=o.s),o=o.v}if(o&&o.then)return void o.then(e.bind(null,r,n),e.bind(null,r,2));r.s=n,r.v=o;const i=r.o;i&&i(r)}}function r(e){return e instanceof t&&1&e.s}function n(n,o,i){for(var u;;){var s=n();if(r(s)&&(s=s.v),!s)return f;if(s.then){u=0;break}var f=i();if(f&&f.then){if(!r(f)){u=1;break}f=f.s}if(o){var a=o();if(a&&a.then&&!r(a)){u=2;break}}}var h=new t,c=e.bind(null,h,2);return(0===u?s.then(p):1===u?f.then(l):a.then(g)).then(void 0,c),h;function l(t){f=t;do{if(o&&(a=o())&&a.then&&!r(a))return void a.then(g).then(void 0,c);if(!(s=n())||r(s)&&!s.v)return void e(h,1,f);if(s.then)return void s.then(p).then(void 0,c);r(f=i())&&(f=f.v)}while(!f||!f.then);f.then(l).then(void 0,c)}function p(t){t?(f=i())&&f.then?f.then(l).then(void 0,c):l(f):e(h,1,f)}function g(){(s=n())?s.then?s.then(p).then(void 0,c):p(s):e(h,1,f)}}function o(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));for(var i=[],u=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,h=f.length;a<h;++a)i[a]=f[a],u[f.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function l(t,e,r){for(var n,o=[],u=e;u<r;u+=3)o.push(i[(n=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]))>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return o.join("")}u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63;var p={byteLength:function(t){var e=c(t),r=e[1];return 3*(e[0]+r)/4-r},toByteArray:function(t){var e,r,n=c(t),o=n[0],i=n[1],f=new s(function(t,e,r){return 3*(e+r)/4-r}(0,o,i)),a=0,h=i>0?o-4:o;for(r=0;r<h;r+=4)e=u[t.charCodeAt(r)]<<18|u[t.charCodeAt(r+1)]<<12|u[t.charCodeAt(r+2)]<<6|u[t.charCodeAt(r+3)],f[a++]=e>>16&255,f[a++]=e>>8&255,f[a++]=255&e;return 2===i&&(e=u[t.charCodeAt(r)]<<2|u[t.charCodeAt(r+1)]>>4,f[a++]=255&e),1===i&&(e=u[t.charCodeAt(r)]<<10|u[t.charCodeAt(r+1)]<<4|u[t.charCodeAt(r+2)]>>2,f[a++]=e>>8&255,f[a++]=255&e),f},fromByteArray:function(t){for(var e,r=t.length,n=r%3,o=[],u=0,s=r-n;u<s;u+=16383)o.push(l(t,u,u+16383>s?s:u+16383));return 1===n?o.push(i[(e=t[r-1])>>2]+i[e<<4&63]+"=="):2===n&&o.push(i[(e=(t[r-2]<<8)+t[r-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),o.join("")}},g={read:function(t,e,r,n,o){var i,u,s=8*o-n-1,f=(1<<s)-1,a=f>>1,h=-7,c=r?o-1:0,l=r?-1:1,p=t[e+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=s;h>0;i=256*i+t[e+c],c+=l,h-=8);for(u=i&(1<<-h)-1,i>>=-h,h+=n;h>0;u=256*u+t[e+c],c+=l,h-=8);if(0===i)i=1-a;else{if(i===f)return u?NaN:Infinity*(p?-1:1);u+=Math.pow(2,n),i-=a}return(p?-1:1)*u*Math.pow(2,i-n)},write:function(t,e,r,n,o,i){var u,s,f,a=8*i-o-1,h=(1<<a)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||Infinity===e?(s=isNaN(e)?1:0,u=h):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),(e+=u+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(u++,f/=2),u+c>=h?(s=0,u=h):u+c>=1?(s=(e*f-1)*Math.pow(2,o),u+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,o),u=0));o>=8;t[r+p]=255&s,p+=g,s/=256,o-=8);for(u=u<<o|s,a+=o;a>0;t[r+p]=255&u,p+=g,u/=256,a-=8);t[r+p-g]|=128*y}},y=function(t,e){return function(t,e){var r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=i,e.SlowBuffer=function(t){return+t!=t&&(t=0),i.alloc(+t)},e.INSPECT_MAX_BYTES=50;var n=2147483647;function o(t){if(t>n)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return f(t)}return u(t,e,r)}function u(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|c(t,e),n=o(r),u=n.write(t,e);return u!==r&&(n=n.slice(0,u)),n}(t,e);if(ArrayBuffer.isView(t))return a(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(k(t,ArrayBuffer)||t&&k(t.buffer,ArrayBuffer))return function(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,i.prototype),n}(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return i.from(n,e,r);var u=function(t){if(i.isBuffer(t)){var e=0|h(t.length),r=o(e);return 0===r.length?r:(t.copy(r,0,0,e),r)}return void 0!==t.length?"number"!=typeof t.length||z(t.length)?o(0):a(t):"Buffer"===t.type&&Array.isArray(t.data)?a(t.data):void 0}(t);if(u)return u;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return i.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function f(t){return s(t),o(t<0?0:0|h(t))}function a(t){for(var e=t.length<0?0:0|h(t.length),r=o(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function h(t){if(t>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return 0|t}function c(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||k(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return M(t).length;default:if(o)return n?-1:D(t).length;e=(""+e).toLowerCase(),o=!0}}function l(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,r);case"utf8":case"utf-8":return _(this,e,r);case"ascii":return B(this,e,r);case"latin1":case"binary":return I(this,e,r);case"base64":return A(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function d(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),z(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=i.from(e,n)),i.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,o){var i,u=1,s=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,s/=2,f/=2,r/=2}function a(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(o){var h=-1;for(i=r;i<s;i++)if(a(t,i)===a(e,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===f)return h*u}else-1!==h&&(i-=i-h),h=-1}else for(r+f>s&&(r=s-f),i=r;i>=0;i--){for(var c=!0,l=0;l<f;l++)if(a(t,i+l)!==a(e,l)){c=!1;break}if(c)return i}return-1}function v(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var u=0;u<n;++u){var s=parseInt(e.substr(2*u,2),16);if(z(s))return u;t[r+u]=s}return u}function w(t,e,r,n){return j(D(e,t.length-r),t,r,n)}function b(t,e,r,n){return j(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function E(t,e,r,n){return b(t,e,r,n)}function S(t,e,r,n){return j(M(e),t,r,n)}function P(t,e,r,n){return j(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,t.length-r),t,r,n)}function A(t,e,r){return p.fromByteArray(0===e&&r===t.length?t:t.slice(e,r))}function _(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,u,s,f,a=t[o],h=null,c=a>239?4:a>223?3:a>191?2:1;if(o+c<=r)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(i=t[o+1]))&&(f=(31&a)<<6|63&i)>127&&(h=f);break;case 3:u=t[o+2],128==(192&(i=t[o+1]))&&128==(192&u)&&(f=(15&a)<<12|(63&i)<<6|63&u)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:u=t[o+2],s=t[o+3],128==(192&(i=t[o+1]))&&128==(192&u)&&128==(192&s)&&(f=(15&a)<<18|(63&i)<<12|(63&u)<<6|63&s)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(n.push((h-=65536)>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=c}return function(t){var e=t.length;if(e<=T)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=T));return r}(n)}e.kMaxLength=n,(i.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}())||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.buffer}}),Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),i.poolSize=8192,i.from=function(t,e,r){return u(t,e,r)},Object.setPrototypeOf(i.prototype,Uint8Array.prototype),Object.setPrototypeOf(i,Uint8Array),i.alloc=function(t,e,r){return function(t,e,r){return s(t),t<=0?o(t):void 0!==e?"string"==typeof r?o(t).fill(e,r):o(t).fill(e):o(t)}(t,e,r)},i.allocUnsafe=function(t){return f(t)},i.allocUnsafeSlow=function(t){return f(t)},i.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==i.prototype},i.compare=function(t,e){if(k(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),k(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,u=Math.min(r,n);o<u;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=i.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var u=t[r];if(k(u,Uint8Array)&&(u=i.from(u)),!i.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},i.byteLength=c,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},i.prototype.toLocaleString=i.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?_(this,0,t):l.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},r&&(i.prototype[r]=i.prototype.inspect),i.prototype.compare=function(t,e,r,n,o){if(k(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),!i.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var u=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),f=Math.min(u,s),a=this.slice(n,o),h=t.slice(e,r),c=0;c<f;++c)if(a[c]!==h[c]){u=a[c],s=h[c];break}return u<s?-1:s<u?1:0},i.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},i.prototype.indexOf=function(t,e,r){return d(this,t,e,r,!0)},i.prototype.lastIndexOf=function(t,e,r){return d(this,t,e,r,!1)},i.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return v(this,t,e,r);case"utf8":case"utf-8":return w(this,t,e,r);case"ascii":return b(this,t,e,r);case"latin1":case"binary":return E(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function B(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function I(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function O(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=G[t[i]];return o}function C(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function R(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,r,n,o,u){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<u)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function x(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function L(t,e,r,n,o){return e=+e,r>>>=0,o||x(t,0,r,4),g.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,o){return e=+e,r>>>=0,o||x(t,0,r,8),g.write(t,e,r,n,52,8),r+8}i.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,i.prototype),n},i.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},i.prototype.readUInt8=function(t,e){return t>>>=0,e||R(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,e){return t>>>=0,e||R(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,e){return t>>>=0,e||R(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,e){return t>>>=0,e||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,e){return t>>>=0,e||R(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},i.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return t>>>=0,e||R(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){t>>>=0,e||R(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt16BE=function(t,e){t>>>=0,e||R(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt32LE=function(t,e){return t>>>=0,e||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return t>>>=0,e||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,e){return t>>>=0,e||R(t,4,this.length),g.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return t>>>=0,e||R(t,4,this.length),g.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return t>>>=0,e||R(t,8,this.length),g.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return t>>>=0,e||R(t,8,this.length),g.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||U(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},i.prototype.writeUIntBE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||U(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},i.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,255,0),this[e]=255&t,e+1},i.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},i.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},i.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},i.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},i.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);U(this,t,e,r,o-1,-o)}var i=0,u=1,s=0;for(this[e]=255&t;++i<r&&(u*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/u>>0)-s&255;return e+r},i.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);U(this,t,e,r,o-1,-o)}var i=r-1,u=1,s=0;for(this[e+i]=255&t;--i>=0&&(u*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/u>>0)-s&255;return e+r},i.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},i.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},i.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},i.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},i.prototype.writeFloatLE=function(t,e,r){return L(this,t,e,!0,r)},i.prototype.writeFloatBE=function(t,e,r){return L(this,t,e,!1,r)},i.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},i.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},i.prototype.copy=function(t,e,r,n){if(!i.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var u=o-1;u>=0;--u)t[u+e]=this[u+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return o},i.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var u;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(u=e;u<r;++u)this[u]=t;else{var s=i.isBuffer(t)?t:i.from(t,n),f=s.length;if(0===f)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(u=0;u<r-e;++u)this[u+e]=s[u%f]}return this};var K=/[^+/0-9A-Za-z-_]/g;function D(t,e){var r;e=e||Infinity;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function M(t){return p.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(K,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function j(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function k(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function z(t){return t!=t}var G=function(){for(var t=new Array(256),e=0;e<16;++e)for(var r=16*e,n=0;n<16;++n)t[r+n]="0123456789abcdef"[e]+"0123456789abcdef"[n];return t}()}(e={exports:{}},e.exports),e.exports}().Buffer,d={Cmnd_STK_GET_SYNC:48,Cmnd_STK_SET_DEVICE:66,Cmnd_STK_ENTER_PROGMODE:80,Cmnd_STK_LOAD_ADDRESS:85,Cmnd_STK_PROG_PAGE:100,Cmnd_STK_LEAVE_PROGMODE:81,Cmnd_STK_READ_SIGN:117,Sync_CRC_EOP:32,Resp_STK_OK:16,Resp_STK_INSYNC:20,Resp_STK_NOSYNC:21,Cmnd_STK_READ_PAGE:116,OK_RESPONSE:y.from([20,16])},m=function(t,e){var r=t.reader,i=t.writer;try{var u=e.timeout||0,s=null,f=0;e.responseData&&e.responseData.length>0&&(s=e.responseData),s&&(f=s.length),e.responseLength&&(f=e.responseLength);var a=e.cmd;if(a instanceof Array&&(a=y.from(a.concat(d.Sync_CRC_EOP))),r&&i){try{console.log("will write: ",a),i.write(a)}catch(t){throw new Error("Sending "+a.toString("hex")+": "+t.message)}return console.log("wait response. length should be:"+f),Promise.resolve(o((function(){return Promise.resolve(function(t,e,r){var i=t.reader;try{var u=[d.Resp_STK_INSYNC],s=y.alloc(0),f=!1,a=null,h=!1,c=null,l=function(t){a&&clearTimeout(a),h=!1,c=t};if(e&&e>0&&(a=setTimeout((function(){a=null,l(new Error("receiveData timeout after "+e+"ms"))}),e)),i){var p=function(){if(c)throw c;return s},g=!1;h=!0;var m=n((function(){return!g&&!!h}),void 0,(function(){var t=o((function(){return Promise.resolve(i.read()).then((function(t){t.done?g=!0:function(t){console.log("chunk handled: ",t,new TextDecoder("utf-8").decode(t));for(var e=0;!f&&e<t.length;)-1!==u.indexOf(t[e])&&(t=t.slice(e,t.length-e),f=!0),e++;f&&(s=y.concat([s,t])),s.length>r?l(new Error("buffer overflow "+s.length+" > "+r)):s.length==r&&l()}(t.value)}))}),(function(t){console.log(t)}));if(t&&t.then)return t.then((function(){}))}));return Promise.resolve(m&&m.then?m.then(p):p())}throw new Error("serial port not found")}catch(t){return Promise.reject(t)}}({reader:r},u,f)).then((function(t){if(s&&!function(t,e){if(y.isBuffer(t)&&y.isBuffer(e)){if("function"==typeof t.equals)return t.equals(e);if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}}(t,s))throw new Error(a+" response mismatch: "+t.toString("hex")+", "+s.toString("hex"));return t}))}),(function(t){throw new Error("Sending "+a.toString("hex")+": "+t.message)})))}throw new Error("serial port not found")}catch(t){return Promise.reject(t)}},v=function(t,e,r){try{var i=function(t){if(u)return t;throw new Error("Sync failed after "+e+" attempts")},u=!1;console.log("sync");var s={cmd:[d.Cmnd_STK_GET_SYNC],responseData:d.OK_RESPONSE,timeout:r},f=0,a=n((function(){return!u&&f<=e}),void 0,(function(){function r(t){if(u)return t;f<=e&&console.log("failed! will try again ("+f+")")}f+=1;var n=o((function(){return Promise.resolve(m(t,s)).then((function(t){return console.log("sync complete",t,f),u=!0,t}))}),(function(t){console.log(t)}));return n&&n.then?n.then(r):r(n)}));return Promise.resolve(a&&a.then?a.then(i):i(a))}catch(t){return Promise.reject(t)}},w=function(t,e,r){try{console.log("load address");var n={cmd:[d.Cmnd_STK_LOAD_ADDRESS,255&e,e>>8&255],responseData:d.OK_RESPONSE,timeout:r};return Promise.resolve(o((function(){return Promise.resolve(m(t,n)).then((function(t){return console.log("loaded address",t),t}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}};module.exports={isAvailable:function(){return navigator&&navigator.serial},connect:function(){try{var t=!1,e={filters:[{vendorId:9025}]},r=o((function(){return Promise.resolve(navigator.serial.requestPort(e)).then((function(e){return Promise.resolve(e.open({baudrate:57600})).then((function(){var r=e.readable.getReader(),n=e.writable.getWriter();return t=!0,{port:e,reader:r,writer:n}}))}))}),(function(t){console.log(t)}));return Promise.resolve(r&&r.then?r.then((function(e){return t?e:null})):t?r:null)}catch(t){return Promise.reject(t)}},parseHex:function(t){var e=function(t,e){t instanceof y&&(t=t.toString("ascii"));for(var r=y.alloc(8192),n=0,o=0,i=null,u=null,s=0,f=0;f+11<=t.length;){if(":"!==t.charAt(f++))throw new Error("Line "+(s+1)+" does not start with a colon (:).");s++;var a=parseInt(t.substr(f,2),16);f+=2;var h=parseInt(t.substr(f,4),16);f+=4;var c=parseInt(t.substr(f,2),16),l=t.substr(f+=2,2*a),p=y.from(l,"hex");f+=2*a;var g=parseInt(t.substr(f,2),16);f+=2;for(var d=a+(h>>8)+h+c&255,m=0;m<a;m++)d=d+p[m]&255;if(g!==(d=256-d&255))throw new Error("Invalid checksum on line "+s+": got "+g+", but expected "+d);switch(c){case 0:var v=o+h;if(v+a>=r.length){var w=y.alloc(2*(v+a));r.copy(w,0,0,n),r=w}v>n&&r.fill(255,n,v),p.copy(r,v),n=Math.max(n,v+a);break;case 1:if(0!==a)throw new Error("Invalid EOF record on line "+s+".");return{data:r.slice(0,n),startSegmentAddress:i,startLinearAddress:u};case 2:if(2!==a||0!==h)throw new Error("Invalid extended segment address record on line "+s+".");o=parseInt(l,16)<<4;break;case 3:if(4!==a||0!==h)throw new Error("Invalid start segment address record on line "+s+".");i=parseInt(l,16);break;case 4:if(2!==a||0!==h)throw new Error("Invalid extended linear address record on line "+s+".");o=parseInt(l,16)<<16;break;case 5:if(4!==a||0!==h)throw new Error("Invalid start linear address record on line "+s+".");u=parseInt(l,16);break;default:throw new Error("Invalid record type ("+c+") on line "+s)}"\r"===t.charAt(f)&&f++,"\n"===t.charAt(f)&&f++}throw new Error("Unexpected end of input: missing or invalid EOF record.")}(t).data;return console.log(e),e},flash:function(t,e,r){try{return console.log("will flash .hex file on board..."),Promise.resolve(o((function(){return Promise.resolve(function(t){try{return t.port.setSignals({rts:!0,dtr:!0}),Promise.resolve(new Promise((function(t){return setTimeout(t,250)}))).then((function(){return t.port.setSignals({rts:!1,dtr:!1}),Promise.resolve(new Promise((function(t){return setTimeout(t,50)}))).then((function(){}))}))}catch(t){return Promise.reject(t)}}(t)).then((function(){return Promise.resolve(function(t,e,r){try{var i={pagesizehigh:r.pagesizehigh<<8&255,pagesizelow:255&r.pagesizelow},u=o((function(){return Promise.resolve(v(t,3,r.timeout)).then((function(){return Promise.resolve(v(t,3,r.timeout)).then((function(){return Promise.resolve(v(t,3,r.timeout)).then((function(){var u=y.from(r.signature);return Promise.resolve(function(t,e,r){try{console.log("verify signature");var n=y.concat([y.from([d.Resp_STK_INSYNC]),e,y.from([d.Resp_STK_OK])]),i={cmd:[d.Cmnd_STK_READ_SIGN],responseLength:n.length,timeout:r};return Promise.resolve(o((function(){return Promise.resolve(m(t,i)).then((function(t){return t?console.log("confirm signature",t,t.toString("hex")):console.log("confirm signature","no data"),t}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}}(t,u,r.timeout)).then((function(){return Promise.resolve(function(t,e,r){try{console.log("set device");var n={cmd:[d.Cmnd_STK_SET_DEVICE,e.devicecode||0,e.revision||0,e.progtype||0,e.parmode||0,e.polling||0,e.selftimed||0,e.lockbytes||0,e.fusebytes||0,e.flashpollval1||0,e.flashpollval2||0,e.eeprompollval1||0,e.eeprompollval2||0,e.pagesizehigh||0,e.pagesizelow||0,e.eepromsizehigh||0,e.eepromsizelow||0,e.flashsize4||0,e.flashsize3||0,e.flashsize2||0,e.flashsize1||0],responseData:d.OK_RESPONSE,timeout:r};return Promise.resolve(o((function(){return Promise.resolve(m(t,n)).then((function(t){return console.log("setOptions",t),t}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}}(t,i,r.timeout)).then((function(){return Promise.resolve(function(t,e){try{console.log("send enter programming mode");var r={cmd:[d.Cmnd_STK_ENTER_PROGMODE],responseData:d.OK_RESPONSE,timeout:e};return Promise.resolve(o((function(){return Promise.resolve(m(t,r)).then((function(t){return console.log("sent enter programming mode",t),t}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}}(t,r.timeout)).then((function(){return Promise.resolve(function(t,e,r,i){try{var u=function(t){return s?t:(console.log("upload done"),!0)},s=!1;console.log("program");var f,a=0,h=o((function(){var u=n((function(){return a<e.length}),void 0,(function(){return console.log("program page"),Promise.resolve(w(t,a>>1,i)).then((function(){return f=e.slice(a,e.length>r?a+r:e.length-1),Promise.resolve(function(t,e,r){try{console.log("load page");var n=y.concat([y.from([d.Cmnd_STK_PROG_PAGE,e.length>>8,255&e.length,70]),e,y.from([d.Sync_CRC_EOP])]),i={responseData:d.OK_RESPONSE,cmd:n,timeout:r};return Promise.resolve(o((function(){return Promise.resolve(m(t,i)).then((function(t){return console.log("loaded page",t),t}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}}(t,f,i)).then((function(){return console.log("programmed page"),a+=f.length,Promise.resolve(new Promise((function(t){setTimeout((function(){return t("done!")}),4)}))).then((function(){console.log("page done")}))}))}))}));if(u&&u.then)return u.then((function(){}))}),(function(t){throw t}));return Promise.resolve(h&&h.then?h.then(u):u(h))}catch(t){return Promise.reject(t)}}(t,e,r.pageSize,r.timeout)).then((function(){return Promise.resolve(function(t,e,r,i){try{var u=function(t){return s?t:(console.log("verify done"),!0)},s=!1;console.log("verify");var f,a=0,h=o((function(){var u=n((function(){return a<e.length}),void 0,(function(){return console.log("verify page"),Promise.resolve(w(t,a>>1,i)).then((function(){return f=e.slice(a,e.length>r?a+r:e.length-1),Promise.resolve(function(t,e,r,n){try{console.log("verify page");var i=y.concat([y.from([d.Resp_STK_INSYNC]),e,y.from([d.Resp_STK_OK])]),u=e.length>=r?r:e.length,s={cmd:[d.Cmnd_STK_READ_PAGE,u>>8&255,255&u,70],responseLength:i.length,timeout:n};return Promise.resolve(o((function(){return Promise.resolve(m(t,s)).then((function(t){return console.log("confirm page",t,t.toString("hex")),t}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}}(t,f,r,i)).then((function(){return console.log("verified page"),a+=f.length,Promise.resolve(new Promise((function(t){setTimeout((function(){return t("done!")}),4)}))).then((function(){console.log("page done")}))}))}))}));if(u&&u.then)return u.then((function(){}))}),(function(t){throw t}));return Promise.resolve(h&&h.then?h.then(u):u(h))}catch(t){return Promise.reject(t)}}(t,e,r.pageSize,r.timeout)).then((function(){return Promise.resolve(function(t,e){try{console.log("send leave programming mode");var r={cmd:[d.Cmnd_STK_LEAVE_PROGMODE],responseData:d.OK_RESPONSE,timeout:e};return Promise.resolve(o((function(){return Promise.resolve(m(t,r)).then((function(t){return console.log("sent leave programming mode",t),t}))}),(function(t){throw t})))}catch(t){return Promise.reject(t)}}(t,r.timeout)).then((function(){}))}))}))}))}))}))}))}))}))}),(function(t){throw t}));return Promise.resolve(!u||!u.then||u.then((function(t){return!0})))}catch(t){return Promise.reject(t)}}(t,e,r)).then((function(t){return console.log("flash complete successfully"),t}))}))}),(function(t){throw console.log("encountered errors during flash :("),t})))}catch(t){return Promise.reject(t)}}};
//# sourceMappingURL=avrbro.js.map
