(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{KuJF:function(t,e,s){"use strict";s.r(e),s.d(e,"ForumModule",(function(){return Y}));var i=s("ofXK"),a=s("tyNb"),n=s("1u1q"),c=s("bhfF"),o=s("JMRq"),r=s("DO/L"),l=s("fXoL"),m=s("tk/3"),b=s("2Vo4"),d=s("lJxs");let p=(()=>{class t{constructor(t,e){this.http=t,this.document=e,this.feedSubject=new b.a(JSON.parse(localStorage.getItem("feed"))),this.feed=this.feedSubject.asObservable(),this.url=this.document.location.origin}get currentfeedValue(){return this.feedSubject.value}getFeed(t,e,s){var i;return i=null==t?{headers:new m.d({"Content-Type":"application/json",RangeMin:e.toString(),RangeMax:s.toString()})}:{headers:new m.d({"Content-Type":"application/json",Authorization:"Bearer "+t.token,RangeMin:e.toString(),RangeMax:s.toString()})},this.http.get(`${this.url}/api/feed/getposts`,i).pipe(Object(d.a)(t=>(localStorage.setItem("feed",JSON.stringify(t)),this.feedSubject.next(t),t)))}postFeed(t,e,s){var i;return i=null==t?{headers:new m.d({"Content-Type":"application/json"})}:{headers:new m.d({"Content-Type":"application/json",Authorization:"Bearer "+t.token})},this.http.post(`${this.url}/api/feed/post`,null==s?{message:e}:{postId:s,message:e},i)}likePostComment(t,e,s){var i={headers:new m.d({"Content-Type":"application/json",Authorization:"Bearer "+t.token})};return this.http.post(`${this.url}/api/like/post`,null==s?{postId:e}:{commentId:s},i)}}return t.\u0275fac=function(e){return new(e||t)(l.fc(m.b),l.fc(i.e))},t.\u0275prov=l.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=s("pW6c"),f=s("f5O9"),h=s("3Pt+"),g=s("ZUXT"),v=s("ho4I"),w=s("/Tuz");let S=(()=>{class t{constructor(t){this.authenticationService=t,this.additionalClass="",this.imageSize="35",this.formSize="large",this.classList="media",this.isReply=!1,this.commentId=0,this.commentForm=new h.f({message:new h.d(null,h.q.required)})}ngOnInit(){this.currentUser=this.authenticationService.currentUserValue,null===this.currentUser&&(this.currentUser={firstName:"Anonymous",profilePicture:""}),this.class&&(this.classList+=" "+this.class)}submitComment(){const t=this.commentForm.value;t.is_reply=this.isReply,t.post_id=this.postId,t.comment_id=this.commentId,this.commentForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(u.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["comment-box-list"]],hostVars:2,hostBindings:function(t,e){2&t&&l.Gb(e.classList)},inputs:{additionalClass:"additionalClass",imageSize:"imageSize",formSize:"formSize",class:"class",isReply:"isReply",postId:"postId",commentId:"commentId"},decls:15,vars:2,consts:[[1,"card",2,"width","100%"],[1,"media"],["img_class","dt-avatar size-60 mr-6 mb-6 mb-sm-0",3,"src","firstName"],[1,"media-body"],["rows","3","placeholder","Ask a question!",1,"form-control","border-0","shadow-none","bg-focus"],[1,"d-flex","align-items-center"],[1,"dt-attachment-btn","border-0","d-inline-flex","align-items-center","overflow-hidden"],["type","file"],["name","camera","size","xl",1,"mr-2"],[1,"d-inline-block"],["type","submit",1,"btn","btn-primary","btn","text-uppercase","ml-auto"]],template:function(t,e){1&t&&(l.Xb(0,"card-body",0),l.Xb(1,"form"),l.Xb(2,"div",1),l.Sb(3,"avatar",2),l.Xb(4,"div",3),l.Sb(5,"textarea",4),l.Wb(),l.Wb(),l.Sb(6,"hr"),l.Xb(7,"div",5),l.Xb(8,"div",6),l.Sb(9,"input",7),l.Sb(10,"gx-icon",8),l.Xb(11,"span",9),l.Rc(12,"Add Photos/Album"),l.Wb(),l.Wb(),l.Xb(13,"button",10),l.Rc(14,"Submit"),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.Eb(3),l.uc("src",e.currentUser.profilePicture),l.uc("firstName",e.currentUser.firstName))},directives:[g.a,h.s,h.l,h.m,v.a,w.a],encapsulation:2}),t})();var y=s("zhXz"),W=s("SmQ2");function X(t,e){if(1&t&&(l.Xb(0,"a",21),l.Sb(1,"gx-icon",22),l.Xb(2,"span",23),l.Rc(3),l.oc(4,"thousandSuff"),l.Wb(),l.Wb()),2&t){const t=l.nc().$implicit;l.Eb(1),l.tc("fw",!0)("ngClass",t.isLiked?"text-danger":""),l.Eb(2),l.Uc("",l.pc(4,4,t.likes)," ",1!==t.likes?"Likes":"Like","")}}function x(t,e){if(1&t&&(l.Xb(0,"a",24),l.Sb(1,"gx-icon",25),l.Xb(2,"span",23),l.Rc(3),l.oc(4,"thousandSuff"),l.Wb(),l.Wb()),2&t){const t=l.nc().$implicit;l.Eb(1),l.tc("fw",!0),l.Eb(2),l.Uc("",l.pc(4,3,t.commentCount)," ",1!==t.commentCount?"Comments":"Comment","")}}function P(t,e){if(1&t&&(l.Xb(0,"div",3),l.Xb(1,"gx-card"),l.Xb(2,"div",5),l.Sb(3,"avatar",6),l.Xb(4,"div",7),l.Xb(5,"div",8),l.Xb(6,"span",9),l.Rc(7),l.Wb(),l.Xb(8,"span",10),l.Rc(9,"\xa0"),l.Wb(),l.Xb(10,"span",11),l.Rc(11),l.Wb(),l.Wb(),l.Xb(12,"span",12),l.Rc(13),l.Wb(),l.Xb(14,"p",13),l.Rc(15),l.Wb(),l.Xb(16,"div",14),l.Xb(17,"div",15),l.Xb(18,"div",16),l.Pc(19,X,5,6,"a",17),l.Pc(20,x,5,5,"a",18),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(21,"div",19),l.Xb(22,"a",20),l.Rc(23,"Load Post"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&t){const t=e.$implicit;l.Eb(3),l.uc("src",t.profilePicture),l.uc("firstName",t.firstName),l.Eb(4),l.Sc(t.firstName+" "+t.lastName),l.Eb(4),l.Sc(t.subject),l.Eb(2),l.Sc(t.datePosted),l.Eb(2),l.Sc(t.message),l.Eb(4),l.tc("ngIf",0!==t.likes),l.Eb(1),l.tc("ngIf",0!==t.commentCount),l.Eb(2),l.vc("href","portal/forum/forum-item/",t.id,"",l.Ic)}}let k=(()=>{class t{constructor(t,e,s){this.feedService=t,this.authenticationService=e,this.alertService=s,this.maxPage=10,this.pageNumber=1,this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"]}ngOnInit(){this.feedService.getFeed(this.authenticationService.currentUserValue,this.pageNumber*this.maxPage-this.maxPage,this.pageNumber*this.maxPage).subscribe(t=>{this.posts=t;for(var e=0;e<this.posts.length;e++){var s,i=new Date(this.posts[e].datePosted),a=i.getHours();a>12?(s="pm",a-=12):s=12==a?"pm":"am";var n=i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes();this.posts[e].datePosted=i.getDate()+" "+this.monthNames[i.getMonth()-1]+", "+i.getFullYear()+" at "+a+":"+n+" "+s}},t=>{this.alertService.error("Could not load Posts")})}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(p),l.Rb(u.a),l.Rb(f.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-forum-list"]],decls:7,vars:1,consts:[[1,"dt-page__header"],[1,"dt-page__title"],[1,"row"],[1,"col-xl-12"],["class","col-xl-12",4,"ngFor","ngForOf"],[1,"d-sm-flex","flex-sm-row"],["img_class","dt-avatar size-60 mr-6 mb-6 mb-sm-0",3,"src","firstName"],[1,"flex-1","overflow-hidden","mb-6","mb-sm-0","pr-sm-3"],[1,"user-detail"],[1,"user-name"],[1,"dt-separator-v"],[1,"designation"],[1,"date-fmt"],[1,"text-truncate",2,"margin-top","10px"],[1,"d-flex","flex-sm-row","flex-column"],[1,"mb-4","mb-sm-0"],[1,"d-flex","flex-wrap","mb-6"],["href","javascript:void(0)","class","f-12 d-inline-block text-light-gray mr-3",4,"ngIf"],["href","javascript:void(0)","class","f-12 d-inline-block text-light-gray",4,"ngIf"],[1,"min-w-120",2,"transform","translateY(30%)"],[1,"btn","btn-primary","text-uppercase","btn-block",3,"href"],["href","javascript:void(0)",1,"f-12","d-inline-block","text-light-gray","mr-3"],["name","heart-o","size","sm",3,"fw","ngClass"],[1,"d-inline-block"],["href","javascript:void(0)",1,"f-12","d-inline-block","text-light-gray"],["name","message","size","sm",3,"fw"]],template:function(t,e){1&t&&(l.Xb(0,"div",0),l.Xb(1,"h1",1),l.Rc(2,"Real Estate Questions"),l.Wb(),l.Wb(),l.Xb(3,"div",2),l.Xb(4,"div",3),l.Sb(5,"comment-box-list"),l.Wb(),l.Pc(6,P,24,9,"div",4),l.Wb()),2&t&&(l.Eb(6),l.tc("ngForOf",e.posts))},directives:[S,i.t,y.a,v.a,i.u,w.a,i.r],pipes:[W.a],styles:[".date-fmt[_ngcontent-%COMP%]{font-size:80%}"]}),t})(),R=(()=>{class t{constructor(t){this.http=t,this.wallPageUrl="api/wall-page-data",this.postUrl="api/wall-page-posts",this.currentUserData={name:"Chelsea Jones",small_image:"https://via.placeholder.com/150X150"}}resolve(t,e){return new Promise((t,e)=>{Promise.all([this.getWallPage(),this.fetchPosts()]).then(()=>{t()},e)})}fetchPosts(){return new Promise((t,e)=>{this.http.get(this.postUrl).subscribe(e=>{this.posts=e,t(e)},e)})}getWallPage(){return new Promise((t,e)=>{this.http.get(this.wallPageUrl).subscribe(e=>{this.wallPageData=e,t(e)},e)})}saveWallPost(t){t.id=this.posts.length+1,t.user_name=this.currentUserData.name,t.user_image=this.currentUserData.small_image,t.created_at=new Date,this.posts.push(t)}savePostComment(t,e){this.posts.find(e=>e.id===t).comments.push(e)}saveReplyOnComment(t,e,s){const i=this.posts.find(e=>e.id===t).comments;i.find(t=>t.id===e).hasOwnProperty("replies")||(i.find(t=>t.id===e).replies=[]),i.find(t=>t.id===e).replies.push(s),this.posts.find(e=>e.id===t).comments=i}saveComment(t){const e={name:this.currentUserData.name,image:this.currentUserData.small_image,created_at:new Date,text:t.message};t.is_reply?this.saveReplyOnComment(t.post_id,t.comment_id,e):this.savePostComment(t.post_id,e)}}return t.\u0275fac=function(e){return new(e||t)(l.fc(m.b))},t.\u0275prov=l.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function I(t,e){if(1&t&&l.Sb(0,"h1",1),2&t){const t=l.nc();l.tc("innerHTML",t.pageTitle,l.Hc)}}const C=["*"];let E=(()=>{class t{constructor(t){this.eleRef=t,this.pageTitle="",this.eleRef.nativeElement.classList.add("dt-page__header")}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(l.l))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-page-header"]],inputs:{pageTitle:"pageTitle"},ngContentSelectors:C,decls:2,vars:1,consts:[["class","dt-page__title",3,"innerHTML",4,"ngIf"],[1,"dt-page__title",3,"innerHTML"]],template:function(t,e){1&t&&(l.sc(),l.Pc(0,I,1,1,"h1",0),l.rc(1)),2&t&&l.tc("ngIf",e.pageTitle)},directives:[i.u],styles:["[_nghost-%COMP%]{display:block}"]}),t})();const _=function(t){return{"form-control-sm":t}};let L=(()=>{class t{constructor(t){this.wallPageService=t,this.additionalClass="",this.imageSize="35",this.formSize="large",this.classList="media",this.isReply=!1,this.commentId=0,this.commentForm=new h.f({message:new h.d(null,h.q.required)})}ngOnInit(){this.class&&(this.classList+=" "+this.class),this.currentUser=this.wallPageService.currentUserData}submitComment(){const t=this.commentForm.value;t.is_reply=this.isReply,t.post_id=this.postId,t.comment_id=this.commentId,this.wallPageService.saveComment(t),this.commentForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(R))},t.\u0275cmp=l.Lb({type:t,selectors:[["comment-box"]],hostVars:2,hostBindings:function(t,e){2&t&&l.Gb(e.classList)},inputs:{additionalClass:"additionalClass",imageSize:"imageSize",formSize:"formSize",class:"class",isReply:"isReply",postId:"postId",commentId:"commentId"},decls:4,vars:6,consts:[["img_class","dt-avatar size-50 mr-6 mb-6 mb-sm-0",3,"src","firstName"],[1,"media-body"],[3,"formGroup","ngSubmit"],["type","text","formControlName","message","placeholder","Type your comment here...",1,"form-control","border-0","shadow-none","bg-focus",3,"ngClass"]],template:function(t,e){1&t&&(l.Sb(0,"avatar",0),l.Xb(1,"div",1),l.Xb(2,"form",2),l.jc("ngSubmit",(function(){return e.commentForm.valid&&e.submitComment()})),l.Sb(3,"input",3),l.Wb(),l.Wb()),2&t&&(l.uc("src",e.currentUser.small_image),l.uc("firstName",e.currentUser.name),l.Eb(2),l.tc("formGroup",e.commentForm),l.Eb(1),l.tc("ngClass",l.xc(4,_,"small"==e.formSize)))},directives:[v.a,h.s,h.l,h.g,h.b,h.k,h.e,i.r],encapsulation:2}),t})(),z=(()=>{class t{transform(t,e){if(t){const e=Math.floor((+new Date-+new Date(t))/1e3);if(e<29)return"Just now";const s={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,min:60,second:1};let i;for(const t in s)if(i=Math.floor(e/s[t]),i>0)return 1===i?i+" "+t+" ago":i+" "+t+"s ago"}return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=l.Qb({name:"dateAgo",type:t,pure:!0}),t})();function F(t,e){if(1&t&&(l.Xb(0,"p",14),l.Rc(1),l.Wb()),2&t){const t=l.nc();l.Eb(1),l.Sc(t.post.message)}}function O(t,e){1&t&&(l.Xb(0,"span",21),l.Rc(1,"+4"),l.Wb())}const j=function(t){return{"more-thumb rounded":t}};function N(t,e){if(1&t&&(l.Xb(0,"li",17),l.Xb(1,"a",18),l.Sb(2,"img",19),l.Pc(3,O,2,0,"span",20),l.Wb(),l.Wb()),2&t){const t=e.$implicit,s=e.last;l.Eb(1),l.tc("ngClass",l.xc(4,j,s)),l.Eb(1),l.uc("src",t.image,l.Ic),l.uc("alt",t.name),l.Eb(1),l.tc("ngIf",s)}}function U(t,e){if(1&t&&(l.Xb(0,"ul",15),l.Pc(1,N,4,6,"li",16),l.Wb()),2&t){const t=l.nc();l.Eb(1),l.tc("ngForOf",t.post.attachments)}}function D(t,e){if(1&t&&(l.Xb(0,"a",22),l.Sb(1,"gx-icon",23),l.Xb(2,"span",24),l.Rc(3),l.oc(4,"thousandSuff"),l.Wb(),l.Wb()),2&t){const t=l.nc();l.Eb(3),l.Tc("",l.pc(4,1,t.post.feeds.views)," Views")}}const T=function(t){return{"text-danger":t}};function M(t,e){if(1&t){const t=l.Yb();l.Xb(0,"a",25),l.jc("click",(function(){return l.Gc(t),l.nc().toggleLike()})),l.Sb(1,"gx-icon",26),l.Xb(2,"span",24),l.Rc(3),l.oc(4,"thousandSuff"),l.Wb(),l.Wb()}if(2&t){const t=l.nc();l.Eb(1),l.tc("fw",!0)("ngClass",l.xc(5,T,t.likePost)),l.Eb(2),l.Tc("",l.pc(4,3,t.post.feeds.likes)," Likes")}}function H(t,e){if(1&t&&(l.Xb(0,"a",27),l.Sb(1,"gx-icon",28),l.Xb(2,"span",24),l.Rc(3),l.oc(4,"thousandSuff"),l.Wb(),l.Wb()),2&t){const t=l.nc();l.Eb(1),l.tc("fw",!0),l.Eb(2),l.Tc("",l.pc(4,2,t.post.comments.length)," Comments")}}function A(t,e){if(1&t&&(l.Xb(0,"div",29),l.Sb(1,"img",42),l.Xb(2,"div",31),l.Xb(3,"span",3),l.Rc(4),l.Wb(),l.Xb(5,"span",32),l.Rc(6),l.oc(7,"dateAgo"),l.Wb(),l.Xb(8,"p"),l.Rc(9),l.Wb(),l.Wb(),l.Wb()),2&t){const t=e.$implicit;l.Eb(1),l.uc("src",t.image,l.Ic),l.uc("alt",t.name),l.Eb(3),l.Sc(t.name),l.Eb(2),l.Sc(l.pc(7,5,t.created_at)),l.Eb(3),l.Tc(" ",t.text," ")}}function J(t,e){if(1&t){const t=l.Yb();l.Xb(0,"div",29),l.Sb(1,"avatar",30),l.Xb(2,"div",31),l.Xb(3,"span",3),l.Rc(4),l.Wb(),l.Xb(5,"span",32),l.Rc(6),l.oc(7,"dateAgo"),l.Wb(),l.Xb(8,"p"),l.Rc(9),l.Wb(),l.Xb(10,"p"),l.Xb(11,"a",33),l.Xb(12,"span",34,35),l.jc("click",(function(){l.Gc(t);const e=l.Dc(13),s=l.Dc(16),i=l.nc();return i.toggleShowHideClass(e),i.toggleShowHideClass(s)})),l.Rc(14,"Like"),l.Wb(),l.Xb(15,"span",36,37),l.jc("click",(function(){l.Gc(t);const e=l.Dc(13),s=l.Dc(16),i=l.nc();return i.toggleShowHideClass(e),i.toggleShowHideClass(s)})),l.Rc(17,"Unlike"),l.Wb(),l.Wb(),l.Xb(18,"a",38),l.jc("click",(function(){l.Gc(t);const e=l.Dc(22);return l.nc().toggleShowHideClass(e)})),l.Rc(19,"Comment"),l.Wb(),l.Wb(),l.Pc(20,A,10,7,"div",12),l.Xb(21,"div",39,40),l.Sb(23,"comment-box",41),l.Wb(),l.Wb(),l.Wb()}if(2&t){const t=e.$implicit,s=l.nc();l.Eb(1),l.uc("src",t.image),l.uc("firstName",t.name),l.Eb(3),l.Sc(t.name),l.Eb(2),l.Sc(l.pc(7,9,t.created_at)),l.Eb(3),l.Tc(" ",t.text," "),l.Eb(11),l.tc("ngForOf",t.replies),l.Eb(3),l.tc("postId",s.post.id)("isReply",!0)("commentId",t.id)}}let q=(()=>{class t{constructor(){this.likePost=!1}toggleShowHideClass(t){t.classList.contains("show")?(t.classList.remove("show"),t.classList.add("hide")):(t.classList.add("show"),t.classList.remove("hide"))}toggleLike(){this.likePost=!this.likePost,this.likePost?this.post.feeds.likes+=1:this.post.feeds.likes-=1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Lb({type:t,selectors:[["post-detail"]],inputs:{post:"post"},decls:18,vars:16,consts:[[1,"dt-avatar-wrapper","mb-3"],["img_class","dt-avatar size-60 mr-6 mb-6 mb-sm-0",3,"src","firstName"],[1,"dt-avatar-info"],[1,"h5","dt-avatar-name","mb-1"],[1,"meta-date"],[1,"wall-post"],["class","text-dark",4,"ngIf"],["class","dt-list dt-list-col-6 mb-4",4,"ngIf"],[1,"d-flex","flex-wrap","mb-6"],["href","javascript:void(0)","class","f-12 d-inline-block text-light-gray mr-3",4,"ngIf"],["href","javascript:void(0)","class","f-12 d-inline-block text-light-gray mr-3",3,"click",4,"ngIf"],["href","javascript:void(0)","class","f-12 d-inline-block text-light-gray",4,"ngIf"],["class","media px-5 mb-3",4,"ngFor","ngForOf"],[3,"postId"],[1,"text-dark"],[1,"dt-list","dt-list-col-6","mb-4"],["class","dt-list__item text-center",4,"ngFor","ngForOf"],[1,"dt-list__item","text-center"],["href","javascript:void(0)",1,"d-block",3,"ngClass"],[1,"img-fluid","rounded",3,"src","alt"],["class","count-number display-4",4,"ngIf"],[1,"count-number","display-4"],["href","javascript:void(0)",1,"f-12","d-inline-block","text-light-gray","mr-3"],["name","eye","size","lg",1,"mr-1"],[1,"d-inline-block"],["href","javascript:void(0)",1,"f-12","d-inline-block","text-light-gray","mr-3",3,"click"],["name","heart-o","size","sm",3,"fw","ngClass"],["href","javascript:void(0)",1,"f-12","d-inline-block","text-light-gray"],["name","message","size","sm",3,"fw"],[1,"media","px-5","mb-3"],["img_class","dt-avatar size-50 mr-6 mb-6 mb-sm-0",3,"src","firstName"],[1,"media-body"],[1,"meta-date","mb-2"],["href","javascript:void(0)",1,"btn","btn-primary","btn-xs","mr-2","toggle-button"],[1,"show",3,"click"],["likeLabel",""],[1,"hide",3,"click"],["unlikeLabel",""],["href","javascript:void(0);","role","button",1,"btn","btn-light","btn-xs",3,"click"],[1,"collapse"],["commentReplyBox",""],["imageSize","25","formSize","small",3,"postId","isReply","commentId"],[1,"dt-avatar","dt-avatar__shadow","size-25","mr-2",3,"src","alt"]],template:function(t,e){1&t&&(l.Xb(0,"card-body"),l.Xb(1,"div",0),l.Sb(2,"avatar",1),l.Xb(3,"div",2),l.Xb(4,"span",3),l.Rc(5),l.Wb(),l.Xb(6,"span",4),l.Rc(7),l.oc(8,"dateAgo"),l.Wb(),l.Wb(),l.Wb(),l.Xb(9,"div",5),l.Pc(10,F,2,1,"p",6),l.Pc(11,U,2,1,"ul",7),l.Wb(),l.Xb(12,"div",8),l.Pc(13,D,5,3,"a",9),l.Pc(14,M,5,7,"a",10),l.Pc(15,H,5,4,"a",11),l.Wb(),l.Pc(16,J,24,11,"div",12),l.Sb(17,"comment-box",13),l.Wb()),2&t&&(l.Eb(2),l.uc("src",e.post.user_image),l.uc("firstName",e.post.user_name),l.Eb(3),l.Sc(e.post.user_name),l.Eb(2),l.Sc(l.pc(8,14,e.post.created_at)),l.Eb(3),l.tc("ngIf",e.post.message),l.Eb(1),l.tc("ngIf",e.post.hasOwnProperty("attachments")&&e.post.attachments.length>0),l.Eb(2),l.tc("ngIf",e.post.feeds.hasOwnProperty("views")),l.Eb(1),l.tc("ngIf",e.post.feeds.hasOwnProperty("likes")),l.Eb(1),l.tc("ngIf",e.post.hasOwnProperty("comments")),l.Eb(1),l.tc("ngForOf",e.post.comments),l.Eb(1),l.Hb("px-5 ",e.post.id,""),l.tc("postId",e.post.id))},directives:[g.a,v.a,i.u,i.t,L,i.r,w.a],pipes:[z,W.a],encapsulation:2}),t})(),$=(()=>{class t{constructor(t){this.el=t,this.el.nativeElement.classList.add("dt-card")}set fullHeight(t){!1!==t&&this.el.nativeElement.classList.add("dt-card__full-height")}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(l.l))},t.\u0275dir=l.Mb({type:t,selectors:[["","gxCard",""]],inputs:{fullHeight:"fullHeight"}}),t})();function G(t,e){1&t&&l.Sb(0,"post-detail",2),2&t&&l.tc("post",e.$implicit)}let B=(()=>{class t{constructor(t){this.wallPageService=t,this.classList="col-xl-12 col-md-12 col-sm-12",this.postForm=new h.f({message:new h.d(null,h.q.required)}),this.currentUser=this.wallPageService.currentUserData,this.posts=this.wallPageService.posts}ngOnInit(){this.fetchPosts()}ngOnDestroy(){this.postDataSubscribe&&this.postDataSubscribe.unsubscribe()}fetchPosts(){}onSubmitPost(){const t=this.postForm.value;t.attachments=[],t.feeds={views:1,likes:0,comments:0},t.comments=[],this.wallPageService.saveWallPost(t),this.postForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(R))},t.\u0275cmp=l.Lb({type:t,selectors:[["posts"]],hostVars:2,hostBindings:function(t,e){2&t&&l.Gb(e.classList)},decls:3,vars:5,consts:[[1,"row"],["gxCard","",3,"post",4,"ngFor","ngForOf"],["gxCard","",3,"post"]],template:function(t,e){1&t&&(l.Xb(0,"div",0),l.Pc(1,G,1,1,"post-detail",1),l.oc(2,"orderBy"),l.Wb()),2&t&&(l.Eb(1),l.tc("ngForOf",l.qc(2,1,e.posts,"created_at",!0)))},directives:[i.t,q,$],pipes:[o.b],encapsulation:2}),t})();const V=[{path:"forum-list",component:k},{path:"forum-item/:id",component:(()=>{class t{constructor(t){this.wallPageService=t,this.pageInfo=this.wallPageService.wallPageData}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(R))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-wall-page"]],decls:3,vars:0,consts:[["pageTitle","Post"],[1,"row"]],template:function(t,e){1&t&&(l.Sb(0,"app-page-header",0),l.Xb(1,"div",1),l.Sb(2,"posts"),l.Wb())},directives:[E,B],styles:[""]}),t})(),resolve:{data:R}}];let Y=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(e){return new(e||t)},imports:[[i.c,n.a,o.a,c.a,r.a,a.h.forChild(V)]]}),t})()}}]);