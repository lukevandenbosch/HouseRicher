(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1gqn":function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},KKCa:function(t,e){t.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}},MCLT:function(t,e,i){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),i={},n=0;n<e.length;n++)i[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return i},r=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],i=0;i<arguments.length;i++)e.push(c(arguments[i]));return e.join(" ")}i=1;for(var n=arguments,o=n.length,a=String(t).replace(r,(function(t){if("%%"===t)return"%";if(i>=o)return t;switch(t){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch(e){return"[Circular]"}default:return t}})),b=n[i];i<o;b=n[++i])m(b)||!W(b)?a+=" "+b:a+=" "+c(b);return a},e.deprecate=function(t,i){if("undefined"!=typeof process&&!0===process.noDeprecation)return t;if("undefined"==typeof process)return function(){return e.deprecate(t,i).apply(this,arguments)};var n=!1;return function(){if(!n){if(process.throwDeprecation)throw new Error(i);process.traceDeprecation?console.trace(i):console.error(i),n=!0}return t.apply(this,arguments)}};var o,a={};function c(t,i){var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(i)?n.showHidden=i:i&&e._extend(n,i),h(n.showHidden)&&(n.showHidden=!1),h(n.depth)&&(n.depth=2),h(n.colors)&&(n.colors=!1),h(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=b),s(n,t,n.depth)}function b(t,e){var i=c.styles[e];return i?"\x1b["+c.colors[i][0]+"m"+t+"\x1b["+c.colors[i][1]+"m":t}function l(t,e){return t}function s(t,i,n){if(t.customInspect&&i&&x(i.inspect)&&i.inspect!==e.inspect&&(!i.constructor||i.constructor.prototype!==i)){var r=i.inspect(n,t);return v(r)||(r=s(t,r,n)),r}var o=function(t,e){if(h(e))return t.stylize("undefined","undefined");if(v(e)){var i="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(i,"string")}return g(e)?t.stylize(""+e,"number"):d(e)?t.stylize(""+e,"boolean"):m(e)?t.stylize("null","null"):void 0}(t,i);if(o)return o;var a=Object.keys(i),c=function(t){var e={};return t.forEach((function(t,i){e[t]=!0})),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(i)),w(i)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return u(i);if(0===a.length){if(x(i))return t.stylize("[Function"+(i.name?": "+i.name:"")+"]","special");if(X(i))return t.stylize(RegExp.prototype.toString.call(i),"regexp");if(y(i))return t.stylize(Date.prototype.toString.call(i),"date");if(w(i))return u(i)}var b,l="",W=!1,S=["{","}"];return f(i)&&(W=!0,S=["[","]"]),x(i)&&(l=" [Function"+(i.name?": "+i.name:"")+"]"),X(i)&&(l=" "+RegExp.prototype.toString.call(i)),y(i)&&(l=" "+Date.prototype.toUTCString.call(i)),w(i)&&(l=" "+u(i)),0!==a.length||W&&0!=i.length?n<0?X(i)?t.stylize(RegExp.prototype.toString.call(i),"regexp"):t.stylize("[Object]","special"):(t.seen.push(i),b=W?function(t,e,i,n,r){for(var o=[],a=0,c=e.length;a<c;++a)k(e,String(a))?o.push(p(t,e,i,n,String(a),!0)):o.push("");return r.forEach((function(r){r.match(/^\d+$/)||o.push(p(t,e,i,n,r,!0))})),o}(t,i,n,c,a):a.map((function(e){return p(t,i,n,c,e,W)})),t.seen.pop(),function(t,e,i){return t.reduce((function(t,e){return e.indexOf("\n"),t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?i[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+i[1]:i[0]+e+" "+t.join(", ")+" "+i[1]}(b,l,S)):S[0]+l+S[1]}function u(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,i,n,r,o){var a,c,b;if((b=Object.getOwnPropertyDescriptor(e,r)||{value:e[r]}).get?c=t.stylize(b.set?"[Getter/Setter]":"[Getter]","special"):b.set&&(c=t.stylize("[Setter]","special")),k(n,r)||(a="["+r+"]"),c||(t.seen.indexOf(b.value)<0?(c=m(i)?s(t,b.value,null):s(t,b.value,i-1)).indexOf("\n")>-1&&(c=o?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),h(a)){if(o&&r.match(/^\d+$/))return c;(a=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+c}function f(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function m(t){return null===t}function g(t){return"number"==typeof t}function v(t){return"string"==typeof t}function h(t){return void 0===t}function X(t){return W(t)&&"[object RegExp]"===S(t)}function W(t){return"object"==typeof t&&null!==t}function y(t){return W(t)&&"[object Date]"===S(t)}function w(t){return W(t)&&("[object Error]"===S(t)||t instanceof Error)}function x(t){return"function"==typeof t}function S(t){return Object.prototype.toString.call(t)}function P(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(h(o)&&(o=process.env.NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(o)){var i=process.pid;a[t]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",t,i,n)}}else a[t]=function(){};return a[t]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=f,e.isBoolean=d,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=v,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=h,e.isRegExp=X,e.isObject=W,e.isDate=y,e.isError=w,e.isFunction=x,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=i("1gqn");var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(){var t=new Date,e=[P(t.getHours()),P(t.getMinutes()),P(t.getSeconds())].join(":");return[t.getDate(),R[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",E(),e.format.apply(e,arguments))},e.inherits=i("KKCa"),e._extend=function(t,e){if(!e||!W(e))return t;for(var i=Object.keys(e),n=i.length;n--;)t[i[n]]=e[i[n]];return t};var O="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function D(t,e){if(!t){var i=new Error("Promise was rejected with a falsy value");i.reason=t,t=i}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(O&&t[O]){var e;if("function"!=typeof(e=t[O]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,O,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,i,n=new Promise((function(t,n){e=t,i=n})),r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);r.push((function(t,n){t?i(t):e(n)}));try{t.apply(this,r)}catch(a){i(a)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),O&&Object.defineProperty(e,O,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=O,e.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function e(){for(var e=[],i=0;i<arguments.length;i++)e.push(arguments[i]);var n=e.pop();if("function"!=typeof n)throw new TypeError("The last argument must be of type Function");var r=this,o=function(){return n.apply(r,arguments)};t.apply(this,e).then((function(t){process.nextTick(o,null,t)}),(function(t){process.nextTick(D,t,o)}))}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,n(t)),e}},cDHM:function(t,e,i){"use strict";i.r(e),i.d(e,"UserViewsModule",(function(){return V}));var n=i("ofXK"),r=i("tyNb"),o=i("1u1q"),a=i("bhfF"),c=i("JMRq"),b=i("fXoL"),l=i("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.profileContentApiUrl="api/profile-content",this.profileBannerApiUrl="api/profile-banner",this.editDescription=!1,this.editProfilePicture=!1}resolve(t,e){return new Promise((t,e)=>{Promise.all([this.fetchProfileBannerData(),this.fetchProfileContentData()]).then(()=>{t()},e)})}fetchProfileBannerData(){return new Promise((t,e)=>{this.http.get(this.profileBannerApiUrl).subscribe(e=>{this.bannerData=e,t(e)},e)})}fetchProfileContentData(){return new Promise((t,e)=>{this.http.get(this.profileContentApiUrl).subscribe(e=>{this.contentData=e,t(e)},e)})}}return t.\u0275fac=function(e){return new(e||t)(b.fc(l.b))},t.\u0275prov=b.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=i("DO/L"),p=i("MCLT"),f=i("ho4I"),d=i("SmQ2");function m(t,e){if(1&t&&(b.Xb(0,"li",28),b.Xb(1,"span",29),b.Rc(2),b.oc(3,"thousandSuff"),b.Wb(),b.Xb(4,"span",30),b.Rc(5),b.Wb(),b.Wb()),2&t){const t=e.$implicit;b.Eb(2),b.Sc(b.pc(3,2,t.value)),b.Eb(3),b.Sc(t.label)}}let g=(()=>{class t{constructor(t){this.profilePageService=t,this.bannerData=this.profilePageService.bannerData}aboutClick(t){this.profilePageService.aboutButton=t}profilePicEdit(){this.profilePageService.aboutButton="about",this.profilePageService.editDescription=!0,this.profilePageService.editProfilePicture=!0,console.log(this.profilePageService.editProfilePicture)}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(s))},t.\u0275cmp=b.Lb({type:t,selectors:[["profile-banner"]],decls:41,vars:8,consts:[[1,"profile__banner"],[1,"profile__banner-detail"],[1,"dt-avatar-wrapper"],[3,"click"],["img_class","dt-avatar size-90 mr-sm-4","firstName","Reece Jacklin",3,"src"],[1,"dt-avatar-info"],[1,"dt-avatar-name","display-4","mb-2","font-weight-light"],[1,"f-16"],[1,"mb-5",2,"margin-top","10px"],[1,"d-flex","mb-1"],[1,"rating-container","flex-column"],[2,"display","flex"],[1,"rating-1"],[1,"rating-2"],[1,"rating-3"],[1,"rating-4"],[1,"rating-5"],[1,"ratings-review","f-16",2,"color","#e6e6e6"],[1,"count-number",2,"color","#e6e6e6"],[1,"ml-sm-auto"],[1,"dt-list","dt-list-bordered","dt-list-col-4"],["class","dt-list__item text-center","style","padding-right: 70px;",4,"ngFor","ngForOf"],[1,"profile__banner-navigation"],[1,"navbar-nav"],[1,"nav-item","active"],[1,"nav-link","button-about-switch",3,"click"],[1,"nav-item"],[1,"text-light-gray"],[1,"dt-list__item","text-center",2,"padding-right","70px"],[1,"h4","font-weight-500","mb-0","text-white"],[1,"d-block","f-12"]],template:function(t,e){1&t&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"div",2),b.Xb(3,"a",3),b.jc("click",(function(){return e.profilePicEdit()})),b.Sb(4,"avatar",4),b.Wb(),b.Xb(5,"div",5),b.Xb(6,"span",6),b.Rc(7),b.Wb(),b.Xb(8,"span",7),b.Rc(9),b.Wb(),b.Xb(10,"div",8),b.Xb(11,"div",9),b.Xb(12,"div",10),b.Xb(13,"div",11),b.Xb(14,"div",12),b.Rc(15,"\u2606"),b.Wb(),b.Xb(16,"div",13),b.Rc(17,"\u2606"),b.Wb(),b.Xb(18,"div",14),b.Rc(19,"\u2606"),b.Wb(),b.Xb(20,"div",15),b.Rc(21,"\u2606"),b.Wb(),b.Xb(22,"div",16),b.Rc(23,"\u2606"),b.Wb(),b.Wb(),b.Xb(24,"div",17),b.Xb(25,"span",18),b.Rc(26,"350"),b.Wb(),b.Rc(27," Reviews "),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(28,"div",19),b.Xb(29,"ul",20),b.Pc(30,m,6,4,"li",21),b.Wb(),b.Wb(),b.Wb(),b.Xb(31,"div",22),b.Xb(32,"ul",23),b.Xb(33,"li",24),b.Xb(34,"a",25),b.jc("click",(function(){return e.aboutClick("about")})),b.Rc(35,"About"),b.Wb(),b.Wb(),b.Xb(36,"li",26),b.Xb(37,"a",25),b.jc("click",(function(){return e.aboutClick("following")})),b.Rc(38,"Following "),b.Xb(39,"small",27),b.Rc(40,"287"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.Eb(4),b.uc("src",e.bannerData.user.image),b.Eb(3),b.Sc(e.bannerData.user.name),b.Eb(2),b.Sc(e.bannerData.user.address),b.Eb(21),b.tc("ngForOf",e.bannerData.feeds),b.Eb(4),b.Nc("following"==e.profilePageService.aboutButton?"color: #e6e6e6;":"color: white;"),b.Eb(3),b.Nc("following"==e.profilePageService.aboutButton?"color: white;":"color: #e6e6e6;"))},directives:[f.a,n.t],pipes:[d.a],styles:[".button-about-switch[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var v=i("zhXz");const h=[[["","icon",""]],[["","text",""]]],X=["[icon]","[text]"];let W=(()=>{class t{constructor(){this.classList="media"}ngOnInit(){this.class&&(this.classList+=" "+this.class)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Lb({type:t,selectors:[["gx-media-icon-card"]],hostVars:2,hostBindings:function(t,e){2&t&&b.Gb(e.classList)},inputs:{class:"class",label:"label"},ngContentSelectors:X,decls:5,vars:1,consts:[[1,"media-body"],[1,"d-block","text-light-gray","f-12","mb-1"]],template:function(t,e){1&t&&(b.sc(h),b.rc(0),b.Xb(1,"div",0),b.Xb(2,"span",1),b.Rc(3),b.Wb(),b.rc(4,1),b.Wb()),2&t&&(b.Eb(3),b.Sc(e.label))},encapsulation:2}),t})();var y=i("/Tuz"),w=i("3Pt+");function x(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Xb(1,"ul",11),b.Xb(2,"li",12),b.Xb(3,"a",13),b.Sb(4,"gx-icon",14),b.Wb(),b.Wb(),b.Xb(5,"li",12),b.Xb(6,"a",13),b.Sb(7,"gx-icon",15),b.Wb(),b.Wb(),b.Xb(8,"li",12),b.Xb(9,"a",13),b.Sb(10,"gx-icon",16),b.Wb(),b.Wb(),b.Xb(11,"li",12),b.Xb(12,"a",13),b.Sb(13,"gx-icon",17),b.Wb(),b.Wb(),b.Wb(),b.Xb(14,"a",18),b.jc("click",(function(){return b.Gc(t),b.nc(2).editContact=!0})),b.Sb(15,"gx-icon",19),b.Xb(16,"span",20),b.Rc(17,"Edit"),b.Wb(),b.Wb(),b.Wb()}if(2&t){const t=b.nc(2);b.Eb(3),b.uc("href",t.contactDetail.facebook,b.Ic),b.Eb(3),b.uc("href",t.contactDetail.linkedin,b.Ic),b.Eb(3),b.uc("href",t.contactDetail.twitter,b.Ic),b.Eb(3),b.uc("href",t.contactDetail.instagram,b.Ic)}}function S(t,e){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"gx-media-icon-card",1),b.Sb(2,"gx-icon",2),b.Xb(3,"a",3),b.Rc(4),b.Wb(),b.Wb(),b.Xb(5,"gx-media-icon-card",4),b.Sb(6,"gx-icon",5),b.Xb(7,"a",6),b.Rc(8),b.Wb(),b.Wb(),b.Xb(9,"gx-media-icon-card",7),b.Sb(10,"gx-icon",8),b.Xb(11,"span",9),b.Rc(12),b.Wb(),b.Wb(),b.Xb(13,"gx-media-icon-card",10),b.Sb(14,"gx-icon",8),b.Xb(15,"span",9),b.Rc(16),b.Wb(),b.Wb(),b.Pc(17,x,18,4,"div",0),b.Wb()),2&t){const t=b.nc();b.Eb(4),b.Sc(t.contactDetail.email),b.Eb(3),b.uc("href",t.contactDetail.website,b.Ic),b.Eb(1),b.Sc(t.contactDetail.website),b.Eb(4),b.Sc(t.contactDetail.PhoneNumberCell),b.Eb(4),b.Sc(t.contactDetail.phoneNumberOffice),b.Eb(1),b.tc("ngIf",!t.editContact)}}function P(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Xb(1,"form"),b.Xb(2,"div",21),b.Xb(3,"label",22),b.Rc(4,"Email"),b.Wb(),b.Xb(5,"div",23),b.Sb(6,"input",24),b.Wb(),b.Wb(),b.Xb(7,"div",21),b.Xb(8,"label",22),b.Rc(9,"Website"),b.Wb(),b.Xb(10,"div",23),b.Sb(11,"input",25),b.Wb(),b.Wb(),b.Xb(12,"div",21),b.Xb(13,"label",22),b.Rc(14,"Cell"),b.Wb(),b.Xb(15,"div",23),b.Sb(16,"input",26),b.Wb(),b.Wb(),b.Xb(17,"div",21),b.Xb(18,"label",22),b.Rc(19,"Office"),b.Wb(),b.Xb(20,"div",23),b.Sb(21,"input",27),b.Wb(),b.Wb(),b.Xb(22,"div",21),b.Xb(23,"label",22),b.Rc(24,"Facebook"),b.Wb(),b.Xb(25,"div",23),b.Sb(26,"input",28),b.Wb(),b.Wb(),b.Xb(27,"div",21),b.Xb(28,"label",22),b.Rc(29,"Linkedin"),b.Wb(),b.Xb(30,"div",23),b.Sb(31,"input",29),b.Wb(),b.Wb(),b.Xb(32,"div",21),b.Xb(33,"label",22),b.Rc(34,"Twitter"),b.Wb(),b.Xb(35,"div",23),b.Sb(36,"input",30),b.Wb(),b.Wb(),b.Xb(37,"div",21),b.Xb(38,"label",22),b.Rc(39,"Instagram"),b.Wb(),b.Xb(40,"div",23),b.Sb(41,"input",31),b.Wb(),b.Wb(),b.Xb(42,"button",32),b.jc("click",(function(){return b.Gc(t),b.nc().editContact=!1})),b.Rc(43,"Cancel"),b.Wb(),b.Xb(44,"button",33),b.Rc(45,"Submit"),b.Wb(),b.Wb(),b.Wb()}if(2&t){const t=b.nc();b.Eb(6),b.uc("value",t.contactDetail.email),b.Eb(5),b.uc("value",t.contactDetail.website),b.Eb(5),b.uc("value",t.contactDetail.phoneNumberOffice),b.Eb(5),b.uc("value",t.contactDetail.PhoneNumberCell),b.Eb(5),b.uc("value",t.contactDetail.facebook),b.Eb(5),b.uc("value",t.contactDetail.linkedin),b.Eb(5),b.uc("value",t.contactDetail.twitter),b.Eb(5),b.uc("value",t.contactDetail.instagram)}}let R=(()=>{class t{constructor(){this.editContact=!1}ngOnInit(){this.contactDetail={email:"kiley.brown@example.com",website:"https://www.example.com",brokerage:"Century 21",phoneNumberOffice:"+1-987 (454) 987",PhoneNumberCell:"+1-987 (454) 987",facebook:"https://www.facebook.com/user/bob",linkedin:"https://www.linkedin.com/user/bob",twitter:"https://www.twitter.com/user/bob",instagram:"https://www.instagram.com/user/bob",about:"This is my paragraph about myself. I hope no one notices that is repeats after a while. But this won't go on forever. I am rambling at this point, but I need this to be a longer verson of an about page. please notice that this is myself talking an not anyone else. I am not a realtor, but I am trying to help. Please listen.",profilePicture:"https://via.placeholder.com/150X150",address:"123 Fake Street",city:"Toronto",provinceState:"Ontario"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Lb({type:t,selectors:[["profile-contact"]],decls:2,vars:2,consts:[[4,"ngIf"],["label","Mail",1,"mb-5"],["name","mail","size","xl","icon","",1,"mr-5"],["href","javascript:void(0)","text",""],["label","Web Page",1,"mb-5"],["name","link","size","xl","icon","",1,"mr-5"],["target","_blank","text","",3,"href"],["label","Cell Phone",1,"mb-5"],["name","phone-o","size","xl","icon","",1,"mr-5"],["text","",1,"h5"],["label","Office Phone",1,"mb-5"],[1,"dt-list","dt-list-sm","dt-list-cm-0","ml-auto",2,"margin-top","50px"],[1,"dt-list__item"],["target","_blank",1,"btn","btn-outline-primary","dt-fab-btn","size-30",3,"href"],["name","facebook","size","xl"],["name","linkedin","size","xl"],["name","twitter","size","xl"],["name","instagram","size","xl"],[1,"no-arrow","btn-hover",2,"float","right","margin-bottom","20px",3,"click"],["name","settings","size","xl",1,"mr-2"],[1,"d-none","d-sm-inline-block"],[1,"form-row","form-spacing"],["for","normal-input-1",1,"col-md-1","col-sm-3","col-form-label","text-sm-right"],[1,"col-md-12","col-sm-9"],["type","email","id","normal-input-1","placeholder","Email",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Web Page",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Cell Phone",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Office Phone",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Facebook",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Linkedin",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Twitter",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Instagram",1,"form-control",3,"value"],["type","button",1,"btn","btn-outline-primary","text-uppercase","ml-auto",2,"margin-right","10px","margin-top","15px","margin-bottom","15px",3,"click"],["type","submit",1,"btn","btn-primary","text-uppercase",2,"margin-right","10px","margin-top","15px","margin-bottom","15px"]],template:function(t,e){1&t&&(b.Pc(0,S,18,6,"div",0),b.Pc(1,P,46,8,"div",0)),2&t&&(b.tc("ngIf",!e.editContact),b.Eb(1),b.tc("ngIf",e.editContact))},directives:[n.u,W,y.a,w.s,w.l,w.m],styles:[".btn-hover[_ngcontent-%COMP%]:hover{cursor:pointer}.form-spacing[_ngcontent-%COMP%]{margin:10px 0}"]}),t})();const E=["*"];let k=(()=>{class t{constructor(){this.active=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Lb({type:t,selectors:[["tab-about-profile"]],inputs:{title:["tabTitle","title"],active:"active"},ngContentSelectors:E,decls:2,vars:1,consts:[[1,"tab-pane",3,"hidden"]],template:function(t,e){1&t&&(b.sc(),b.Xb(0,"div",0),b.rc(1),b.Wb()),2&t&&b.tc("hidden",!e.active)},encapsulation:2}),t})();function O(t,e){if(1&t){const t=b.Yb();b.Xb(0,"li",6),b.jc("click",(function(){b.Gc(t);const i=e.$implicit;return b.nc().selectTab(i)})),b.Xb(1,"a",7),b.Rc(2),b.Wb(),b.Wb()}if(2&t){const t=e.$implicit;b.Eb(1),b.Jb("active",t.active),b.Eb(1),b.Sc(t.title)}}const D=["*"];let C=(()=>{class t{ngAfterContentInit(){0===this.tabs.filter(t=>t.active).length&&this.selectTab(this.tabs.first)}selectTab(t){this.tabs.toArray().forEach(t=>t.active=!1),t.active=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Lb({type:t,selectors:[["tabs-about-profile"]],contentQueries:function(t,e,i){var n;1&t&&b.Kb(i,k,!1),2&t&&b.Cc(n=b.kc())&&(e.tabs=n)},inputs:{title:"title"},ngContentSelectors:D,decls:8,vars:2,consts:[[1,"card-header","card-nav","bg-transparent","border-bottom","d-sm-flex","justify-content-sm-between"],[1,"mb-2","mb-sm-n5"],["role","tablist",1,"card-header-links","nav","nav-underline"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"card-body","pb-2"],[1,"tab-content","mt-5"],[1,"nav-item",3,"click"],["href","javascript:void(0)",1,"nav-link"]],template:function(t,e){1&t&&(b.sc(),b.Xb(0,"div",0),b.Xb(1,"h3",1),b.Rc(2),b.Wb(),b.Xb(3,"ul",2),b.Pc(4,O,3,3,"li",3),b.Wb(),b.Wb(),b.Xb(5,"div",4),b.Xb(6,"div",5),b.rc(7),b.Wb(),b.Wb()),2&t&&(b.Eb(2),b.Sc(e.title),b.Eb(2),b.tc("ngForOf",e.tabs))},directives:[n.t],encapsulation:2}),t})();var j=i("ZUXT"),I=i("6nyw");let N=(()=>{class t{transform(t,e){return t?String(t).replace(/<[^>]+>/gm,""):""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=b.Qb({name:"htmlToPlainText",type:t,pure:!0}),t})();function T(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Xb(1,"form"),b.Xb(2,"div",21),b.Xb(3,"div",22),b.Xb(4,"div",23),b.Sb(5,"input",24),b.Xb(6,"label",25),b.Rc(7,"Profile Picture"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Sb(8,"img",26),b.Xb(9,"div",21),b.Xb(10,"div",27),b.Sb(11,"textarea",28),b.Wb(),b.Xb(12,"button",29),b.jc("click",(function(){return b.Gc(t),b.nc(2).profilePageService.editDescription=!1})),b.Rc(13,"Cancel"),b.Wb(),b.Xb(14,"button",30),b.Rc(15,"Submit"),b.Wb(),b.Wb(),b.Wb(),b.Wb()}if(2&t){const t=b.nc(2);b.Eb(11),b.uc("value",t.data.about)}}function _(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Xb(1,"div",31),b.Rc(2),b.Wb(),b.Xb(3,"a",32),b.jc("click",(function(){return b.Gc(t),b.nc(2).profilePageService.editDescription=!0})),b.Sb(4,"gx-icon",33),b.Xb(5,"span",34),b.Rc(6,"Edit"),b.Wb(),b.Wb(),b.Wb()}if(2&t){const t=b.nc(2);b.Eb(2),b.Sc(t.data.about)}}function z(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Xb(1,"form"),b.Xb(2,"div",21),b.Xb(3,"label",35),b.Rc(4,"Brokerage"),b.Wb(),b.Xb(5,"div",36),b.Sb(6,"input",37),b.Wb(),b.Wb(),b.Xb(7,"div",21),b.Xb(8,"label",35),b.Rc(9,"Business Address"),b.Wb(),b.Xb(10,"div",36),b.Sb(11,"input",38),b.Wb(),b.Wb(),b.Xb(12,"div",21),b.Xb(13,"label",35),b.Rc(14,"City"),b.Wb(),b.Xb(15,"div",36),b.Sb(16,"input",39),b.Wb(),b.Wb(),b.Xb(17,"div",21),b.Xb(18,"label",40),b.Rc(19,"Province"),b.Wb(),b.Xb(20,"div",36),b.Xb(21,"select",41),b.Xb(22,"option"),b.Rc(23,"Alberta"),b.Wb(),b.Xb(24,"option"),b.Rc(25,"British Columbia"),b.Wb(),b.Xb(26,"option"),b.Rc(27,"Manitoba"),b.Wb(),b.Xb(28,"option"),b.Rc(29,"New Brunswick"),b.Wb(),b.Xb(30,"option"),b.Rc(31,"Newfoundland and Labrador"),b.Wb(),b.Xb(32,"option"),b.Rc(33,"Northwest Territories"),b.Wb(),b.Xb(34,"option"),b.Rc(35,"Nova Scotia"),b.Wb(),b.Xb(36,"option"),b.Rc(37,"Nunavut"),b.Wb(),b.Xb(38,"option"),b.Rc(39,"Ontario"),b.Wb(),b.Xb(40,"option"),b.Rc(41,"Prince Edward Island"),b.Wb(),b.Xb(42,"option"),b.Rc(43,"Quebec"),b.Wb(),b.Xb(44,"option"),b.Rc(45,"Saskachewan"),b.Wb(),b.Xb(46,"option"),b.Rc(47,"Yukon"),b.Wb(),b.Wb(),b.Wb(),b.Xb(48,"button",29),b.jc("click",(function(){return b.Gc(t),b.nc(2).editPersonal=!1})),b.Rc(49,"Cancel"),b.Wb(),b.Xb(50,"button",30),b.Rc(51,"Submit"),b.Wb(),b.Wb(),b.Wb(),b.Wb()}if(2&t){const t=b.nc(2);b.Eb(6),b.uc("value",t.data.brokerage),b.Eb(5),b.uc("value",t.data.address),b.Eb(5),b.uc("value",t.data.city),b.Eb(5),b.tc("value",t.data.provinceState)}}function F(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Xb(1,"ul",42),b.Xb(2,"li",43),b.Xb(3,"gx-media-icon-card",44),b.Sb(4,"gx-icon",45),b.Xb(5,"p",46),b.Rc(6),b.Wb(),b.Wb(),b.Wb(),b.Xb(7,"li",43),b.Xb(8,"gx-media-icon-card",47),b.Sb(9,"gx-icon",48),b.Xb(10,"p",46),b.Rc(11),b.Wb(),b.Xb(12,"p",46),b.Rc(13),b.Wb(),b.Xb(14,"p",46),b.Rc(15),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(16,"a",32),b.jc("click",(function(){return b.Gc(t),b.nc(2).editPersonal=!0})),b.Sb(17,"gx-icon",33),b.Xb(18,"span",34),b.Rc(19,"Edit"),b.Wb(),b.Wb(),b.Wb()}if(2&t){const t=b.nc(2);b.Eb(6),b.Sc(t.data.brokerage),b.Eb(5),b.Tc("",t.data.address,","),b.Eb(2),b.Tc("",t.data.city,","),b.Eb(2),b.Sc(t.data.provinceState)}}function B(t,e){1&t&&(b.Xb(0,"div"),b.Sb(1,"hr"),b.Wb())}function L(t,e){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"div",49),b.Sb(2,"avatar",50),b.Xb(3,"div",51),b.Xb(4,"div",52),b.Xb(5,"span",53),b.Rc(6),b.Wb(),b.Xb(7,"span",54),b.Rc(8,"\xa0"),b.Wb(),b.Xb(9,"span",55),b.Rc(10,"2020-01-01"),b.Wb(),b.Xb(11,"span",54),b.Rc(12,"\xa0"),b.Wb(),b.Xb(13,"span",13),b.Xb(14,"div",14),b.Rc(15,"\u2606"),b.Wb(),b.Xb(16,"div",15),b.Rc(17,"\u2606"),b.Wb(),b.Xb(18,"div",16),b.Rc(19,"\u2606"),b.Wb(),b.Xb(20,"div",17),b.Rc(21,"\u2606"),b.Wb(),b.Xb(22,"div",18),b.Rc(23,"\u2606"),b.Wb(),b.Wb(),b.Wb(),b.Xb(24,"p",56),b.Rc(25),b.oc(26,"slice"),b.oc(27,"htmlToPlainText"),b.Wb(),b.Wb(),b.Wb(),b.Pc(28,B,2,0,"div",0),b.Wb()),2&t){const t=e.$implicit,i=e.index,n=b.nc(2);b.Eb(1),b.Nc(i===n.ratings.length-1?"margin-bottom: 10px;":""),b.Eb(1),b.uc("src",t.image),b.uc("firstName",t.firstName),b.Eb(4),b.Sc(t.firstName+" "+t.lastName),b.Eb(19),b.Sc(b.qc(26,7,b.pc(27,11,t.description),0,100)),b.Eb(3),b.tc("ngIf",i!==n.ratings.length-1)}}function M(t,e){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"tabs-about-profile",2),b.Xb(2,"tab-about-profile",3),b.Pc(3,T,16,1,"div",0),b.Pc(4,_,7,1,"div",0),b.Wb(),b.Xb(5,"tab-about-profile",4),b.Pc(6,z,52,4,"div",0),b.Pc(7,F,20,4,"div",0),b.Wb(),b.Xb(8,"tab-about-profile",5),b.Xb(9,"div",6),b.Xb(10,"card-body"),b.Xb(11,"form"),b.Xb(12,"div",7),b.Sb(13,"avatar",8),b.Xb(14,"div",9),b.Sb(15,"textarea",10),b.Wb(),b.Wb(),b.Sb(16,"hr"),b.Xb(17,"div",11),b.Xb(18,"div",12),b.Xb(19,"span",13),b.Xb(20,"div",14),b.Rc(21,"\u2606"),b.Wb(),b.Xb(22,"div",15),b.Rc(23,"\u2606"),b.Wb(),b.Xb(24,"div",16),b.Rc(25,"\u2606"),b.Wb(),b.Xb(26,"div",17),b.Rc(27,"\u2606"),b.Wb(),b.Xb(28,"div",18),b.Rc(29,"\u2606"),b.Wb(),b.Wb(),b.Wb(),b.Xb(30,"button",19),b.Rc(31,"send"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Pc(32,L,29,13,"div",20),b.Wb(),b.Wb(),b.Wb()),2&t){const t=b.nc();b.Eb(3),b.tc("ngIf",t.profilePageService.editDescription),b.Eb(1),b.tc("ngIf",!t.profilePageService.editDescription),b.Eb(2),b.tc("ngIf",t.editPersonal),b.Eb(1),b.tc("ngIf",!t.editPersonal),b.Eb(6),b.uc("src",t.ratings[0].image),b.Eb(19),b.tc("ngForOf",t.ratings)}}function A(t,e){1&t&&(b.Xb(0,"div"),b.Rc(1,"Following"),b.Wb())}function q(t,e){1&t&&(b.Xb(0,"div"),b.Rc(1,"Follow"),b.Wb())}function U(t,e){if(1&t&&(b.Xb(0,"div",59),b.Xb(1,"gx-grid"),b.Sb(2,"avatar",60),b.Xb(3,"div",61),b.Xb(4,"h4",62),b.Rc(5),b.Wb(),b.Sb(6,"div",63),b.Xb(7,"a",64),b.Rc(8,"See Profile Page"),b.Wb(),b.Wb(),b.Xb(9,"div",65),b.Xb(10,"div",66),b.Xb(11,"button",67),b.jc("click",(function(){const t=e.$implicit;return t.followed=!t.followed})),b.Pc(12,A,2,0,"div",0),b.Pc(13,q,2,0,"div",0),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t){const t=e.$implicit;b.Eb(2),b.uc("src",t.image),b.uc("firstName",t.name),b.Eb(3),b.Sc(t.name),b.Eb(6),b.tc("ngClass",t.followed?"toggled_btn_follow":""),b.Eb(1),b.tc("ngIf",t.followed),b.Eb(1),b.tc("ngIf",!t.followed)}}function H(t,e){if(1&t&&(b.Xb(0,"div",57),b.Pc(1,U,14,6,"div",58),b.Wb()),2&t){const t=b.nc();b.Eb(1),b.tc("ngForOf",t.followers.friends)}}let G=(()=>{class t{constructor(t){this.profilePageService=t,this.classList="",this.editPersonal=!1,this.followers=this.profilePageService.contentData}ngOnInit(){console.log(this.profilePageService.editProfilePicture),this.class&&(this.classList+=" "+this.class),this.ratings=[{rating:5,firstName:"bob",lastName:"Dylan",description:"Hello this is my name and I am rating this as 5 stars because he is a great guy.",image:"https://via.placeholder.com/150X150"},{rating:3,firstName:"bob",lastName:"Dylan",description:"Hello this is my name and I am rating this as 5 stars because he is a great guy.",image:"https://via.placeholder.com/150X150"},{rating:2,firstName:"bob",lastName:"Dylan",description:"Hello this is my name and I am rating this as 5 stars because he is a great guy.",image:"https://via.placeholder.com/150X150"},{rating:1,firstName:"bob",lastName:"Dylan",description:"Hello this is my name and I am rating this as 5 stars because he is a great guy.",image:"https://via.placeholder.com/150X150"},{rating:4,firstName:"bob",lastName:"Dylan",description:"Hello this is my name and I am rating this as 5 stars because he is a great guy.",image:"https://via.placeholder.com/150X150"}]}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(s))},t.\u0275cmp=b.Lb({type:t,selectors:[["profile-about"]],hostVars:2,hostBindings:function(t,e){2&t&&b.Gb(e.classList)},inputs:{data:["aboutProfile","data"],class:"class"},decls:2,vars:2,consts:[[4,"ngIf"],["class","row",4,"ngIf"],["title","About",1,"card"],["tabTitle","Description"],["tabTitle","Overview"],["tabTitle","Reviews"],[1,"dt-card"],[1,"media"],["img_class","dt-avatar size-50 mr-2","firstName","Test",3,"src"],[1,"media-body"],["rows","3","placeholder","Write a review",1,"form-control","border-0","shadow-none","bg-focus",2,"resize","none"],[1,"d-flex","align-items-center"],[1,"dt-attachment-btn","border-0","d-inline-flex","align-items-center","overflow-hidden"],[1,"designation","review-designation",2,"display","flex"],[1,"rating-1"],[1,"rating-2"],[1,"rating-3"],[1,"rating-4"],[1,"rating-5"],["type","submit",1,"btn","btn-primary","text-uppercase","ml-auto"],[4,"ngFor","ngForOf"],[1,"form-row","form-spacing"],[1,"col-md-12","col-sm-12"],[1,"custom-file"],["type","file","id","file-field",1,"custom-file-input"],["for","file-field",1,"custom-file-label"],["id","profilePicLoaded",1,"profile-pic","profile-pic-sm",2,"display","none"],[1,"col-md-12","col-sm-11"],["id","text-area-1","rows","3","placeholder","Textarea",1,"form-control",3,"value"],["type","button",1,"btn","btn-outline-primary","text-uppercase","ml-auto",2,"margin-right","10px","margin-top","15px","margin-bottom","15px",3,"click"],["type","submit",1,"btn","btn-primary","text-uppercase",2,"margin-right","10px","margin-top","15px","margin-bottom","15px"],[2,"margin-bottom","40px"],[1,"no-arrow","btn-hover",2,"float","right","margin-bottom","20px",3,"click"],["name","settings","size","xl",1,"mr-2"],[1,"d-none","d-sm-inline-block"],["for","normal-input-1",1,"col-md-2","col-sm-3","col-form-label","text-sm-right"],[1,"col-md-10","col-sm-9"],["type","text","id","normal-input-1","placeholder","Brokerage",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","Business Address",1,"form-control",3,"value"],["type","text","id","normal-input-1","placeholder","City",1,"form-control",3,"value"],["for","simple-select",1,"col-md-2","col-sm-3","col-form-label","text-sm-right"],["id","simple-select",1,"form-control",3,"value"],[1,"dt-list","dt-list-col-4"],[1,"dt-list__item"],["label","Brokerage"],["name","company","size","4x","icon","",1,"mr-5","align-self-center","text-yellow"],["text","",1,"h5","mb-0"],["label","Office Location"],["name","home","size","4x","icon","",1,"mr-5","align-self-center","text-yellow"],[1,"container","row"],["img_class","dt-avatar size-60 mr-6 mb-6 mb-sm-0",3,"src","firstName"],["data-location","mail-detail.html",1,"dt-module__list-item-content"],[1,"user-detail"],[1,"user-name"],[1,"dt-separator-v"],[1,"designation","date-designation"],[1,"mb-0","text-light-gray","text-truncate"],[1,"row"],["class","col-xl-4 col-md-4 col-sm-6 col-12",4,"ngFor","ngForOf"],[1,"col-xl-4","col-md-4","col-sm-6","col-12"],["img_class","dt-avatar size-60",3,"src","firstName"],[1,"mt-7"],[1,"mb-1","mb-sm-0"],[2,"padding","10px"],["href","javascript:void(0)",1,"btn","btn-primary","btn-sm"],[1,"action-tools"],["placement","bottom-right"],["type","button","aria-pressed","false","autocomplete","off",1,"btn","btn-outline-secondary","mb-2",3,"ngClass","click"]],template:function(t,e){1&t&&(b.Pc(0,M,33,6,"div",0),b.Pc(1,H,2,1,"div",1)),2&t&&(b.tc("ngIf","about"===e.profilePageService.aboutButton||void 0===e.profilePageService.aboutButton),b.Eb(1),b.tc("ngIf","following"===e.profilePageService.aboutButton))},directives:[n.u,C,k,j.a,w.s,w.l,w.m,f.a,n.t,y.a,w.n,w.r,W,I.a,n.r],pipes:[n.F,N],styles:[".date-designation[_ngcontent-%COMP%], .review-designation[_ngcontent-%COMP%]{display:inline}@media only screen and (max-width:500px){.date-designation[_ngcontent-%COMP%], .review-designation[_ngcontent-%COMP%]{background-color:#00f;word-break:break-all}}.btn-hover[_ngcontent-%COMP%]:hover{cursor:pointer}.form-spacing[_ngcontent-%COMP%]{margin:10px 0}"]}),t})();function $(t,e){1&t&&(b.Xb(0,"div"),b.Sb(1,"hr"),b.Wb())}function J(t,e){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"a",3),b.Xb(2,"div",4),b.Xb(3,"p",5),b.Rc(4),b.Wb(),b.Xb(5,"div",6),b.Xb(6,"div",7),b.Xb(7,"span",8),b.Rc(8,"\xa0"),b.Wb(),b.Xb(9,"span",9),b.Rc(10),b.Wb(),b.Wb(),b.Xb(11,"p",5),b.Rc(12),b.oc(13,"slice"),b.oc(14,"htmlToPlainText"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Pc(15,$,2,0,"div",10),b.Wb()),2&t){const t=e.$implicit,i=e.index,n=b.nc();b.Eb(1),b.uc("href",t.link,b.Ic),b.Eb(1),b.Nc(i===n.posts.length-1?"margin-bottom: 10px;":""),b.Eb(2),b.Sc(t.type),b.Eb(6),b.Sc(t.date),b.Eb(2),b.Sc(b.qc(13,7,b.pc(14,11,t.question),0,100)),b.Eb(3),b.tc("ngIf",i!==n.posts.length-1)}}let Y=(()=>{class t{constructor(t){this.profilePageService=t}ngOnInit(){this.posts=[{type:"question",question:"This is a question on a forum.",date:"2020-01-01",link:""},{type:"Answer",question:"This is an anwser on a forum.",date:"2020-01-01",link:""},{type:"Answer",question:"This is an anwser on a forum.",date:"2020-01-01",link:""},{type:"Answer",question:"This is an anwser on a forum.",date:"2020-01-01",link:""},{type:"question",question:"This is a question on a forum.",date:"2020-01-01",link:""}]}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(s))},t.\u0275cmp=b.Lb({type:t,selectors:[["profile-posts"]],decls:4,vars:1,consts:[["title","Posts",1,"card"],[1,"tab-content"],[4,"ngFor","ngForOf"],[3,"href"],[1,"container","row"],[1,"mb-0","text-light-gray","text-truncate"],["data-location","mail-detail.html",1,"dt-module__list-item-content"],[1,"user-detail"],[1,"dt-separator-v"],[1,"designation","date-designation"],[4,"ngIf"]],template:function(t,e){1&t&&(b.Xb(0,"tabs-about-profile",0),b.Xb(1,"div"),b.Xb(2,"div",1),b.Pc(3,J,16,13,"div",2),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.Eb(3),b.tc("ngForOf",e.posts))},directives:[C,n.t,n.u],pipes:[n.F,N],encapsulation:2}),t})(),K=(()=>{class t{constructor(t){this.profilePageService=t,this.friendsCardTitle='Friends - 530 <span class="f-12 text-light-gray">(27 Mutual)</span>',this.data=this.profilePageService.contentData}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(s))},t.\u0275cmp=b.Lb({type:t,selectors:[["profile-content"]],decls:10,vars:2,consts:[[1,"profile-content"],[1,"row"],[1,"col-xl-4","order-xl-2"],[1,"col-xl-12","col-md-12","col-12","order-xl-1"],["card-title","Contact","header-class","pt-6",3,"fullHeight"],[1,"col-xl-8","order-xl-1"],[3,"aboutProfile"]],template:function(t,e){1&t&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"div",2),b.Xb(3,"div",1),b.Xb(4,"div",3),b.Xb(5,"gx-card",4),b.Sb(6,"profile-contact"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(7,"div",5),b.Sb(8,"profile-about",6),b.Sb(9,"profile-posts"),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.Eb(5),b.tc("fullHeight",!0),b.Eb(3),b.tc("aboutProfile",e.data.about_user))},directives:[v.a,R,G,Y],encapsulation:2}),t})();const Q=[{path:"profile/:isRealtor/:id",component:(()=>{class t{constructor(t,e,i){this.profilePageService=t,this.route=e,this.router=i}ngOnInit(){}loadHeaders(){var t=this.route.snapshot.paramMap.get("id"),e=this.route.snapshot.paramMap.get("isRealtor");!Object(p.isNumber)(t)&&"current"!=t||"realtor"!==e&&"user"!==e?this.router.navigateByUrl("navigation-error"):(Object(p.isNumber)(t)?(this.profilePageService.userID=parseInt(t),this.profilePageService.isCurrentUser=!1):this.profilePageService.isCurrentUser=!0,this.profilePageService.isRealtor="realtor"===e)}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(s),b.Rb(r.a),b.Rb(r.d))},t.\u0275cmp=b.Lb({type:t,selectors:[["profile-page"]],decls:3,vars:0,consts:[[1,"profile"]],template:function(t,e){1&t&&(b.Xb(0,"div",0),b.Sb(1,"profile-banner"),b.Sb(2,"profile-content"),b.Wb())},directives:[g,K],encapsulation:2}),t})(),resolve:{data:s}}];let V=(()=>{class t{}return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[n.c,a.a,o.a,c.a,u.a,r.h.forChild(Q)]]}),t})()}}]);