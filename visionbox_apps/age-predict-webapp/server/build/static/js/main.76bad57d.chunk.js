(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/loading.4792c04c.svg"},20:function(e,t,a){e.exports=a.p+"static/media/logo.a0f0f864.png"},23:function(e,t,a){e.exports=a(49)},4:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(13),s=a.n(o),c=(a(4),a(14)),r=a(15),l=a(22),u=a(16),d=a(2),h=a(21),m=a(17),g=a.n(m),f=a(18),p=a.n(f),w=function(e){return!1===e.age?i.a.createElement("div",null,i.a.createElement("h3",null,"No face found")):i.a.createElement("div",null,i.a.createElement("h3",null,"Age ",e.age.toFixed(0)))},v=a(19),E=a.n(v),b=function(){return i.a.createElement("div",{className:"spinner"},i.a.createElement("img",{src:E.a,alt:"Loading"}))},j=a(20),k=a.n(j),O=function(){return i.a.createElement("div",{className:"sidebar"},i.a.createElement("img",{src:k.a,alt:"logo"}),i.a.createElement("h3",null,"AgeBox"),i.a.createElement("a",{href:"https://support.trueface.ai"},"Support"))},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setRef=function(e){a.webcam=e},a.submitPhoto=function(e){a.setState({loading:!0});var t={image:e};p.a.post("/predict",t).then(function(e){console.log(e),e.data.success?a.setState({result:!0,age:e.data.data[0].estimated_age,loading:!1}):a.setState({result:!0,age:!1,loading:!1})}).catch(function(e){console.log(e)})},a.capture=function(){var e=a.webcam.getScreenshot();a.submitPhoto(e.slice(23)),setTimeout(function(){document.querySelector(".results").classList.add("fade")},5e3)},a.update=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a.state={width:1080,height:720,age:!1,loading:"",result:!1,test:""},a.setRef=a.setRef.bind(Object(d.a)(a)),a.capture=a.capture.bind(Object(d.a)(a)),window.addEventListener("resize",a.update),a.submitPhoto=a.submitPhoto.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.update)}},{key:"render",value:function(){var e={width:this.state.width,height:this.state.height,facingMode:"user"};return i.a.createElement("div",{className:"main"},i.a.createElement(O,null),i.a.createElement("div",{className:"webcam"},i.a.createElement(g.a,{audio:!1,height:this.state.height,ref:this.setRef,screenshotFormat:"image/jpeg",width:this.state.width,videoConstraints:e}),i.a.createElement("button",{onClick:this.capture}),i.a.createElement("div",null,this.state.loading&&i.a.createElement(b,null)),i.a.createElement("div",{className:"results"},this.state.result&&i.a.createElement(w,{age:this.state.age}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.76bad57d.chunk.js.map