"use strict";(self["webpackChunkcomponent_library"]=self["webpackChunkcomponent_library"]||[]).push([[50],{50:function(e,s,t){t.r(s),t.d(s,{default:function(){return b}});var n=t(252),a=t(577);const o=e=>((0,n.dD)("data-v-f7393c66"),e=e(),(0,n.Cn)(),e),c=o((()=>(0,n._)("h2",{class:"countdowntimer-title"},"Until the end of the week left:",-1))),r={class:"counter"},u={class:"counter__item"},i={class:"counter__value"},d={class:"counter__value-name"},l={class:"counter__item"},_={class:"counter__value"},m={class:"counter__value-name"},h={class:"counter__item"},v={class:"counter__value"},w={class:"counter__value-name"},f={class:"counter__item"},p={class:"counter__value"},y={class:"counter__value-name"};function N(e,s,t,o,N,D){return(0,n.wg)(),(0,n.iD)(n.HY,null,[c,(0,n._)("div",r,[(0,n._)("div",u,[(0,n._)("span",i,(0,a.zw)(N.days),1),(0,n._)("span",d,(0,a.zw)(N.daysName),1)]),(0,n._)("div",l,[(0,n._)("span",_,(0,a.zw)(N.hours),1),(0,n._)("span",m,(0,a.zw)(N.hoursName),1)]),(0,n._)("div",h,[(0,n._)("span",v,(0,a.zw)(N.minutes),1),(0,n._)("span",w,(0,a.zw)(N.minutesName),1)]),(0,n._)("div",f,[(0,n._)("span",p,(0,a.zw)(N.seconds),1),(0,n._)("span",y,(0,a.zw)(N.secondsName),1)])])],64)}var D={name:"CountDownTimer",data(){return{days:0,hours:0,minutes:0,seconds:0,daysName:"днів",hoursName:"годин",minutesName:"хвилин",secondsName:"секунд"}},created(){let e=this.defineEndWeek();this.counter(e)},methods:{counter(e){let s="",t="",n="",a="",o="",c=()=>{s=Date.parse(e)-Date.parse(new Date),t=Math.floor(s/1e3%60),n=Math.floor(s/1e3/60%60),a=Math.floor(s/36e5%24),o=Math.floor(s/864e5),0===t&&(t=60);let c=this.declensionWord(o,a,n,t);s<=0||!s?(t=0,this.seconds=("0"+t).slice(-2),this.secondsName=c.second,clearInterval(r)):s&&(this.days=o,this.hours=a,this.minutes=("0"+n).slice(-2),this.seconds=("0"+t).slice(-2),this.daysName=c.day,this.hoursName=c.hour,this.minutesName=c.minute,this.secondsName=c.second)},r=setInterval(c,1e3)},declensionWord(e=0,s=0,t=0,n=0){let a={day:"днів",hour:"годин",minute:"хвилин",second:"секунд"};return e>=5&&e<=20?a.day="днів":e%10==1?a.day="день":e%10>=2&&e%10<=4&&(a.day="дні"),s>=5&&s<=20?a.hour="годин":s%10==1?a.hour="година":s%10>=2&&s%10<=4&&(a.hour="години"),t>=5&&t<=20?a.minute="хвилин":t%10==1?a.minute="хвилина":t%10>=2&&t%10<=4&&(a.minute="хвилини"),n>=5&&n<=20?a.second="секунд":n%10==1?a.second="секунда":n%10>=2&&n%10<=4&&(a.second="секунди"),a},defineEndWeek(){let e=new Date,s=e.getDay(),t=8-s,n=e.setDate(e.getDate()+t),a=new Date(new Date(n).setHours(0,0,0));return a}}},z=t(744);const k=(0,z.Z)(D,[["render",N],["__scopeId","data-v-f7393c66"]]);var b=k}}]);
//# sourceMappingURL=50.5c6d350c.js.map