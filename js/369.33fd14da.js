"use strict";(self["webpackChunkcomponent_library"]=self["webpackChunkcomponent_library"]||[]).push([[369],{369:function(l,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(252),o=e(577);const s=l=>((0,r.dD)("data-v-dca84bb8"),l=l(),(0,r.Cn)(),l),a=s((()=>(0,r._)("div",{class:"table-txt"},[(0,r._)("p",null,"Table 3 functionality:"),(0,r._)("ul",{class:"table-txt__ul"},[(0,r._)("li",null,"adaptive for different screen sizes: scrolling in two directions"),(0,r._)("li",null,"fixed table header and the first cell of the row"),(0,r._)("li",null,"table width - by content"),(0,r._)("li",null,"CSS Scroll Shadows"),(0,r._)("li",null,"top scrollbar (may be hidden by browser, operating system)")])],-1))),i=s((()=>(0,r._)("h2",{class:"table-title"},"Table",-1))),n={class:"table",ref:"tableRef"},c=s((()=>(0,r._)("thead",{class:"t-head-fixed"},[(0,r._)("tr",null,[(0,r._)("th",{scope:"row"},"name"),(0,r._)("th",null,"maidenName"),(0,r._)("th",null,"age"),(0,r._)("th",null,"gender"),(0,r._)("th",null,"email"),(0,r._)("th",null,"phone"),(0,r._)("th",null,"username"),(0,r._)("th",null,"birthDate"),(0,r._)("th",null,"image"),(0,r._)("th",null,"bloodGroup"),(0,r._)("th",null,"height"),(0,r._)("th",null,"weight"),(0,r._)("th",null,"eyeColor"),(0,r._)("th",null,"hairColor"),(0,r._)("th",null,"domain"),(0,r._)("th",null,"ip"),(0,r._)("th",null,"address"),(0,r._)("th",null,"city"),(0,r._)("th",null,"postalCode"),(0,r._)("th",null,"state"),(0,r._)("th",null,"macAddress"),(0,r._)("th",null,"university"),(0,r._)("th",null,"ein"),(0,r._)("th",null,"ssn")])],-1))),u={scope:"row"};function h(l,t,e,s,h,d){return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,i,(0,r._)("div",{class:"scrollbar-top",style:(0,o.j5)(h.scrollBarStyle),ref:"scrollbarRef",onScroll:t[0]||(t[0]=l=>d.scrollWrapTable(l)),onPointerenter:t[1]||(t[1]=(...l)=>d.focusScrollBarTop&&d.focusScrollBarTop(...l))},[(0,r._)("div",{class:"scrollbar-top__inner",style:(0,o.j5)(h.scrollBarInnerStyle)},null,4)],36),(0,r._)("div",{class:(0,o.C_)(["wrap-table",h.wrapTableClass]),onScroll:t[2]||(t[2]=l=>d.scrollScrollbar(l)),ref:"wrapRef",onPointerenter:t[3]||(t[3]=(...l)=>d.focusWrapTable&&d.focusWrapTable(...l))},[(0,r._)("table",n,[c,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.table,((l,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("td",u,(0,o.zw)(l.firstName)+" "+(0,o.zw)(l.lastName),1),(0,r._)("td",null,(0,o.zw)(l.maidenName),1),(0,r._)("td",null,(0,o.zw)(l.age),1),(0,r._)("td",null,(0,o.zw)(l.gender),1),(0,r._)("td",null,(0,o.zw)(l.email),1),(0,r._)("td",null,(0,o.zw)(l.phone),1),(0,r._)("td",null,(0,o.zw)(l.username),1),(0,r._)("td",null,(0,o.zw)(l.birthDate),1),(0,r._)("td",null,(0,o.zw)(l.image),1),(0,r._)("td",null,(0,o.zw)(l.bloodGroup),1),(0,r._)("td",null,(0,o.zw)(l.height),1),(0,r._)("td",null,(0,o.zw)(l.weight),1),(0,r._)("td",null,(0,o.zw)(l.eyeColor),1),(0,r._)("td",null,(0,o.zw)(l.hair.color),1),(0,r._)("td",null,(0,o.zw)(l.domain),1),(0,r._)("td",null,(0,o.zw)(l.ip),1),(0,r._)("td",null,(0,o.zw)(l.address.address),1),(0,r._)("td",null,(0,o.zw)(l.address.city),1),(0,r._)("td",null,(0,o.zw)(l.address.postalCode),1),(0,r._)("td",null,(0,o.zw)(l.address.state),1),(0,r._)("td",null,(0,o.zw)(l.macAddress),1),(0,r._)("td",null,(0,o.zw)(l.university),1),(0,r._)("td",null,(0,o.zw)(l.ein),1),(0,r._)("td",null,(0,o.zw)(l.ssn),1)])))),128))])],512)],34)],64)}var d=e(771),w={name:"Table3",data(){return{table:d,scrollBarStyle:{width:0},scrollBarInnerStyle:{width:0,height:"1px"},allowInitResize:!0,resizeTimeoutID:null,wrapTableClass:"",wrapScrollLeftPosition:0,scrollbarScrollLeftPosition:0,allowScrollScrollbar:!0,allowScrollWrapTable:!0,scrollScrollbarTimeoutID:null,scrollWrapTableTimeoutID:null,scrollbarFocus:!1,wrapTableFocus:!1}},mounted(){this.init(),window.addEventListener("resize",(()=>{this.allowInitResize&&(this.allowInitResize=!1,clearTimeout(this.resizeTimeoutID),this.resizeTimeoutID=setTimeout((()=>{this.init(),this.allowInitResize=!0}),1e3))}))},updated(){this.init()},unmounted(){window.removeEventListener("resize",this.init)},methods:{init(){let l=this.$refs.wrapRef;if(l){let t=parseFloat(window.getComputedStyle(l)["border-width"]),e=this.$refs.tableRef;this.scrollBarStyle.width=l.clientWidth+2*t+"px",this.scrollBarInnerStyle.width=e.offsetWidth+"px",e.offsetHeight>l.offsetHeight?this.wrapTableClass="wrap-table--with-scrollbar":this.wrapTableClass="wrap-table--without-scrollbar"}},scrollWrapTable(l){if(this.scrollbarFocus){let t=l.target.scrollLeft;(t>this.scrollbarScrollLeftPosition||t<this.scrollbarScrollLeftPosition)&&this.allowScrollWrapTable&&(this.allowScrollWrapTable=!1,clearTimeout(this.scrollWrapTableTimeoutID),this.scrollWrapTableTimeoutID=setTimeout((()=>{let t=this.$refs.wrapRef;t.scrollLeft=l.target.scrollLeft,this.allowScrollWrapTable=!0,console.log("scrollWrapTable")}),50)),this.scrollbarScrollLeftPosition=t}},scrollScrollbar(l){if(this.wrapTableFocus){let t=l.target.scrollLeft;(t>this.wrapScrollLeftPosition||t<this.wrapScrollLeftPosition)&&this.allowScrollScrollbar&&(this.allowScrollScrollbar=!1,clearTimeout(this.scrollScrollbarTimeoutID),this.scrollScrollbarTimeoutID=setTimeout((()=>{let t=this.$refs.scrollbarRef;t.scrollLeft=l.target.scrollLeft,this.allowScrollScrollbar=!0,console.log("scrollScrollbar")}),50)),this.wrapScrollLeftPosition=t}},focusScrollBarTop(){this.scrollbarFocus=!0,this.wrapTableFocus=!1},focusWrapTable(){this.wrapTableFocus=!0,this.scrollbarFocus=!1}}},b=e(744);const _=(0,b.Z)(w,[["render",h],["__scopeId","data-v-dca84bb8"]]);var p=_}}]);
//# sourceMappingURL=369.33fd14da.js.map