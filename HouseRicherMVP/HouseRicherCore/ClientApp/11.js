(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ef/Z":function(t,e,s){"use strict";s.r(e),s.d(e,"RealtorModule",(function(){return h}));var o=s("ofXK"),r=s("tyNb"),i=s("1u1q"),n=s("bhfF"),c=s("DO/L"),l=s("fXoL"),a=s("tk/3");let b=(()=>{class t{constructor(t){this.http=t}resolve(t,e){return new Promise((t,e)=>{Promise.all([this.getUsers(),this.getRealEstates()]).then(()=>{t()},e)})}getUsers(){return new Promise((t,e)=>{this.http.get("api/grid-views-users").subscribe(e=>{this.usersList=e,t(e)},e)})}getRealEstates(){return new Promise((t,e)=>{this.http.get("api/grid-views-realestates").subscribe(e=>{this.realestates=e,t(e)},e)})}}return t.\u0275fac=function(e){return new(e||t)(l.fc(a.b))},t.\u0275prov=l.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=s("6nyw"),d=s("ho4I");function u(t,e){1&t&&(l.Xb(0,"div"),l.Rc(1,"Following"),l.Wb())}function g(t,e){1&t&&(l.Xb(0,"div"),l.Rc(1,"Follow"),l.Wb())}function m(t,e){if(1&t&&(l.Xb(0,"div",4),l.Xb(1,"gx-grid"),l.Sb(2,"avatar",5),l.Xb(3,"div",6),l.Xb(4,"h4",7),l.Rc(5),l.Wb(),l.Sb(6,"div",8),l.Xb(7,"a",9),l.Rc(8,"See Profile Page"),l.Wb(),l.Wb(),l.Xb(9,"div",10),l.Xb(10,"div",11),l.Xb(11,"button",12),l.jc("click",(function(){const t=e.$implicit;return t.followed=!t.followed})),l.Pc(12,u,2,0,"div",13),l.Pc(13,g,2,0,"div",13),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&t){const t=e.$implicit;l.Eb(2),l.uc("src",t.picture),l.uc("firstName",t.name),l.Eb(3),l.Sc(t.name),l.Eb(6),l.tc("ngClass",t.followed?"toggled_btn_follow":""),l.Eb(1),l.tc("ngIf",t.followed),l.Eb(1),l.tc("ngIf",!t.followed)}}const p=[{path:"realtor-list",component:(()=>{class t{constructor(t){this.gridService=t,this.usersList=this.gridService.usersList}ngOnInit(){}follow(t){for(var e=0;e<this.usersList.length;e++)this.usersList[e].id===t&&(this.usersList[e].followed=!this.usersList[e].followed)}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(b))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-realtor-list"]],decls:5,vars:1,consts:[[1,"dt-page__header"],[1,"dt-page__title"],[1,"row"],["class","col-xl-3 col-md-4 col-sm-6 col-12",4,"ngFor","ngForOf"],[1,"col-xl-3","col-md-4","col-sm-6","col-12"],["img_class","dt-avatar size-60 mr-6 mb-6 mb-sm-0",3,"src","firstName"],[1,"mt-7"],[1,"mb-1","mb-sm-0"],[2,"padding","10px"],["href","javascript:void(0)",1,"btn","btn-primary","btn-sm"],[1,"action-tools"],["placement","bottom-right"],["type","button","aria-pressed","false","autocomplete","off",1,"btn","btn-outline-secondary","mb-2",3,"ngClass","click"],[4,"ngIf"]],template:function(t,e){1&t&&(l.Xb(0,"div",0),l.Xb(1,"h1",1),l.Rc(2,"Our Realtors"),l.Wb(),l.Wb(),l.Xb(3,"div",2),l.Pc(4,m,14,6,"div",3),l.Wb()),2&t&&(l.Eb(4),l.tc("ngForOf",e.usersList))},directives:[o.t,f.a,d.a,o.r,o.u],styles:[".toggled_btn_follow[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}"]}),t})(),resolve:{usersList:b}}];let h=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(e){return new(e||t)},imports:[[o.c,i.a,n.a,c.a,r.h.forChild(p)]]}),t})()}}]);