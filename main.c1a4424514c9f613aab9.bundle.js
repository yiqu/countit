webpackJsonp([2],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function e(n){return j._45(0,[(n()(),j._21(0,null,null,17,"div",[["class","wrap"],["id","input"]],null,null,null,null,null)),(n()(),j._43(null,[" \n  "])),(n()(),j._21(0,null,null,7,"div",[["class","example-button-section"]],null,null,null,null,null)),(n()(),j._43(null,["\n    "])),(n()(),j._21(0,null,null,4,"button",[["class","example-button mat-raised-button"],["md-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.clickExample()&&e}return e},M.i,M.a)),j._19(16384,null,0,W._32,[[2,W.j],j.q],null,null),j._19(180224,null,0,W.v,[j.Q,j.q,q.L,W.g],null,null),j._19(16384,null,0,W._41,[],null,null),(n()(),j._43(0,["",""])),(n()(),j._43(null,["\n  "])),(n()(),j._43(null,["\n  "])),(n()(),j._21(0,null,null,5,"textarea",[["class","input-area"],["mdInput",""]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==j._35(n,12)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==j._35(n,12).onTouched()&&e}if("compositionstart"===l){e=!1!==j._35(n,12)._compositionStart()&&e}if("compositionend"===l){e=!1!==j._35(n,12)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(u.wordService.rawText=t)&&e}if("keyup"===l){e=!1!==u.onKeyup()&&e}return e},null,null)),j._19(16384,null,0,I.b,[j.Q,j.q,[2,I.a]],null,null),j._40(1024,null,I.f,function(n){return[n]},[I.b]),j._19(671744,null,0,I.j,[[8,null],[8,null],[8,null],[2,I.f]],{model:[0,"model"]},{update:"ngModelChange"}),j._40(2048,null,I.g,null,[I.j]),j._19(16384,null,0,I.h,[I.g],null,null),(n()(),j._43(null,["\n"]))],function(n,l){n(l,14,0,l.component.wordService.rawText)},function(n,l){var t=l.component;n(l,4,0,j._35(l,6).disabled||null),n(l,8,0,t.exampleButtonText),n(l,11,0,t.placeholderText,j._35(l,16).ngClassUntouched,j._35(l,16).ngClassTouched,j._35(l,16).ngClassPristine,j._35(l,16).ngClassDirty,j._35(l,16).ngClassValid,j._35(l,16).ngClassInvalid,j._35(l,16).ngClassPending)})}function u(n){return j._45(0,[(n()(),j._21(0,null,null,1,"input-area",[],null,null,null,e,A)),j._19(114688,null,0,O,[T],null,null)],function(n,l){n(l,1,0)},null)}function o(n){return $._45(0,[(n()(),$._21(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),$._43(null,[" \n    (removed "," stop words)\n  "]))],null,function(n,l){n(l,1,0,l.component.wordService.stopWordCount)})}function r(n){return $._45(0,[(n()(),$._21(0,null,null,4,"div",[["class","wrap counter-section"]],null,null,null,null,null)),(n()(),$._43(null,["\n  Total words: ",". \n  Unique: ",".\n  "])),(n()(),$._15(16777216,null,null,1,null,o)),$._19(16384,null,0,E.k,[$._3,$.Z],{ngIf:[0,"ngIf"]},null),(n()(),$._43(null,["\n"]))],function(n,l){n(l,3,0,!0===l.component.wordService.stopWordsToggleState)},function(n,l){var t=l.component;n(l,1,0,t.wordService.rawInputArray.length,t.wordService.resultArray.length)})}function i(n){return $._45(0,[(n()(),$._21(0,null,null,1,"div",[["class","wrap counter-section"]],null,null,null,null,null)),(n()(),$._43(null,["\n  No words detected.\n"]))],null,null)}function a(n){return $._45(0,[(n()(),$._21(0,null,null,77,"div",[["class","word-display"]],[[24,"@slideIn",0]],null,null,null,null)),(n()(),$._43(null,["\n      "])),(n()(),$._21(0,null,null,8,"md-chip",[["class","chip mat-chip"],["color",""],["role","option"],["selected","true"],["tabindex","-1"]],[[2,"mat-chip-selected",null],[1,"disabled",0],[1,"aria-disabled",0]],[[null,"click"],[null,"focus"],[null,"blur"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==$._35(n,6)._handleClick(t)&&e}if("focus"===l){e=!1!=($._35(n,6)._hasFocus=!0)&&e}if("blur"===l){e=!1!=($._35(n,6)._hasFocus=!1)&&e}if("click"===l){e=!1!==u.chipSelect(n.context.$implicit)&&e}return e},null,null)),$._19(278528,null,0,E.n,[$.C,$.q,$.P],{ngStyle:[0,"ngStyle"]},null),$._38({cursor:0,color:1,"background-color":2,"max-width":3}),$._19(16384,null,0,Q._32,[[2,Q.j],$.q],null,null),$._19(147456,[[1,4]],0,Q.N,[$.Q,$.q],{color:[0,"color"],selected:[1,"selected"]},null),(n()(),$._43(null,['\n          "','" '])),(n()(),$._21(0,null,null,1,"span",[["class","chip-percent"]],null,null,null,null,null)),(n()(),$._43(null,["(",")"])),(n()(),$._43(null,["\n      "])),(n()(),$._43(null,["\n      "])),(n()(),$._21(0,null,null,64,"md-card",[["class","word-detail-card mat-card"]],[[24,"@shrinkOut",0]],null,null,F.k,F.b)),$._19(278528,null,0,E.n,[$.C,$.q,$.P],{ngStyle:[0,"ngStyle"]},null),$._38({"background-color":0}),$._19(16384,null,0,Q._32,[[2,Q.j],$.q],null,null),$._19(49152,null,0,Q.E,[],null,null),(n()(),$._43(0,["\n          "])),(n()(),$._21(0,null,0,14,"md-card-header",[["class","detail-inner-title mat-card-header"]],null,null,null,F.j,F.c)),$._19(16384,null,0,Q._32,[[2,Q.j],$.q],null,null),$._19(49152,null,0,Q.H,[],null,null),(n()(),$._43(2,["\n            "])),(n()(),$._21(0,null,1,9,"md-card-title",[["class","mat-card-title "]],null,null,null,null,null)),$._19(16384,null,0,Q._32,[[2,Q.j],$.q],null,null),$._19(16384,null,0,Q.J,[],null,null),(n()(),$._43(null,["\n              "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-label"]],null,null,null,null,null)),(n()(),$._43(null,["Word:"])),(n()(),$._43(null,[" \n              "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-value"]],null,null,null,null,null)),(n()(),$._43(null,["",""])),(n()(),$._43(null,["\n            "])),(n()(),$._43(2,["\n          "])),(n()(),$._43(0,["\n          "])),(n()(),$._21(0,null,0,24,"md-card-content",[["class","mat-card-content"]],null,null,null,null,null)),$._19(16384,null,0,Q._32,[[2,Q.j],$.q],null,null),$._19(16384,null,0,Q.G,[],null,null),(n()(),$._43(null,["\n            "])),(n()(),$._21(0,null,null,19,"p",[["class","occur-label"]],null,null,null,null,null)),(n()(),$._43(null,["\n             "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-label"]],null,null,null,null,null)),(n()(),$._43(null,["Occurrences:"])),(n()(),$._43(null,[" \n             "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-value"]],null,null,null,null,null)),(n()(),$._43(null,["",""])),(n()(),$._43(null,[" \n             "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-para"]],null,null,null,null,null)),(n()(),$._43(null,["",""])),(n()(),$._43(null,[".\n             "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-para"]],null,null,null,null,null)),(n()(),$._43(null,["It makes up "])),(n()(),$._43(null,["\n             "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-value"]],null,null,null,null,null)),(n()(),$._43(null,["",""])),(n()(),$._43(null,[" \n             "])),(n()(),$._21(0,null,null,1,"span",[["class","detail-inner-para"]],null,null,null,null,null)),(n()(),$._43(null,["of the text."])),(n()(),$._43(null,["\n            "])),(n()(),$._43(null,["\n          "])),(n()(),$._43(0,["\n          "])),(n()(),$._21(0,null,0,15,"md-card-actions",[["class","card-actions mat-card-actions"]],null,null,null,null,null)),$._19(16384,null,0,Q._32,[[2,Q.j],$.q],null,null),$._19(16384,null,0,Q.F,[],null,null),(n()(),$._43(null,["\n            "])),(n()(),$._21(0,null,null,10,"button",[["class","mat-button mat-raised-button"],["md-button",""],["md-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.getDefinition(n.context.$implicit)&&e}return e},F.i,F.a)),$._19(278528,null,0,E.n,[$.C,$.q,$.P],{ngStyle:[0,"ngStyle"]},null),$._38({"background-color":0}),$._19(16384,null,0,Q._32,[[2,Q.j],$.q],null,null),$._19(180224,null,0,Q.v,[$.Q,$.q,J.L,Q.g],null,null),$._19(16384,null,0,Q.w,[],null,null),$._19(16384,null,0,Q._41,[],null,null),(n()(),$._43(0,["\n              Get Definition\n              "])),(n()(),$._21(0,null,0,1,"i",[["class","material-icons card-action-icon"]],null,null,null,null,null)),(n()(),$._43(null,["call_made"])),(n()(),$._43(0,["\n            "])),(n()(),$._43(null,["\n          "])),(n()(),$._43(0,["\n      "])),(n()(),$._43(null,["\n    "]))],function(n,l){n(l,3,0,n(l,4,0,"pointer",l.component.chipDefaultTextColor,l.context.$implicit.bgColor,l.context.$implicit.displayPercent));n(l,6,0,"","true"),n(l,13,0,n(l,14,0,l.context.$implicit.bgColor)),n(l,65,0,n(l,66,0,l.context.$implicit.bgColor))},function(n,l){n(l,0,0,l.context.$implicit.state),n(l,2,0,$._35(l,6).selected,$._35(l,6).disabled||null,$._35(l,6).disabled.toString()),n(l,7,0,l.context.$implicit.word),n(l,9,0,l.context.$implicit.percent),n(l,12,0,l.context.$implicit.hideDetail),n(l,30,0,l.context.$implicit.word),n(l,44,0,l.context.$implicit.count),n(l,47,0,l.context.$implicit.count>1?"times":"time"),n(l,53,0,l.context.$implicit.percent),n(l,64,0,$._35(l,68).disabled||null)})}function s(n){return $._45(0,[(n()(),$._21(0,null,null,9,"section",[["class","wrap stop-word-toggle"]],null,null,null,null,null)),(n()(),$._43(null,["\n  "])),(n()(),$._21(0,null,null,6,"md-slide-toggle",[["class","example-margin mat-slide-toggle"],["color","primary"]],[[2,"mat-checked",null],[2,"mat-disabled",null],[2,"mat-slide-toggle-label-before",null]],[[null,"change"]],function(n,l,t){var e=!0,u=n.component;if("change"===l){e=!1!==u.toggleStopWords(t)&&e}return e},F.o,F.g)),$._40(5120,null,N.f,function(n){return[n]},[Q._51]),$._19(1228800,null,0,Q._51,[$.q,$.Q,J.L,Q.g,$.j],{color:[0,"color"],checked:[1,"checked"]},{change:"change"}),(n()(),$._43(0,["\n   "])),(n()(),$._21(0,null,0,1,"span",[["class","stop-word-toggle-label"]],null,null,null,null,null)),(n()(),$._43(null,["",""])),(n()(),$._43(0,["\n  "])),(n()(),$._43(null,["\n"])),(n()(),$._43(null,["\n\n"])),(n()(),$._15(16777216,null,null,1,null,r)),$._19(16384,null,0,E.k,[$._3,$.Z],{ngIf:[0,"ngIf"]},null),(n()(),$._43(null,["\n\n"])),(n()(),$._15(16777216,null,null,1,null,i)),$._19(16384,null,0,E.k,[$._3,$.Z],{ngIf:[0,"ngIf"]},null),(n()(),$._43(null,["  \n\n"])),(n()(),$._21(0,null,null,9,"div",[["class","wrap"]],null,null,null,null,null)),(n()(),$._43(null,["\n  "])),(n()(),$._21(0,null,null,6,"md-chip-list",[["class","mat-chip-list-stacked mat-chip-list"],["role","listbox"]],[[1,"tabindex",0]],[[null,"focus"],[null,"keydown"]],function(n,l,t){var e=!0;if("focus"===l){e=!1!==$._35(n,20).focus()&&e}if("keydown"===l){e=!1!==$._35(n,20)._keydown(t)&&e}return e},F.l,F.d)),$._19(1228800,null,1,Q.O,[],null,null),$._41(603979776,1,{chips:1}),(n()(),$._43(0,["\n    "])),(n()(),$._15(16777216,null,0,1,null,a)),$._19(802816,null,0,E.j,[$._3,$.Z,$.B],{ngForOf:[0,"ngForOf"]},null),(n()(),$._43(0,["\n  "])),(n()(),$._43(null,["\n"]))],function(n,l){var t=l.component;n(l,4,0,"primary",t.wordService.stopWordsToggleState),n(l,12,0,t.wordService.rawInputArray.length>0),n(l,15,0,0===t.wordService.rawInputArray.length),n(l,24,0,t.wordService.resultArray)},function(n,l){var t=l.component;n(l,2,0,$._35(l,4).checked,$._35(l,4).disabled,"before"==$._35(l,4).labelPosition),n(l,7,0,t.stopWordsLabel),n(l,19,0,$._35(l,20)._tabIndex)})}function c(n){return $._45(0,[(n()(),$._21(0,null,null,1,"result-area",[],null,null,null,s,K)),$._19(114688,null,0,z,[T,H.k,H.a],null,null)],function(n,l){n(l,1,0)},null)}function _(n){return U._45(0,[(n()(),U._21(0,null,null,12,"h1",[["class","wrap text-title"],["id","header"]],null,null,null,null,null)),(n()(),U._43(null,[""," "])),(n()(),U._21(0,null,null,10,"span",[["class","version"]],null,null,null,null,null)),(n()(),U._43(null,["\n  "])),(n()(),U._21(0,null,null,8,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;if("click"===l){e=!1!==U._35(n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),U._19(671744,[[2,4]],0,V.m,[V.k,V.a,X.h],{routerLink:[0,"routerLink"]},null),U._36(1),U._19(1720320,null,2,V.l,[V.k,U.q,U.Q,U.j],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),U._41(603979776,1,{links:1}),U._41(603979776,2,{linksWithHrefs:1}),U._38({exact:0}),U._36(1),(n()(),U._43(null,["v","\n  "])),(n()(),U._43(null,["\n"])),(n()(),U._21(0,null,null,4,"p",[["class","wrap subtitle"]],null,null,null,null,null)),(n()(),U._43(null,["\n  Text analyzer will examine your wall of text and display the occurrence of each unique word\n  in click-able bars. Clicking on a word will display more details.\n  "])),(n()(),U._21(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),U._21(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),U._43(null,['To get started, start typing or paste some text into the text-box below. To see an example,\n  click "Try Me!".\n  \n'])),(n()(),U._43(null,["\n"])),(n()(),U._21(0,null,null,1,"input-area",[],null,null,null,e,A)),U._19(114688,null,0,O,[T],null,null),(n()(),U._43(null,["\n"])),(n()(),U._21(0,null,null,1,"result-area",[],null,null,null,s,K)),U._19(114688,null,0,z,[T,V.k,V.a],null,null)],function(n,l){n(l,5,0,n(l,6,0,"/about")),n(l,7,0,n(l,10,0,!0),n(l,11,0,"router-link-active")),n(l,21,0),n(l,24,0)},function(n,l){var t=l.component;n(l,1,0,t.pageTitle),n(l,4,0,U._35(l,5).target,U._35(l,5).href),n(l,12,0,t.appVersion)})}function d(n){return U._45(0,[(n()(),U._21(0,null,null,1,"body-component",[],null,null,null,_,nn)),U._19(49152,null,0,G,[],null,null)],null,null)}function p(n){return un._45(0,[(n()(),un._21(0,null,null,1,"div",[["class","wrap"]],null,null,null,null,null)),(n()(),un._43(null,[" \n  404. This not the page you are looking for.\n"]))],null,null)}function g(n){return un._45(0,[(n()(),un._21(0,null,null,1,"not-found",[],null,null,null,p,rn)),un._19(49152,null,0,en,[],null,null)],null,null)}function h(n){return sn._45(0,[(n()(),sn._21(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),sn._19(212992,null,0,cn.o,[cn.b,sn._3,sn.m,[8,null],sn.j],null,null),(n()(),sn._43(null,["\n"]))],function(n,l){n(l,1,0)},null)}function f(n){return sn._45(0,[(n()(),sn._21(0,null,null,1,"app-root",[],null,null,null,h,dn)),sn._19(49152,null,0,w,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var m={production:!0},y=t("rgUS"),b=(t.n(y),function(){function n(){}return n}()),v=t("Dqrr"),w=(t.n(v),function(){function n(){}return n}()),x=[".text-title[_ngcontent-%COMP%]{text-align:center;font-family:Roboto,sans-serif;font-size:1.8rem;min-height:5rem;max-height:5rem;color:#000;margin-bottom:-2.5rem}.subtitle[_ngcontent-%COMP%]{font-family:Cairo,sans-serif;font-size:.9rem;color:#4d4d4d;line-height:1.4rem}.version[_ngcontent-%COMP%]{font-size:.7rem}"],k=["#input[_ngcontent-%COMP%]{text-align:center;max-width:50rem}.input-area[_ngcontent-%COMP%]{min-height:9rem;min-width:100%;max-width:50rem;font-family:Roboto,sans-serif;font-size:.9rem;color:#4d4d4d}.example-button-section[_ngcontent-%COMP%]{float:left;padding-bottom:.5rem}.example-button[_ngcontent-%COMP%]{background-color:#e6ffcc;font-family:Roboto,sans-serif}"],S=function(){function n(n,l,t,e,u,o){void 0===e&&(e=""),void 0===u&&(u="none"),void 0===o&&(o="active"),this.word=n,this.count=l,this.displayPercent=t,this.percent=t,this.bgColor=this.randColor(),this.hideDetail=u,this.state=o}return n.prototype.randHex=function(){return(Math.floor(56*Math.random())+200).toString(16)},n.prototype.randColor=function(){return"#"+this.randHex()+this.randHex()+this.randHex()},n.prototype.setDisplayPercent=function(n){this.displayPercent=+n+"%"},n.prototype.getDisplayPercent=function(){return+this.displayPercent.substring(0,this.displayPercent.length-1)},n}(),C=t("CPp0"),P=t("bKpL"),T=(t.n(P),function(){function n(n){this.http=n,this.rawInputArray=[],this.resultArray=[],this.stopWordsToggleState=!0,this.rawText="",this.stopWords=[],this.stopWordCount=0}return n.prototype.calculate=function(n){this.rawInputArray=n,this.resultArray=[];this.stopWordCount=0;for(var l=0,t=n;l<t.length;l++){var e=t[l];if(this.containsAttributeValue(e,this.resultArray))for(var u=0,o=this.resultArray;u<o.length;u++){var r=o[u];if(e===r.word){r.count++;break}}else{var i=new S(e,1,"50%");!0===this.stopWordsToggleState?this.stopWords.indexOf(i.word)<0?this.resultArray.push(i):this.stopWordCount++:this.resultArray.push(i)}}this.resultArray.sort(function(n,l){return l.count-n.count});for(var a=0,s=this.resultArray;a<s.length;a++){var i=s[a];i.percent=this.calculatePercentage(i.count,n.length)+"%",i.setDisplayPercent(this.calculatePercentage(i.count,n.length))}if(n.length>0&&this.resultArray.length>0){var c=this.resultArray[0].getDisplayPercent(),_=void 0;_=c<=99?(100-c)/2:0;for(var d=0,p=this.resultArray;d<p.length;d++){var i=p[d];i.setDisplayPercent(i.getDisplayPercent()+_)}}},n.prototype.getStopWords=function(){return this.http.get("assets/stopwords.json").map(function(n){return n.json()}).catch(this.handleError)},n.prototype.handleError=function(n){var l=n.message?n.message:n.status?n.status+" - "+n.statusText:"Server error";return console.error(l),P.Observable.throw(l)},n.prototype.containsAttributeValue=function(n,l){return l.filter(function(l){return l.word===n}).length>0},n.prototype.calculatePercentage=function(n,l){return 0!==l?+(n/l*100).toFixed(2):0},n.ctorParameters=function(){return[{type:C.d}]},n}()),O=function(){function n(n){this.wordService=n,this.placeholderText="Enter text to analyze...",this.exampleText="4 Love is patient, love is kind. It does not envy, it does not boast, it is not proud.5 It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.6 Love does not delight in evil but rejoices with the truth.7 It always protects, always trusts, always hopes, always perseveres.8 Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away.",this.exampleButtonText="Try me!"}return n.prototype.ngOnInit=function(){this.updateExampleButton()},n.prototype.clickExample=function(){""===this.wordService.rawText.trim()?(this.parseAndCalculate(this.exampleText),this.wordService.rawText=this.exampleText,this.exampleButtonText="Clear"):(clearTimeout(this.timer),this.wordService.rawText="",this.parseAndCalculate(this.wordService.rawText),this.exampleButtonText="Try me!")},n.prototype.onKeyup=function(){var n=this;this.updateExampleButton(),clearTimeout(this.timer);var l=this.extractWords(this.wordService.rawText);this.wordService.parsedText=l,this.timer=setTimeout(function(){null!=l&&n.wordService.calculate(l)},500)},n.prototype.extractWords=function(n){return""===n?[]:n.toLowerCase().match(/\b[^\d^_\W]+\b/g)},n.prototype.updateExampleButton=function(){""===this.wordService.rawText.trim()?this.exampleButtonText="Try me!":this.exampleButtonText="Clear"},n.prototype.parseAndCalculate=function(n){var l=this.extractWords(n);this.wordService.parsedText=l,this.wordService.calculate(l)},n.ctorParameters=function(){return[{type:T}]},n}(),j=t("/oeL"),M=t("v6Q/"),W=t("Z04r"),q=t("p4Sk"),I=t("bm2B"),L=[k],A=j._18({encapsulation:0,styles:L,data:{}}),D=(j._16("input-area",O,u,{},{},[]),["[_nghost-%COMP%]{font-family:Roboto;letter-spacing:.1rem}.details-button[_ngcontent-%COMP%]{float:right;margin-top:-2.1rem}.chip[_ngcontent-%COMP%]{max-width:44.5rem;font-weight:700;user-select:none;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.chip-percent[_ngcontent-%COMP%]{font-family:monospace;font-weight:400}.word-detail-card[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;margin-bottom:.5rem;letter-spacing:0}.detail-inner-label[_ngcontent-%COMP%]{color:#4d4d4d}.occur-label[_ngcontent-%COMP%]{margin-left:-.5rem}.detail-inner-value[_ngcontent-%COMP%]{font-weight:800;color:#595959}.detail-inner-para[_ngcontent-%COMP%]{color:#4d4d4d}.card-actions[_ngcontent-%COMP%]{padding-left:.5rem}.detail-inner-title[_ngcontent-%COMP%]{margin-left:-1rem}.card-action-icon[_ngcontent-%COMP%]{margin-bottom:.1rem}.counter-section[_ngcontent-%COMP%]{text-align:right;font-family:Roboto,sans-serif;font-size:.8rem;margin-top:-2.7rem}.stop-word-toggle-label[_ngcontent-%COMP%]{font-size:.8rem}@media only screen and (min-device-width:320px) and (max-device-width:736px){.counter-section[_ngcontent-%COMP%]{text-align:left;margin:auto}}"]),B=t("BkNc"),z=function(){function n(n,l,t){this.wordService=n,this.router=l,this.route=t,this.chipDefaultTextColor="#000",this.googleDefineUrl="https://www.google.com/search?q=definition+for+",this.updateToggleLabel()}return n.prototype.ngOnInit=function(){var n=this;this.route.queryParams.subscribe(function(l){void 0!==l.ignoreStopWords?n.wordService.stopWordsToggleState="true"===l.ignoreStopWords:n.router.navigate(["/"],{queryParams:{ignoreStopWords:n.wordService.stopWordsToggleState}})}),this.wordService.getStopWords().subscribe(function(l){n.wordService.stopWords=l},function(l){n.errorMessage=l},function(){})},n.prototype.chipSelect=function(n){n.hideDetail="inherit"===n.hideDetail?"none":"inherit"},n.prototype.getDefinition=function(n){window.open(this.googleDefineUrl+n.word,"_blank")},n.prototype.toggleStopWords=function(n){this.wordService.stopWordsToggleState=n.checked,this.router.navigate(["/"],{queryParams:{ignoreStopWords:this.wordService.stopWordsToggleState}}),void 0!==this.wordService.parsedText&&this.wordService.parsedText.length>0&&this.wordService.calculate(this.wordService.parsedText),this.updateToggleLabel()},n.prototype.updateToggleLabel=function(){this.stopWordsLabel=!0===this.wordService.stopWordsToggleState?"Ignoring Stop Words":"Keeping Stop Words"},n.ctorParameters=function(){return[{type:T},{type:B.k},{type:B.a}]},n}(),$=t("/oeL"),E=t("qbdv"),Q=t("Z04r"),F=t("v6Q/"),J=t("p4Sk"),N=t("bm2B"),H=t("BkNc"),R=[D],K=$._18({encapsulation:0,styles:R,data:{animation:[{type:7,name:"slideIn",definitions:[{type:0,name:"active",styles:{type:6,styles:{transform:"translateX(0) scale(1)"},offset:null},options:void 0},{type:1,expr:"void => active",animation:[{type:6,styles:{transform:"translateX(0) scale(0)"},offset:null},{type:4,styles:null,timings:150}],options:null},{type:1,expr:"active => cleared",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%) scale(1)"},offset:null},timings:100}],options:null}],options:{}},{type:7,name:"shrinkOut",definitions:[{type:0,name:"inherit",styles:{type:6,styles:{height:"*",display:"inherit"},offset:null},options:void 0},{type:0,name:"none",styles:{type:6,styles:{display:"none"},offset:null},options:void 0},{type:1,expr:"inherit => none",animation:[{type:6,styles:{height:"*"},offset:null},{type:4,styles:{type:6,styles:{height:0},offset:null},timings:100}],options:null}],options:{}}]}}),Z=($._16("result-area",z,c,{},{},[]),t("ksPu").version),G=function(){function n(){this.pageTitle="Text Analyzer",this.appVersion=Z}return n.ctorParameters=function(){return[]},n}(),U=t("/oeL"),V=t("BkNc"),X=t("qbdv"),Y=[x],nn=U._18({encapsulation:0,styles:Y,data:{}}),ln=U._16("body-component",G,d,{},{},[]),tn=["[_nghost-%COMP%]{text-align:center}"],en=function(){function n(){}return n.ctorParameters=function(){return[]},n}(),un=t("/oeL"),on=[tn],rn=un._18({encapsulation:0,styles:on,data:{}}),an=un._16("not-found",en,g,{},{},[]),sn=t("/oeL"),cn=t("BkNc"),_n=[],dn=sn._18({encapsulation:2,styles:_n,data:{}}),pn=sn._16("app-root",w,f,{},{},[]),gn=function(){function n(){}return n}(),hn=function(){function n(){}return n}(),fn=function(){function n(){}return n}(),mn=function(){function n(){}return n}(),yn=function(){function n(){}return n}(),bn=t("/oeL"),vn=t("v6Q/"),wn=t("BkNc"),xn=t("qbdv"),kn=t("bm2B"),Sn=t("p4Sk"),Cn=t("fc+i"),Pn=t("Z04r"),Tn=t("CPp0"),On=t("f9zQ"),jn=t("fL27"),Mn=t("EyWH"),Wn=bn._17(b,[w],function(n){return bn._32([bn._33(512,bn.m,bn._13,[[8,[ln,an,vn.h,pn]],[3,bn.m],bn.H]),bn._33(5120,wn.a,wn.x,[wn.k]),bn._33(4608,wn.d,wn.d,[]),bn._33(6144,wn.f,null,[wn.d]),bn._33(135680,wn.p,wn.p,[wn.k,bn.G,bn.k,bn.z,wn.f]),bn._33(4608,wn.e,wn.e,[]),bn._33(5120,wn.h,wn.A,[wn.y]),bn._33(5120,bn.b,function(n){return[n]},[wn.h]),bn._33(5120,bn.D,bn._31,[[3,bn.D]]),bn._33(4608,xn.m,xn.l,[bn.D]),bn._33(4608,kn.m,kn.m,[]),bn._33(6144,Sn.o,null,[Cn.b]),bn._33(4608,Sn.q,Sn.q,[[2,Sn.o]]),bn._33(4608,Sn.L,Sn.L,[]),bn._33(5120,Pn._86,Pn._96,[[3,Pn._86],bn.J,Sn.L]),bn._33(5120,Pn._93,Pn._95,[[3,Pn._93],Pn._86]),bn._33(4608,Pn._87,Pn._87,[Pn._86,Pn._93]),bn._33(5120,Pn.g,Pn.f,[[3,Pn.g],bn.J,Sn.L]),bn._33(5120,Pn._82,Pn._94,[[3,Pn._82]]),bn._33(4608,Pn._99,Pn._99,[Pn._93]),bn._33(4608,Pn._81,Pn._81,[Pn._87,Pn._82,bn.m,Pn._99,bn.g,bn.z,bn.J]),bn._33(4608,Tn.c,Tn.c,[]),bn._33(4608,Tn.g,Tn.b,[]),bn._33(5120,Tn.i,Tn.j,[]),bn._33(4608,Tn.h,Tn.h,[Tn.c,Tn.g,Tn.i]),bn._33(4608,Tn.f,Tn.a,[]),bn._33(5120,Tn.d,Tn.k,[Tn.h,Tn.f]),bn._33(4608,T,T,[Tn.d]),bn._33(4608,Cn.f,Cn.g,[]),bn._33(5120,bn.c,bn._22,[]),bn._33(5120,bn.B,bn._28,[]),bn._33(5120,bn.C,bn._29,[]),bn._33(4608,Cn.c,Cn.t,[xn.c]),bn._33(6144,bn.T,null,[Cn.c]),bn._33(5120,Cn.d,function(n,l,t,e){return[new Cn.l(n),new Cn.p(l),new Cn.o(t,e)]},[xn.c,xn.c,xn.c,Cn.f]),bn._33(4608,Cn.e,Cn.e,[Cn.d,bn.J]),bn._33(135680,Cn.n,Cn.n,[xn.c]),bn._33(4608,Cn.m,Cn.m,[Cn.e,Cn.n]),bn._33(5120,On.a,jn.d,[]),bn._33(5120,On.c,jn.e,[]),bn._33(4608,On.b,jn.c,[On.a,On.c]),bn._33(5120,bn.R,jn.f,[Cn.m,On.b,bn.J]),bn._33(6144,Cn.q,null,[Cn.n]),bn._33(4608,bn._0,bn._0,[bn.J]),bn._33(4608,Cn.h,Cn.h,[xn.c]),bn._33(4608,Cn.j,Cn.j,[xn.c]),bn._33(4608,Mn.b,jn.b,[bn.R]),bn._33(1024,wn.s,wn.v,[[3,wn.k]]),bn._33(1024,bn.r,Cn.r,[]),bn._33(512,wn.y,wn.y,[bn.z]),bn._33(1024,bn.I,function(){return[wn.t()]},[]),bn._33(1024,bn.d,function(n,l,t){return[wn.z(n),Cn.s(l,t)]},[wn.y,[2,Cn.i],[2,bn.I]]),bn._33(512,bn.e,bn.e,[[2,bn.d]]),bn._33(131584,bn._20,bn._20,[bn.J,bn._14,bn.z,bn.r,bn.m,bn.e]),bn._33(2048,bn.g,null,[bn._20]),bn._33(512,wn.r,wn.c,[]),bn._33(512,wn.b,wn.b,[]),bn._33(256,wn.g,{},[]),bn._33(1024,xn.h,wn.u,[xn.s,[2,xn.a],wn.g]),bn._33(512,xn.g,xn.g,[xn.h]),bn._33(512,bn.k,bn.k,[]),bn._33(512,bn.G,bn.X,[bn.k,[2,bn.Y]]),bn._33(1024,wn.i,function(){return[[{path:"",component:G},{path:"about",loadChildren:"./versions/about.module#AboutModule"},{path:"**",component:en}]]},[]),bn._33(1024,wn.k,wn.w,[bn.g,wn.r,wn.b,xn.g,bn.z,bn.G,bn.k,wn.i,wn.g,[2,wn.q],[2,wn.j]]),bn._33(512,wn.n,wn.n,[[2,wn.s],[2,wn.k]]),bn._33(512,gn,gn,[]),bn._33(512,xn.b,xn.b,[]),bn._33(512,kn.l,kn.l,[]),bn._33(512,kn.d,kn.d,[]),bn._33(512,Pn.c,Pn.c,[]),bn._33(512,Sn.c,Sn.c,[]),bn._33(256,Pn.k,!0,[]),bn._33(512,Pn.Q,Pn.Q,[[2,Cn.b],[2,Pn.k]]),bn._33(512,Sn.M,Sn.M,[]),bn._33(512,Pn._85,Pn._85,[]),bn._33(512,Pn._43,Pn._43,[]),bn._33(512,Pn._90,Pn._90,[]),bn._33(512,Pn.x,Pn.x,[]),bn._33(512,Sn.O,Sn.O,[]),bn._33(512,Pn._83,Pn._83,[]),bn._33(512,Pn._76,Pn._76,[]),bn._33(512,hn,hn,[]),bn._33(512,Pn.I,Pn.I,[]),bn._33(512,Pn.P,Pn.P,[]),bn._33(512,Pn._52,Pn._52,[]),bn._33(512,fn,fn,[]),bn._33(512,mn,mn,[]),bn._33(512,bn.f,bn.f,[bn.g]),bn._33(512,Cn.a,Cn.a,[[3,Cn.a]]),bn._33(512,jn.a,jn.a,[]),bn._33(512,Tn.e,Tn.e,[]),bn._33(512,yn,yn,[]),bn._33(512,b,b,[])])}),qn=t("/oeL"),In=t("fc+i");m.production&&Object(qn._7)(),Object(In.k)().bootstrapModuleFactory(Wn)},gFIY:function(n,l,t){function e(n){var l=u[n];return l?t.e(l[1]).then(function(){return t(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var u={"./versions/about.module.ngfactory":["g9+W",0]};e.keys=function(){return Object.keys(u)},n.exports=e,e.id="gFIY"},ksPu:function(n,l){n.exports={name:"countit",version:"1.3.2",license:"MIT",homepage:"https://yiqu.github.io/countit/",repository:{type:"git",url:"https://github.com/yiqu/countit.git"},scripts:{ng:"ng",start:"ng serve",build:"ng build",test:"ng test",lint:"ng lint",e2e:"ng e2e","build.prod":"ng build --prod --base-href=countit/"},dependencies:{"@angular/animations":"^4.3.5","@angular/cdk":"^2.0.0-beta.8","@angular/common":"^4.3.5","@angular/compiler":"^4.3.5","@angular/core":"^4.3.5","@angular/forms":"^4.3.5","@angular/http":"^4.3.5","@angular/material":"^2.0.0-beta.8","@angular/platform-browser":"^4.3.5","@angular/platform-browser-dynamic":"^4.3.5","@angular/router":"^4.3.5","core-js":"^2.4.1",hammerjs:"^2.0.8",rxjs:"^5.4.1","zone.js":"^0.8.4"},devDependencies:{"@angular/cli":"^1.2.1","@angular/compiler-cli":"^4.3.5","@types/jasmine":"2.5.38","@types/node":"~6.0.60",codelyzer:"~2.0.0","jasmine-core":"~2.5.2","jasmine-spec-reporter":"~3.2.0",karma:"~1.4.1","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","karma-coverage-istanbul-reporter":"^0.2.0",protractor:"~5.1.0","ts-node":"~2.0.0",tslint:"~4.5.0",typescript:"~2.4.1"}}}},[0]);