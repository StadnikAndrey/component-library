"use strict";(self["webpackChunkcomponent_library"]=self["webpackChunkcomponent_library"]||[]).push([[50],{6135:function(e,n,t){var a=t(4948),s=t(3070),o=t(9114);e.exports=function(e,n,t){var r=a(n);r in e?s.f(e,r,o(0,t)):e[r]=t}},7042:function(e,n,t){var a=t(2109),s=t(7854),o=t(3157),r=t(4411),c=t(111),u=t(1400),i=t(6244),d=t(5656),l=t(6135),_=t(5112),m=t(1194),v=t(206),f=m("slice"),h=_("species"),p=s.Array,w=Math.max;a({target:"Array",proto:!0,forced:!f},{slice:function(e,n){var t,a,s,_=d(this),m=i(_),f=u(e,m),y=u(void 0===n?m:n,m);if(o(_)&&(t=_.constructor,r(t)&&(t===p||o(t.prototype))?t=void 0:c(t)&&(t=t[h],null===t&&(t=void 0)),t===p||void 0===t))return v(_,f,y);for(a=new(void 0===t?p:t)(w(y-f,0)),s=0;f<y;f++,s++)f in _&&l(a,s,_[f]);return a.length=s,a}})},1050:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(6252),s=t(3577),o=function(e){return(0,a.dD)("data-v-f7393c66"),e=e(),(0,a.Cn)(),e},r=o((function(){return(0,a._)("h2",{class:"countdowntimer-title"},"Until the end of the week left:",-1)})),c={class:"counter"},u={class:"counter__item"},i={class:"counter__value"},d={class:"counter__value-name"},l={class:"counter__item"},_={class:"counter__value"},m={class:"counter__value-name"},v={class:"counter__item"},f={class:"counter__value"},h={class:"counter__value-name"},p={class:"counter__item"},w={class:"counter__value"},y={class:"counter__value-name"};function N(e,n,t,o,N,D){return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("div",c,[(0,a._)("div",u,[(0,a._)("span",i,(0,s.zw)(N.days),1),(0,a._)("span",d,(0,s.zw)(N.daysName),1)]),(0,a._)("div",l,[(0,a._)("span",_,(0,s.zw)(N.hours),1),(0,a._)("span",m,(0,s.zw)(N.hoursName),1)]),(0,a._)("div",v,[(0,a._)("span",f,(0,s.zw)(N.minutes),1),(0,a._)("span",h,(0,s.zw)(N.minutesName),1)]),(0,a._)("div",p,[(0,a._)("span",w,(0,s.zw)(N.seconds),1),(0,a._)("span",y,(0,s.zw)(N.secondsName),1)])])],64)}t(7042);var D={name:"CountDownTimer",data:function(){return{days:0,hours:0,minutes:0,seconds:0,daysName:"днів",hoursName:"годин",minutesName:"хвилин",secondsName:"секунд"}},created:function(){var e=this.defineEndWeek();this.counter(e)},methods:{counter:function(e){var n=this,t="",a="",s="",o="",r="",c=function(){t=Date.parse(e)-Date.parse(new Date),a=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60),o=Math.floor(t/36e5%24),r=Math.floor(t/864e5),0===a&&(a=60);var c=n.declensionWord(r,o,s,a);t<=0||!t?(a=0,n.seconds=("0"+a).slice(-2),n.secondsName=c.second,clearInterval(u)):t&&(n.days=r,n.hours=o,n.minutes=("0"+s).slice(-2),n.seconds=("0"+a).slice(-2),n.daysName=c.day,n.hoursName=c.hour,n.minutesName=c.minute,n.secondsName=c.second)},u=setInterval(c,1e3)},declensionWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s={day:"днів",hour:"годин",minute:"хвилин",second:"секунд"};return e>=5&&e<=20?s.day="днів":e%10==1?s.day="день":e%10>=2&&e%10<=4&&(s.day="дні"),n>=5&&n<=20?s.hour="годин":n%10==1?s.hour="година":n%10>=2&&n%10<=4&&(s.hour="години"),t>=5&&t<=20?s.minute="хвилин":t%10==1?s.minute="хвилина":t%10>=2&&t%10<=4&&(s.minute="хвилини"),a>=5&&a<=20?s.second="секунд":a%10==1?s.second="секунда":a%10>=2&&a%10<=4&&(s.second="секунди"),s},defineEndWeek:function(){var e=new Date,n=e.getDay(),t=8-n,a=e.setDate(e.getDate()+t),s=new Date(new Date(a).setHours(0,0,0));return s}}},g=t(3744);const z=(0,g.Z)(D,[["render",N],["__scopeId","data-v-f7393c66"]]);var k=z}}]);
//# sourceMappingURL=50-legacy.785057be.js.map