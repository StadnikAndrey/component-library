"use strict";(self["webpackChunkcomponent_library"]=self["webpackChunkcomponent_library"]||[]).push([[793],{793:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var r=s(252),i=s(577);const a=e=>((0,r.dD)("data-v-16fe4230"),e=e(),(0,r.Cn)(),e),n={key:0,class:"timer-circle__wrap"},l={class:"timer-circle__wrap-svg"},o=a((()=>(0,r._)("circle",{class:"timer-circle__svg-circle",r:"30",fill:"none",cx:"50%",cy:"50%",stroke:"#c2c2c2","stroke-width":"10","stroke-dasharray":"189","stroke-dashoffset":"0"},null,-1))),u={class:"timer-circle__svg-circle",r:"30",fill:"none",cx:"50%",cy:"50%",stroke:"none","stroke-width":"10","stroke-dasharray":"189","stroke-dashoffset":"0"},c=["values","dur"],d=["values","dur"],h={class:"timer-circle__wrap-txt"},m={class:"timer-circle__txt-unit"},v={class:"timer-circle__txt-value"};function _(e,t,s,a,_,f){return _.show?((0,r.wg)(),(0,r.iD)("div",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.sectors,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["timer-circle__item","hours"==t&&0==e.value?"timer-circle__item--hide":""]),key:t},[(0,r._)("div",l,[((0,r.wg)(),(0,r.iD)("svg",{width:"72",height:"72",key:e.value},[o,(0,r._)("circle",u,[((0,r.wg)(),(0,r.iD)("animate",{key:e.animateValuesStart,attributeName:"stroke-dashoffset",values:`${e.animateValuesStart};189;`,dur:e.duration},null,8,c)),(0,r._)("animate",{attributeName:"stroke",values:"hours"==t?"#0288d1":"minutes"==t?"#29af00":"#ffc400",dur:e.duration},null,8,d)])]))]),(0,r._)("div",h,[(0,r._)("p",m,(0,i.zw)(e.unit),1),(0,r._)("p",v,(0,i.zw)(e.value),1)])],2)))),128))])):(0,r.kq)("",!0)}var f={name:"CountDownTimerCircleView",props:["runningTimeProp"],data(){return{IdInterval:null,show:!0,runningTime:7205,sectors:{hours:{unit:"hour",value:"",duration:"",animateValuesStart:0},minutes:{unit:"min",value:"",duration:"",animateValuesStart:0},seconds:{unit:"sec",value:"",duration:"",animateValuesStart:0}}}},created(){void 0!=this.runningTimeProp&&(this.runningTime=this.runningTimeProp),this.countTime()},destroyed(){clearInterval(this.IdInterval)},methods:{countTime(){let e=this.runningTime/3600;if(this.runningTime<0||e>24||"number"!=typeof this.runningTime)return this.show=!1,void console.log("requirements to running time: seconds, <24 hours, >0, type Number!!!!!!");let t=new Date(Date.now()+1e3*this.runningTime),s=null,r=null,i=null,a=null;clearInterval(this.IdInterval);let n=()=>{s=Date.parse(t)-Date.parse(new Date),a=Math.floor(s/36e5%24),i=Math.floor(s/1e3/60%60),r=Math.floor(s/1e3%60),s<=0||!s?(console.log("end"),r=0,this.sectors.seconds.value=("0"+r).slice(-2),this.sectors.seconds.animateValuesStart=189,clearInterval(this.IdInterval)):s>0&&(this.sectors.hours.value=a,this.sectors.minutes.value=("0"+i).slice(-2),this.sectors.seconds.value=("0"+r).slice(-2),this.sectors.hours.duration=60*a*60+"s",this.sectors.minutes.duration=60*i+"s",this.sectors.seconds.duration=r+"s",this.sectors.hours.animateValuesStart=189-189*a/24,this.sectors.minutes.animateValuesStart=189-i/6*189/10,this.sectors.seconds.animateValuesStart=189-r/6*189/10)};this.IdInterval=setInterval(n,1e3)}}},w=s(744);const g=(0,w.Z)(f,[["render",_],["__scopeId","data-v-16fe4230"]]);var p=g}}]);
//# sourceMappingURL=793.991129f9.js.map