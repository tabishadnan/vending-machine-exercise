(this["webpackJsonpvending-machine-exercise"]=this["webpackJsonpvending-machine-exercise"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/pepsi-can.dfe366ed.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/lays.02cd9e32.png"},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),i=(a(29),a(4)),l=a(1),m=a(7),o=a(8),p=a(10),E=a(9),u=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"vending-machine-wrapper"},c.a.createElement("div",{className:"vending-left-side-content"},c.a.createElement("h4",null,"HELLO I AM VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?")),c.a.createElement("div",{className:"vending-right-side-content"},c.a.createElement(i.b,{to:"/soda"},"SODA"),c.a.createElement(i.b,{to:"/chips"},"CHIPS"),c.a.createElement(i.b,{to:"/sardines"},"FRESH SARDINES")))}}]),a}(n.Component),d=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"sardines-wrapper"},c.a.createElement("div",{className:"sardines-content"},c.a.createElement("h4",null,"YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!"),c.a.createElement(i.b,{to:"/"},"GO BACK")))}}]),a}(n.Component),h=a(17),v=a.n(h),O=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"soda-wrapper"},c.a.createElement("div",{className:"left-pepsi-can"},c.a.createElement("img",{className:"pepsican",src:v.a})),c.a.createElement("div",{className:"soda-content"},c.a.createElement("h4",null,"OMG SUGARRRRRR!"),c.a.createElement(i.b,{to:"/"},"GO BACK")),c.a.createElement("div",{className:"right-pepsi-can"},c.a.createElement("img",{className:"pepsican",src:v.a})))}}]),a}(n.Component),b=a(23),N=a(22),f=a.n(N),A=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={counter:0,imgArr:[]},e.bagsEaten=function(){var t=Object(b.a)(e.state.imgArr);e.setState({counter:e.state.counter+1,imgArr:t.concat(e.state.counter)})},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"chips-wrapper"},c.a.createElement("div",{className:"lays-wrapper"},this.state.imgArr.map((function(e){return c.a.createElement("div",{className:"lays-chips"},c.a.createElement("img",{src:f.a}))}))),c.a.createElement("div",{className:"chips-content"},c.a.createElement("h4",null,"BAGS EATEN: ",this.state.counter),c.a.createElement("button",{onClick:this.bagsEaten},"NOM NOM NOM"),c.a.createElement(i.b,{to:"/"},"GO BACK")),c.a.createElement("div",{className:"right-chips"}))}}]),a}(n.Component);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:u}),c.a.createElement(l.a,{exact:!0,path:"/sardines",component:d}),c.a.createElement(l.a,{exact:!0,path:"/soda",component:O}),c.a.createElement(l.a,{exact:!0,path:"/chips",component:A}))))};a(35);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.87cb5098.chunk.js.map