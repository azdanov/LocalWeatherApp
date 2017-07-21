!function(e){function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n){},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){f.classList.add("loading"),w.forEach(function(e){return e.classList.remove("visible")}),b.classList.remove("visible"),y.style.backgroundColor="#fff",navigator.geolocation.getCurrentPosition(function(e){var n=Math.round(1e4*e.coords.latitude)/1e4,t=Math.round(1e4*e.coords.longitude)/1e4,a="https://fcc-weather-api.glitch.me/api/current?lat="+n+"&lon="+t;(0,u.default)(a).then(function(e){(0,m.default)(e),f.classList.remove("loading"),b.classList.add("visible"),w.forEach(function(e){return e.classList.add("visible")}),y.style.backgroundColor="#e5e5e5"})})}var i=t(3),o=a(i);t(8);var s=t(10),u=a(s),c=t(11),m=a(c),l=t(16),d=a(l),f=document.getElementById("main"),h=document.getElementById("refresh"),p=document.getElementById("unit"),y=document.getElementById("date"),b=document.getElementById("info-aux"),w=Array.from(document.querySelectorAll("#info-aux .ui.basic"));window.Promise||(window.Promise=o.default),[p,h].forEach(function(e){return e.addEventListener("click",function(){return event.currentTarget.blur()})}),"geolocation"in navigator?(h.addEventListener("click",r),p.addEventListener("click",d.default),r()):(document.getElementById("info-aux").textContent="GPS Unavailable",document.getElementById("info-aux").style.lineHeight=0)},function(e,n,t){(function(n){!function(t){function a(){}function r(e,n){return function(){e.apply(n,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function o(e,n){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(n);e._handled=!0,i._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?s:u)(n.promise,e._value);var a;try{a=t(e._value)}catch(e){return void u(n.promise,e)}s(n.promise,a)})}function s(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof i)return e._state=3,e._value=n,void c(e);if("function"==typeof t)return void l(r(t,n),e)}e._state=1,e._value=n,c(e)}catch(n){u(e,n)}}function u(e,n){e._state=2,e._value=n,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)o(e,e._deferreds[n]);e._deferreds=null}function m(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function l(e,n){var t=!1;try{e(function(e){t||(t=!0,s(n,e))},function(e){t||(t=!0,u(n,e))})}catch(e){if(t)return;t=!0,u(n,e)}}var d=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,n){var t=new this.constructor(a);return o(this,new m(e,n,t)),t},i.all=function(e){var n=Array.prototype.slice.call(e);return new i(function(e,t){function a(i,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,function(e){a(i,e)},t)}n[i]=o,0==--r&&e(n)}catch(e){t(e)}}if(0===n.length)return e([]);for(var r=n.length,i=0;i<n.length;i++)a(i,n[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(n){n(e)})},i.reject=function(e){return new i(function(n,t){t(e)})},i.race=function(e){return new i(function(n,t){for(var a=0,r=e.length;a<r;a++)e[a].then(n,t)})},i._immediateFn="function"==typeof n&&function(e){n(e)}||function(e){d(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=i:t.Promise||(t.Promise=i)}(this)}).call(n,t(4).setImmediate)},function(e,n,t){function a(e,n){this._id=e,this._clearFn=n}var r=Function.prototype.apply;n.setTimeout=function(){return new a(r.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new a(r.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},n))},t(5),n.setImmediate=setImmediate,n.clearImmediate=clearImmediate},function(e,n,t){(function(e,n){!function(e,t){"use strict";function a(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var a={callback:e,args:n};return c[u]=a,s(u),u++}function r(e){delete c[e]}function i(e){var n=e.callback,a=e.args;switch(a.length){case 0:n();break;case 1:n(a[0]);break;case 2:n(a[0],a[1]);break;case 3:n(a[0],a[1],a[2]);break;default:n.apply(t,a)}}function o(e){if(m)setTimeout(o,0,e);else{var n=c[e];if(n){m=!0;try{i(n)}finally{r(e),m=!1}}}}if(!e.setImmediate){var s,u=1,c={},m=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){n.nextTick(function(){o(e)})}}():function(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}()?function(){var n="setImmediate$"+Math.random()+"$",t=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&o(+t.data.slice(n.length))};e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t),s=function(t){e.postMessage(n+t,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){o(e.data)},s=function(n){e.port2.postMessage(n)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;s=function(n){var t=l.createElement("script");t.onreadystatechange=function(){o(n),t.onreadystatechange=null,e.removeChild(t),t=null},e.appendChild(t)}}():function(){s=function(e){setTimeout(o,0,e)}}(),d.setImmediate=a,d.clearImmediate=r}}("undefined"==typeof self?void 0===e?this:e:self)}).call(n,t(6),t(7))},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n){function t(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function r(e){if(m===setTimeout)return setTimeout(e,0);if((m===t||!m)&&setTimeout)return m=setTimeout,setTimeout(e,0);try{return m(e,0)}catch(n){try{return m.call(null,e,0)}catch(n){return m.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===a||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(n){try{return l.call(null,e)}catch(n){return l.call(this,e)}}}function o(){p&&f&&(p=!1,f.length?h=f.concat(h):y=-1,h.length&&s())}function s(){if(!p){var e=r(o);p=!0;for(var n=h.length;n;){for(f=h,h=[];++y<n;)f&&f[y].run();y=-1,n=h.length}f=null,p=!1,i(e)}}function u(e,n){this.fun=e,this.array=n}function c(){}var m,l,d=e.exports={};!function(){try{m="function"==typeof setTimeout?setTimeout:t}catch(e){m=t}try{l="function"==typeof clearTimeout?clearTimeout:a}catch(e){l=a}}();var f,h=[],p=!1,y=-1;d.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new u(e,n)),1!==h.length||p||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,n,t){t(9),e.exports=self.fetch.bind(self)},function(e,n){!function(e){"use strict";function n(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function t(e){return"string"!=typeof e&&(e=String(e)),e}function a(e){var n={next:function(){var n=e.shift();return{done:void 0===n,value:n}}};return b.iterable&&(n[Symbol.iterator]=function(){return n}),n}function r(e){this.map={},e instanceof r?e.forEach(function(e,n){this.append(n,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(n){this.append(n,e[n])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function o(e){return new Promise(function(n,t){e.onload=function(){n(e.result)},e.onerror=function(){t(e.error)}})}function s(e){var n=new FileReader,t=o(n);return n.readAsArrayBuffer(e),t}function u(e){var n=new FileReader,t=o(n);return n.readAsText(e),t}function c(e){for(var n=new Uint8Array(e),t=new Array(n.length),a=0;a<n.length;a++)t[a]=String.fromCharCode(n[a]);return t.join("")}function m(e){if(e.slice)return e.slice(0);var n=new Uint8Array(e.byteLength);return n.set(new Uint8Array(e)),n.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&v(e))this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=m(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var n=e.toUpperCase();return T.indexOf(n)>-1?n:e}function f(e,n){n=n||{};var t=n.body;if(e instanceof f){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,n.headers||(this.headers=new r(e.headers)),this.method=e.method,this.mode=e.mode,t||null==e._bodyInit||(t=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=n.credentials||this.credentials||"omit",!n.headers&&this.headers||(this.headers=new r(n.headers)),this.method=d(n.method||this.method||"GET"),this.mode=n.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&t)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(t)}function h(e){var n=new FormData;return e.trim().split("&").forEach(function(e){if(e){var t=e.split("="),a=t.shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," ");n.append(decodeURIComponent(a),decodeURIComponent(r))}}),n}function p(e){var n=new r;return e.split(/\r?\n/).forEach(function(e){var t=e.split(":"),a=t.shift().trim();if(a){var r=t.join(":").trim();n.append(a,r)}}),n}function y(e,n){n||(n={}),this.type="default",this.status="status"in n?n.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new r(n.headers),this.url=n.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&w.indexOf(Object.prototype.toString.call(e))>-1};r.prototype.append=function(e,a){e=n(e),a=t(a);var r=this.map[e];this.map[e]=r?r+","+a:a},r.prototype.delete=function(e){delete this.map[n(e)]},r.prototype.get=function(e){return e=n(e),this.has(e)?this.map[e]:null},r.prototype.has=function(e){return this.map.hasOwnProperty(n(e))},r.prototype.set=function(e,a){this.map[n(e)]=t(a)},r.prototype.forEach=function(e,n){for(var t in this.map)this.map.hasOwnProperty(t)&&e.call(n,this.map[t],t,this)},r.prototype.keys=function(){var e=[];return this.forEach(function(n,t){e.push(t)}),a(e)},r.prototype.values=function(){var e=[];return this.forEach(function(n){e.push(n)}),a(e)},r.prototype.entries=function(){var e=[];return this.forEach(function(n,t){e.push([t,n])}),a(e)},b.iterable&&(r.prototype[Symbol.iterator]=r.prototype.entries);var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},l.call(f.prototype),l.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var A=[301,302,303,307,308];y.redirect=function(e,n){if(-1===A.indexOf(n))throw new RangeError("Invalid status code");return new y(null,{status:n,headers:{location:e}})},e.Headers=r,e.Request=f,e.Response=y,e.fetch=function(e,n){return new Promise(function(t,a){var r=new f(e,n),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;t(new y(n,e))},i.onerror=function(){a(new TypeError("Network request failed"))},i.ontimeout=function(){a(new TypeError("Network request failed"))},i.open(r.method,r.url,!0),"include"===r.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),r.headers.forEach(function(e,n){i.setRequestHeader(n,e)}),i.send(void 0===r._bodyInit?null:r._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,n,t){"use strict";function a(e){if(!e)throw new Error("No address provided!");return fetch(e).then(function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()}).catch(function(e){throw new Error(e.message)})}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var n=new Date,t=(0,o.default)(e.sys.country),a=(0,m.default)(e.wind.speed);f.className=(0,d.default)(e,n),h.textContent=e.weather[0].description[0].toUpperCase()+e.weather[0].description.slice(1),y.textContent=(0,u.default)(n),b.textContent=n.getDate(),w.textContent=e.name,v.textContent=t,g.className="wi wi-wind-beaufort-"+a,g.title="Beaufort Scale "+a,A.textContent=e.main.humidity,B.textContent=e.clouds.all,"metric"===T.dataset.type?(p.textContent=parseFloat(e.main.temp.toFixed(1)),T.textContent=parseFloat(e.wind.speed.toFixed(1))):(p.textContent=parseFloat((1.8*e.main.temp+32).toFixed(1)),T.textContent=parseFloat((2.236936*e.wind.speed).toFixed(1)))}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;var i=t(12),o=a(i),s=t(13),u=a(s),c=t(14),m=a(c),l=t(15),d=a(l),f=document.getElementById("weather-icon"),h=document.getElementById("weather-description"),p=document.getElementById("temperature-num"),y=document.getElementById("month"),b=document.getElementById("day-num"),w=document.getElementById("city"),v=document.getElementById("country"),g=document.getElementById("wind-icon"),T=document.getElementById("wind-speed"),A=document.getElementById("humidity"),B=document.getElementById("cloudiness")},function(e,n,t){"use strict";function a(e){var n=e.toUpperCase();return r[n]&&r[n].name||n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var r={AF:{name:"Afghanistan"},AX:{name:"Aland Islands"},AL:{name:"Albania"},DZ:{name:"Algeria"},AS:{name:"American Samoa"},AD:{name:"Andorra"},AO:{name:"Angola"},AI:{name:"Anguilla"},AQ:{name:"Antarctica"},AG:{name:"Antigua And Barbuda"},AR:{name:"Argentina"},AM:{name:"Armenia"},AW:{name:"Aruba"},AU:{name:"Australia"},AT:{name:"Austria"},AZ:{name:"Azerbaijan"},BS:{name:"Bahamas"},BH:{name:"Bahrain"},BD:{name:"Bangladesh"},BB:{name:"Barbados"},BY:{name:"Belarus"},BE:{name:"Belgium"},BZ:{name:"Belize"},BJ:{name:"Benin"},BM:{name:"Bermuda"},BT:{name:"Bhutan"},BO:{name:"Bolivia"},BA:{name:"Bosnia And Herzegovina"},BW:{name:"Botswana"},BV:{name:"Bouvet Island"},BR:{name:"Brazil"},IO:{name:"British Indian Ocean Territory"},BN:{name:"Brunei Darussalam"},BG:{name:"Bulgaria"},BF:{name:"Burkina Faso"},BI:{name:"Burundi"},KH:{name:"Cambodia"},CM:{name:"Cameroon"},CA:{name:"Canada"},CV:{name:"Cape Verde"},KY:{name:"Cayman Islands"},CF:{name:"Central African Republic"},TD:{name:"Chad"},CL:{name:"Chile"},CN:{name:"China"},CX:{name:"Christmas Island"},CC:{name:"Cocos (Keeling) Islands"},CO:{name:"Colombia"},KM:{name:"Comoros"},CG:{name:"Congo"},CD:{name:"Congo, Democratic Republic"},CK:{name:"Cook Islands"},CR:{name:"Costa Rica"},CI:{name:"Cote D'Ivoire"},HR:{name:"Croatia"},CU:{name:"Cuba"},CY:{name:"Cyprus"},CZ:{name:"Czech Republic"},DK:{name:"Denmark"},DJ:{name:"Djibouti"},DM:{name:"Dominica"},DO:{name:"Dominican Republic"},EC:{name:"Ecuador"},EG:{name:"Egypt"},SV:{name:"El Salvador"},GQ:{name:"Equatorial Guinea"},ER:{name:"Eritrea"},EE:{name:"Estonia"},ET:{name:"Ethiopia"},FK:{name:"Falkland Islands (Malvinas)"},FO:{name:"Faroe Islands"},FJ:{name:"Fiji"},FI:{name:"Finland"},FR:{name:"France"},GF:{name:"French Guiana"},PF:{name:"French Polynesia"},TF:{name:"French Southern Territories"},GA:{name:"Gabon"},GM:{name:"Gambia"},GE:{name:"Georgia"},DE:{name:"Germany"},GH:{name:"Ghana"},GI:{name:"Gibraltar"},GR:{name:"Greece"},GL:{name:"Greenland"},GD:{name:"Grenada"},GP:{name:"Guadeloupe"},GU:{name:"Guam"},GT:{name:"Guatemala"},GG:{name:"Guernsey"},GN:{name:"Guinea"},GW:{name:"Guinea-Bissau"},GY:{name:"Guyana"},HT:{name:"Haiti"},HM:{name:"Heard Island & Mcdonald Islands"},VA:{name:"Holy See (Vatican City State)"},HN:{name:"Honduras"},HK:{name:"Hong Kong"},HU:{name:"Hungary"},IS:{name:"Iceland"},IN:{name:"India"},ID:{name:"Indonesia"},IR:{name:"Iran, Islamic Republic Of"},IQ:{name:"Iraq"},IE:{name:"Ireland"},IM:{name:"Isle Of Man"},IL:{name:"Israel"},IT:{name:"Italy"},JM:{name:"Jamaica"},JP:{name:"Japan"},JE:{name:"Jersey"},JO:{name:"Jordan"},KZ:{name:"Kazakhstan"},KE:{name:"Kenya"},KI:{name:"Kiribati"},KR:{name:"Korea"},KW:{name:"Kuwait"},KG:{name:"Kyrgyzstan"},LA:{name:"Lao People's Democratic Republic"},LV:{name:"Latvia"},LB:{name:"Lebanon"},LS:{name:"Lesotho"},LR:{name:"Liberia"},LY:{name:"Libyan Arab Jamahiriya"},LI:{name:"Liechtenstein"},LT:{name:"Lithuania"},LU:{name:"Luxembourg"},MO:{name:"Macao"},MK:{name:"Macedonia"},MG:{name:"Madagascar"},MW:{name:"Malawi"},MY:{name:"Malaysia"},MV:{name:"Maldives"},ML:{name:"Mali"},MT:{name:"Malta"},MH:{name:"Marshall Islands"},MQ:{name:"Martinique"},MR:{name:"Mauritania"},MU:{name:"Mauritius"},YT:{name:"Mayotte"},MX:{name:"Mexico"},FM:{name:"Micronesia, Federated States Of"},MD:{name:"Moldova"},MC:{name:"Monaco"},MN:{name:"Mongolia"},ME:{name:"Montenegro"},MS:{name:"Montserrat"},MA:{name:"Morocco"},MZ:{name:"Mozambique"},MM:{name:"Myanmar"},NA:{name:"Namibia"},NR:{name:"Nauru"},NP:{name:"Nepal"},NL:{name:"Netherlands"},AN:{name:"Netherlands Antilles"},NC:{name:"New Caledonia"},NZ:{name:"New Zealand"},NI:{name:"Nicaragua"},NE:{name:"Niger"},NG:{name:"Nigeria"},NU:{name:"Niue"},NF:{name:"Norfolk Island"},MP:{name:"Northern Mariana Islands"},NO:{name:"Norway"},OM:{name:"Oman"},PK:{name:"Pakistan"},PW:{name:"Palau"},PS:{name:"Palestinian Territory, Occupied"},PA:{name:"Panama"},PG:{name:"Papua New Guinea"},PY:{name:"Paraguay"},PE:{name:"Peru"},PH:{name:"Philippines"},PN:{name:"Pitcairn"},PL:{name:"Poland"},PT:{name:"Portugal"},PR:{name:"Puerto Rico"},QA:{name:"Qatar"},RE:{name:"Reunion"},RO:{name:"Romania"},RU:{name:"Russian Federation"},RW:{name:"Rwanda"},BL:{name:"Saint Barthelemy"},SH:{name:"Saint Helena"},KN:{name:"Saint Kitts And Nevis"},LC:{name:"Saint Lucia"},MF:{name:"Saint Martin"},PM:{name:"Saint Pierre And Miquelon"},VC:{name:"Saint Vincent And Grenadines"},WS:{name:"Samoa"},SM:{name:"San Marino"},ST:{name:"Sao Tome And Principe"},SA:{name:"Saudi Arabia"},SN:{name:"Senegal"},RS:{name:"Serbia"},SC:{name:"Seychelles"},SL:{name:"Sierra Leone"},SG:{name:"Singapore"},SK:{name:"Slovakia"},SI:{name:"Slovenia"},SB:{name:"Solomon Islands"},SO:{name:"Somalia"},ZA:{name:"South Africa"},GS:{name:"South Georgia And Sandwich Isl."},ES:{name:"Spain"},LK:{name:"Sri Lanka"},SD:{name:"Sudan"},SR:{name:"Suriname"},SJ:{name:"Svalbard And Jan Mayen"},SZ:{name:"Swaziland"},SE:{name:"Sweden"},CH:{name:"Switzerland"},SY:{name:"Syrian Arab Republic"},TW:{name:"Taiwan"},TJ:{name:"Tajikistan"},TZ:{name:"Tanzania"},TH:{name:"Thailand"},TL:{name:"Timor-Leste"},TG:{name:"Togo"},TK:{name:"Tokelau"},TO:{name:"Tonga"},TT:{name:"Trinidad And Tobago"},TN:{name:"Tunisia"},TR:{name:"Turkey"},TM:{name:"Turkmenistan"},TC:{name:"Turks And Caicos Islands"},TV:{name:"Tuvalu"},UG:{name:"Uganda"},UA:{name:"Ukraine"},AE:{name:"United Arab Emirates"},GB:{name:"United Kingdom"},US:{name:"United States"},UM:{name:"United States Outlying Islands"},UY:{name:"Uruguay"},UZ:{name:"Uzbekistan"},VU:{name:"Vanuatu"},VE:{name:"Venezuela"},VN:{name:"Viet Nam"},VG:{name:"Virgin Islands, British"},VI:{name:"Virgin Islands, U.S."},WF:{name:"Wallis And Futuna"},EH:{name:"Western Sahara"},YE:{name:"Yemen"},ZM:{name:"Zambia"},ZW:{name:"Zimbabwe"}}},function(e,n,t){"use strict";function a(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(e,n,t){"use strict";function a(e){return[.2,1.5,3.3,5.5,7.9,10.7,13.8,17.1,20.7,24.4,28.4,32.6].reduce(function(n,t){return n+(e>t?1:0)},0)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(e,n,t){"use strict";function a(e,n){var t=n.getHours(),a=new Date(1e3*e.sys.sunrise).getHours(),i=new Date(1e3*e.sys.sunset).getHours(),o=e.weather[0].main.toLowerCase();return"wi "+(t>=a&&i>=t?r.day[o]:r.night[o])+" wi-main"}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var r={day:{thunderstorm:"wi-day-thunderstorm",drizzle:"wi-day-sleet",rain:"wi-day-rain",snow:"wi-day-snow",clear:"wi-day-sunny",clouds:"wi-day-cloudy-high"},night:{thunderstorm:"wi-night-alt-snow-thunderstorm",drizzle:"wi-night-alt-sleet",rain:"wi-night-alt-rain",snow:"wi-night-alt-snow",clear:"wi-night-clear",clouds:"wi-night-alt-cloudy-high"}}},function(e,n,t){"use strict";function a(){var e=Array.from(document.querySelectorAll("[data-type]")),n=document.getElementById("unit");e.forEach(function(e){if("metric"===e.dataset.type)switch(n.textContent="Imperial",e.dataset.type="imperial",e.id){case"temperature-num":e.textContent=parseFloat((1.8*e.textContent+32).toFixed(1));break;case"temperature-unit":e.textContent="F";break;case"wind-speed":e.textContent=parseFloat((2.236936*e.textContent).toFixed(1));break;case"wind-unit":e.textContent="mph"}else switch(e.dataset.type="metric",n.textContent="Metric",e.id){case"temperature-num":e.textContent=parseFloat((5*(e.textContent-32)/9).toFixed(1));break;case"temperature-unit":e.textContent="C";break;case"wind-speed":e.textContent=parseFloat((e.textContent/2.236936).toFixed(1));break;case"wind-unit":e.textContent="m/s"}})}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a}]);
//# sourceMappingURL=main.a13874acecd2b694e222.js.map