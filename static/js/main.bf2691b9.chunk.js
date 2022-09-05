(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(71),o=a.n(c),u=a(6),s=a.n(u),i=a(9),l=a(72),d=a(73),p=a(85),f=a(86),m=a(31),v=a(42),h=a(32),b=a.n(h),g="https://covid19.mathdro.id/api",C=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g,t&&(a="".concat(g,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(g,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=a(75),x=a.n(_),j=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(r.useState)({}),d=Object(m.a)(l,2),p=d[0],f=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?n.a.createElement(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,b=p[0]?n.a.createElement(v.b,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:x.a.container},u?h:b)},O=a(229),w=a(228),k=a(76),N=a.n(k),S=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(m.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(O.a,{className:N.a.formControl},n.a.createElement(w.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"United States"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},D=a(227),I=a(225),U=a(230),T=a(226),V=a(81),A=a.n(V),R=a(82),B=a.n(R),L=a(83),M=a.n(L),J=function(e){var t=e.className,a=e.cardTitle,r=e.value,c=e.lastUpdate,o=e.cardSubtitle;return n.a.createElement(I.a,{item:!0,xs:12,md:3,component:U.a,className:B()(M.a.card,t)},n.a.createElement(T.a,null,n.a.createElement(D.a,{color:"textSecondary",gutterBottom:!0},a),n.a.createElement(D.a,{variant:"h5",component:"h2"},n.a.createElement(A.a,{start:0,end:r,duration:2.75,separator:","})),n.a.createElement(D.a,{color:"textSecondary"},new Date(c).toDateString()),n.a.createElement(D.a,{variant:"body2",component:"p"},o)))},P=a(22),F=a.n(P),G=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:F.a.container},n.a.createElement(D.a,{gutterBottom:!0,variant:"h4",component:"h2"},"Global"),n.a.createElement(I.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(J,{className:F.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Number of active cases from COVID-19."}),n.a.createElement(J,{className:F.a.recovered,cardTitle:"Recovered",value:r.value,lastUpdate:o,cardSubtitle:"Number of recoveries from COVID-19."}),n.a.createElement(J,{className:F.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Number of deaths caused by COVID-19."}))):"Loading..."},H=a(44),X=a.n(H),Y=a(84),Z=a.n(Y),q=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:X.a.container},n.a.createElement("img",{className:X.a.image,src:Z.a,alt:"COVID-19"}),n.a.createElement(G,{data:t}),n.a.createElement(S,{handleCountryChange:this.handleCountryChange}),n.a.createElement(j,{data:t,country:a}))}}]),a}(n.a.Component);o.a.render(n.a.createElement(q,null),document.getElementById("root"))},22:function(e,t,a){e.exports={container:"Cards_container__1-0ZF",infected:"Cards_infected__AMvxo",recovered:"Cards_recovered__22L18",deaths:"Cards_deaths__2j-p1"}},44:function(e,t,a){e.exports={container:"App_container__10ahr",image:"App_image__1tTjd"}},75:function(e,t,a){e.exports={container:"Chart_container__2eRX9"}},76:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2mMuH"}},83:function(e,t,a){e.exports={card:"Card_card__Y7bv9"}},84:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.bf2691b9.chunk.js.map