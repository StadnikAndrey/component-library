"use strict";(self["webpackChunkcomponent_library"]=self["webpackChunkcomponent_library"]||[]).push([[369],{8369:function(l,t,e){e.r(t),e.d(t,{default:function(){return _}});var r=e(6252),o=e(3577),a=function(l){return(0,r.dD)("data-v-dca84bb8"),l=l(),(0,r.Cn)(),l},n=a((function(){return(0,r._)("div",{class:"table-txt"},[(0,r._)("p",null,"Table 3 functionality:"),(0,r._)("ul",{class:"table-txt__ul"},[(0,r._)("li",null,"adaptive for different screen sizes: scrolling in two directions"),(0,r._)("li",null,"fixed table header and the first cell of the row"),(0,r._)("li",null,"table width - by content"),(0,r._)("li",null,"CSS Scroll Shadows"),(0,r._)("li",null,"top scrollbar (may be hidden by browser, operating system)")])],-1)})),i=a((function(){return(0,r._)("h2",{class:"table-title"},"Table",-1)})),s={class:"table",ref:"tableRef"},c=a((function(){return(0,r._)("thead",{class:"t-head-fixed"},[(0,r._)("tr",null,[(0,r._)("th",{scope:"row"},"name"),(0,r._)("th",null,"maidenName"),(0,r._)("th",null,"age"),(0,r._)("th",null,"gender"),(0,r._)("th",null,"email"),(0,r._)("th",null,"phone"),(0,r._)("th",null,"username"),(0,r._)("th",null,"birthDate"),(0,r._)("th",null,"image"),(0,r._)("th",null,"bloodGroup"),(0,r._)("th",null,"height"),(0,r._)("th",null,"weight"),(0,r._)("th",null,"eyeColor"),(0,r._)("th",null,"hairColor"),(0,r._)("th",null,"domain"),(0,r._)("th",null,"ip"),(0,r._)("th",null,"address"),(0,r._)("th",null,"city"),(0,r._)("th",null,"postalCode"),(0,r._)("th",null,"state"),(0,r._)("th",null,"macAddress"),(0,r._)("th",null,"university"),(0,r._)("th",null,"ein"),(0,r._)("th",null,"ssn")])],-1)})),u={scope:"row"};function d(l,t,e,a,d,h){return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,i,(0,r._)("div",{class:"scrollbar-top",style:(0,o.j5)(d.scrollBarStyle),ref:"scrollbarRef",onScroll:t[0]||(t[0]=function(l){return h.scrollWrapTable(l)}),onPointerenter:t[1]||(t[1]=function(){return h.focusScrollBarTop&&h.focusScrollBarTop.apply(h,arguments)})},[(0,r._)("div",{class:"scrollbar-top__inner",style:(0,o.j5)(d.scrollBarInnerStyle)},null,4)],36),(0,r._)("div",{class:(0,o.C_)(["wrap-table",d.wrapTableClass]),onScroll:t[2]||(t[2]=function(l){return h.scrollScrollbar(l)}),ref:"wrapRef",onPointerenter:t[3]||(t[3]=function(){return h.focusWrapTable&&h.focusWrapTable.apply(h,arguments)})},[(0,r._)("table",s,[c,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.table,(function(l,t){return(0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("td",u,(0,o.zw)(l.firstName)+" "+(0,o.zw)(l.lastName),1),(0,r._)("td",null,(0,o.zw)(l.maidenName),1),(0,r._)("td",null,(0,o.zw)(l.age),1),(0,r._)("td",null,(0,o.zw)(l.gender),1),(0,r._)("td",null,(0,o.zw)(l.email),1),(0,r._)("td",null,(0,o.zw)(l.phone),1),(0,r._)("td",null,(0,o.zw)(l.username),1),(0,r._)("td",null,(0,o.zw)(l.birthDate),1),(0,r._)("td",null,(0,o.zw)(l.image),1),(0,r._)("td",null,(0,o.zw)(l.bloodGroup),1),(0,r._)("td",null,(0,o.zw)(l.height),1),(0,r._)("td",null,(0,o.zw)(l.weight),1),(0,r._)("td",null,(0,o.zw)(l.eyeColor),1),(0,r._)("td",null,(0,o.zw)(l.hair.color),1),(0,r._)("td",null,(0,o.zw)(l.domain),1),(0,r._)("td",null,(0,o.zw)(l.ip),1),(0,r._)("td",null,(0,o.zw)(l.address.address),1),(0,r._)("td",null,(0,o.zw)(l.address.city),1),(0,r._)("td",null,(0,o.zw)(l.address.postalCode),1),(0,r._)("td",null,(0,o.zw)(l.address.state),1),(0,r._)("td",null,(0,o.zw)(l.macAddress),1),(0,r._)("td",null,(0,o.zw)(l.university),1),(0,r._)("td",null,(0,o.zw)(l.ein),1),(0,r._)("td",null,(0,o.zw)(l.ssn),1)])})),128))])],512)],34)],64)}var h=e(1771),w={name:"Table3",data:function(){return{table:h,scrollBarStyle:{width:0},scrollBarInnerStyle:{width:0,height:"1px"},allowInitResize:!0,resizeTimeoutID:null,wrapTableClass:"",wrapScrollLeftPosition:0,scrollbarScrollLeftPosition:0,allowScrollScrollbar:!0,allowScrollWrapTable:!0,scrollScrollbarTimeoutID:null,scrollWrapTableTimeoutID:null,scrollbarFocus:!1,wrapTableFocus:!1}},mounted:function(){var l=this;this.init(),window.addEventListener("resize",(function(){l.allowInitResize&&(l.allowInitResize=!1,clearTimeout(l.resizeTimeoutID),l.resizeTimeoutID=setTimeout((function(){l.init(),l.allowInitResize=!0}),1e3))}))},updated:function(){this.init()},unmounted:function(){window.removeEventListener("resize",this.init)},methods:{init:function(){var l=this.$refs.wrapRef;if(l){var t=parseFloat(window.getComputedStyle(l)["border-width"]),e=this.$refs.tableRef;this.scrollBarStyle.width=l.clientWidth+2*t+"px",this.scrollBarInnerStyle.width=e.offsetWidth+"px",e.offsetHeight>l.offsetHeight?this.wrapTableClass="wrap-table--with-scrollbar":this.wrapTableClass="wrap-table--without-scrollbar"}},scrollWrapTable:function(l){var t=this;if(this.scrollbarFocus){var e=l.target.scrollLeft;(e>this.scrollbarScrollLeftPosition||e<this.scrollbarScrollLeftPosition)&&this.allowScrollWrapTable&&(this.allowScrollWrapTable=!1,clearTimeout(this.scrollWrapTableTimeoutID),this.scrollWrapTableTimeoutID=setTimeout((function(){var e=t.$refs.wrapRef;e.scrollLeft=l.target.scrollLeft,t.allowScrollWrapTable=!0,console.log("scrollWrapTable")}),50)),this.scrollbarScrollLeftPosition=e}},scrollScrollbar:function(l){var t=this;if(this.wrapTableFocus){var e=l.target.scrollLeft;(e>this.wrapScrollLeftPosition||e<this.wrapScrollLeftPosition)&&this.allowScrollScrollbar&&(this.allowScrollScrollbar=!1,clearTimeout(this.scrollScrollbarTimeoutID),this.scrollScrollbarTimeoutID=setTimeout((function(){var e=t.$refs.scrollbarRef;e.scrollLeft=l.target.scrollLeft,t.allowScrollScrollbar=!0,console.log("scrollScrollbar")}),50)),this.wrapScrollLeftPosition=e}},focusScrollBarTop:function(){this.scrollbarFocus=!0,this.wrapTableFocus=!1},focusWrapTable:function(){this.wrapTableFocus=!0,this.scrollbarFocus=!1}}},b=e(3744);const f=(0,b.Z)(w,[["render",d],["__scopeId","data-v-dca84bb8"]]);var _=f}}]);
//# sourceMappingURL=369-legacy.edaa4ade.js.map