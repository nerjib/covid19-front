(this["webpackJsonpcovid19-front"]=this["webpackJsonpcovid19-front"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);a(20);var l=a(0),n=a.n(l),s=a(11),r=a.n(s),o=(a(25),a(12)),c=a(13),i=a(14),m=a(17),u=a(18),p=function(e){var t,a,l,n,s,r,o,c,i,m,u,p,d,h;switch(e.periodType){case"days":a=(t=10*e.reportedCases)*Math.pow(2,Math.trunc(e.timeToElapse/3)),s=Math.trunc(.15*a),r=Math.ceil(.35*e.totalHospitalBeds)-s,i=Math.trunc(.05*a),m=Math.trunc(.02*a),d=a*e.region.avgDailyIncomeInUSD*e.region.avgDailyIncomePopulation/e.timeToElapse,n=(l=50*e.reportedCases)*Math.pow(2,Math.trunc(e.timeToElapse/3)),o=Math.trunc(.15*n),c=Math.ceil(.35*e.totalHospitalBeds)-o,u=Math.trunc(.05*n),p=Math.trunc(.02*n),h=n*e.region.avgDailyIncomeInUSD*e.region.avgDailyIncomePopulation/e.timeToElapse;break;case"weeks":a=(t=10*e.reportedCases)*Math.pow(2,Math.trunc(7*e.timeToElapse/3)),s=Math.trunc(.15*a),r=Math.ceil(.35*e.totalHospitalBeds)-s,i=Math.trunc(.05*a),m=Math.trunc(.02*a),d=a*e.region.avgDailyIncomeInUSD*e.region.avgDailyIncomePopulation/(7*e.timeToElapse),n=(l=50*e.reportedCases)*Math.pow(2,Math.trunc(7*e.timeToElapse/3)),o=Math.trunc(.15*n),c=Math.ceil(.35*e.totalHospitalBeds)-o,u=Math.trunc(.05*n),p=Math.trunc(.02*n),h=n*e.region.avgDailyIncomeInUSD*e.region.avgDailyIncomePopulation/(7*e.timeToElapse);break;case"months":a=(t=10*e.reportedCases)*Math.pow(2,Math.trunc(30*e.timeToElapse/3)),s=Math.trunc(.15*a),r=Math.ceil(.35*e.totalHospitalBeds)-s,i=Math.trunc(.05*a),m=Math.trunc(.02*a),d=a*e.region.avgDailyIncomeInUSD*e.region.avgDailyIncomePopulation/(30*e.timeToElapse),l=50*e.reportedCases,n=Math.trunc(l*Math.pow(2,30*e.timeToElapse/3)),o=Math.trunc(.15*n),c=Math.ceil(.35*e.totalHospitalBeds)-o,u=Math.trunc(.05*n),p=Math.trunc(.02*n),h=n*e.region.avgDailyIncomeInUSD*e.region.avgDailyIncomePopulation/(30*e.timeToElapse);break;default:t=0}return{data:e,impact:{currentlyInfected:t,infectionsByRequestedTime:a,severeCasesByRequestedTime:s,hospitalBedsByRequestedTime:r,casesForICUByRequestedTime:i,casesForVentilatorsByRequestedTime:m,dollarsInFlight:Math.trunc(d)},severeImpact:{currentlyInfected:l,infectionsByRequestedTime:n,severeCasesByRequestedTime:o,hospitalBedsByRequestedTime:c,casesForICUByRequestedTime:u,casesForVentilatorsByRequestedTime:p,dollarsInFlight:Math.trunc(h)}}},d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).estimate=function(){var e={region:{name:"Africa",avgAge:19.7,avgDailyIncomeInUSD:5,avgDailyIncomePopulation:.71},periodType:l.state.periodType,timeToElapse:l.state.timeToElapse,reportedCases:l.state.reportedCases,population:l.state.population,totalHospitalBeds:l.state.totalHospitalBeds},t=p(e),a=t.impact,n=t.severeImpact;l.setState({impactResult:a,severeImpactResult:n})},l.handleChange=function(e){var t=e.target,a=t.value,n=t.name;e.preventDefault(),l.setState(Object(o.a)({},n,a))},l.state={population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"",impactResult:{},severeImpactResult:""},l}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"col-md-4",style:{backgroundColor:"#0ab3c4"}},n.a.createElement("table",{className:"table table-borderless"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},"Data Collection"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{className:"text-left",for:"population"}," Population ")),n.a.createElement("td",null,n.a.createElement("input",{value:this.state.population,"data-population":"population",onChange:this.handleChange,name:"population",type:"text",placeholder:"Population"}))),n.a.createElement("tr",null,n.a.createElement("td",{style:{alignItems:"left"}},n.a.createElement("label",{className:"text-left",for:"timeToElapse"},"   Time to Elapse ")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",value:this.state.timeToElapse,"data-time-to-elapse":"timeToElapse",onChange:this.handleChange,name:"timeToElapse",placeholder:"Time to Elapse"}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{className:"text-left",for:"reportedCases"},"   Reported Case ")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",value:this.state.reportedCases,"data-reported-cases":"reportedCases",onChange:this.handleChange,name:"reportedCases",placeholder:"Reported Cases"}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{className:"text-left",for:"totalHospitalBeds"},"   Total Hospital ")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",value:this.state.totalHospitalBeds,"data-total-hospital-beds":"totalHospitalBeds",onChange:this.handleChange,name:"totalHospitalBeds",placeholder:"Total Hospital Beds"}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{className:"text-left",for:"periodType"},"  Period Type ")),n.a.createElement("td",null,n.a.createElement("select",{"data-period-type":"periodType",name:"periodType",onChange:this.handleChange},n.a.createElement("option",null,"Period Type"),n.a.createElement("option",{value:"days"},"Days"),n.a.createElement("option",{value:"weeks"},"Weeks"),n.a.createElement("option",{value:"months"},"Months")))),n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",{colSpan:"2",style:{alignItems:"center",marginLeft:50}},n.a.createElement("button",{"data-goestimate":"estimate",onClick:this.estimate},"Estimate")))))),n.a.createElement("div",null,n.a.createElement("table",{className:"table",style:{alignItems:"left"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Estimation Output"),n.a.createElement("th",null,"Impact"),n.a.createElement("th",null,"Severe Impact"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Currently Infected"),n.a.createElement("td",null,this.state.impactResult.currentlyInfected),n.a.createElement("td",null,this.state.severeImpactResult.currentlyInfected)),n.a.createElement("tr",null,n.a.createElement("td",null,"Infections At"),n.a.createElement("td",null,this.state.impactResult.infectionsByRequestedTime),n.a.createElement("td",null,this.state.severeImpactResult.infectionsByRequestedTime)),n.a.createElement("tr",null,n.a.createElement("td",null,"Severe Cases"),n.a.createElement("td",null,this.state.impactResult.severeCasesByRequestedTime),n.a.createElement("td",null,this.state.severeImpactResult.severeCasesByRequestedTime)),n.a.createElement("tr",null,n.a.createElement("td",null,"Hospital Beds"),n.a.createElement("td",null,this.state.impactResult.hospitalBedsByRequestedTime),n.a.createElement("td",null,this.state.severeImpactResult.hospitalBedsByRequestedTime)),n.a.createElement("tr",null,n.a.createElement("td",null,"Cases For ICU"),n.a.createElement("td",null,this.state.impactResult.casesForICUByRequestedTime),n.a.createElement("td",null,this.state.severeImpactResult.casesForICUByRequestedTime)),n.a.createElement("tr",null,n.a.createElement("td",null,"Cases For Ventilators"),n.a.createElement("td",null,this.state.impactResult.casesForVentilatorsByRequestedTime),n.a.createElement("td",null,this.state.severeImpactResult.casesForVentilatorsByRequestedTime)),n.a.createElement("tr",null,n.a.createElement("td",null,"Dollars In Flight"),n.a.createElement("td",null,this.state.impactResult.dollarsInFlight),n.a.createElement("td",null,this.state.severeImpactResult.dollarsInFlight))))))}}]),a}(n.a.Component),h=(a(26),a(3));var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/",exact:!0,component:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(6);r.a.render(n.a.createElement(y.a,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6a6c2d07.chunk.js.map