(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(43)},30:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),c=n(8),l=n(9),u=n(11),s=n(10),f=n(12),v=(n(30),n(1)),d=n(2);function m(){var e=Object(v.a)(["\n  padding: 40px;   \n"]);return m=function(){return e},e}var p=d.b.div(m()),b=n(16),C=n(19),h=n(5),g=n(3),y=n.n(g),E=n(6),x=n(4),O=n.n(x),j=n(17),k=n.n(j),F=n(41),S=a.a.createContext(),A=10,w=10,D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){n.fetchCoins(),n.fetchPrices(),n.fetchHistorical()},n.fetchCoins=Object(E.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.coinList();case 2:t=e.sent.Data,n.setState({coinList:t});case 4:case"end":return e.stop()}},e,this)})),n.fetchPrices=Object(E.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.prices();case 4:t=e.sent,n.setState({prices:t});case 6:case"end":return e.stop()}},e,this)})),n.fetchHistorical=Object(E.a)(y.a.mark(function e(){var t,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.historical();case 4:t=e.sent,r=[{name:n.state.currentFavorite,data:t.map(function(e,t){return[k()().subtract(Object(h.a)({},n.state.timeInterval,w-t)).valueOf(),e.USD]})}],n.setState({historical:r});case 7:case"end":return e.stop()}},e,this)})),n.prices=Object(E.a)(y.a.mark(function e(){var t,r,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=0;case 2:if(!(r<n.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,F.priceFull(n.state.favorites[r],"USD");case 6:a=e.sent,t.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error: ",e.t0);case 13:r++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}},e,this,[[3,10]])})),n.historical=function(){for(var e=[],t=w;t>0;t--)e.push(F.priceHistorical(n.state.currentFavorite,["USD"],k()().subtract(Object(h.a)({},n.state.timeInterval,t)).toDate()));return Promise.all(e)},n.addCoin=function(e){var t=Object(C.a)(n.state.favorites);t.length<A&&(t.push(e),n.setState({favorites:t}))},n.removeCoin=function(e){var t=Object(C.a)(n.state.favorites);n.setState({favorites:O.a.pull(t,e)})},n.isInFavorites=function(e){return O.a.includes(n.state.favorites,e)},n.confirmFavorites=function(){var e=n.state.favorites[0];n.setState({firstVisit:!1,page:"dashboard",currentFavorite:e,prices:null,historical:null},function(){n.fetchPrices(),n.fetchHistorical()}),localStorage.setItem("cryptoDash",JSON.stringify({favorites:n.state.favorites,currentFavorite:e}))},n.setCurrentFavorite=function(e){n.setState({currentFavorite:e,historical:null},n.fetchHistorical),localStorage.setItem("cryptoDash",JSON.stringify(Object(b.a)({},JSON.parse(localStorage.getItem("cryptoDash")),{currentFavorite:e})))},n.setPage=function(e){return n.setState({page:e})},n.setFilteredCoins=function(e){return n.setState({filteredCoins:e})},n.changeChartSelect=function(e){n.setState({timeInterval:e,historical:null},n.fetchHistorical)},n.state=Object(b.a)({page:"dashboard",favorites:["BTC","ETH","XMR","DOGE"],timeInterval:"months"},n.savedSettings(),{setPage:n.setPage,addCoin:n.addCoin,removeCoin:n.removeCoin,isInFavorites:n.isInFavorites,confirmFavorites:n.confirmFavorites,setCurrentFavorite:n.setCurrentFavorite,setFilteredCoins:n.setFilteredCoins,changeChartSelect:n.changeChartSelect}),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"savedSettings",value:function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:{page:"settings",firstVisit:!0}}},{key:"render",value:function(){return a.a.createElement(S.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component);function B(){var e=Object(v.a)(["\n    display: none; \n  "]);return B=function(){return e},e}function I(){var e=Object(v.a)(["\n    text-shadow: 0px 0px 60px #03ff03;\n  "]);return I=function(){return e},e}function L(){var e=Object(v.a)(["\n  cursor: pointer; \n  ","\n  ","\n"]);return L=function(){return e},e}function H(){var e=Object(v.a)(["\n  display: grid; \n  margin-bottom: 40px; \n  grid-template-columns: 180px auto 100px 100px; \n"]);return H=function(){return e},e}function P(){var e=Object(v.a)(["\n  font-size: 1.5em; \n"]);return P=function(){return e},e}var V=d.b.div(P()),W=d.b.div(H()),T=d.b.div(L(),function(e){return e.active&&Object(d.a)(I())},function(e){return e.hidden&&Object(d.a)(B())});function N(e){var t=e.name;return a.a.createElement(S.Consumer,null,function(e){var n,r=e.firstVisit,o=e.page,i=e.setPage;return a.a.createElement(T,{active:o===t,onClick:function(){return i(t)},hidden:r&&"dashboard"===t},(n=t).charAt(0).toUpperCase()+n.substr(1))})}var G=function(){return a.a.createElement(W,null,a.a.createElement(V,null," CryptoDash "),a.a.createElement("div",null),a.a.createElement(N,{active:!0,name:"dashboard"}),a.a.createElement(N,{name:"settings"}))},z=function(e){e.firstVisit;return a.a.createElement(S.Consumer,null,function(e){return e.firstVisit?a.a.createElement("div",null,"Welcome to CryptoDash, please select your favorite coins to begin."," "):null})};var U="background-color: ".concat("#061a44"),M="background-color: ".concat("#010e2c",";"),J=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),R="box-shadow: 0px 0px 4px 2px #5fff17";function K(){var e=Object(v.a)(["\n  display: grid;\n  justify-content: center;\n"]);return K=function(){return e},e}function $(){var e=Object(v.a)(["\n  margin: 20px;\n  color: ","\n  "," \n  padding: 5px;\n  cursor: pointer; \n  &:hover {\n    "," \n  }\n"]);return $=function(){return e},e}var X=d.b.div($(),"#42ff3a","font-size: 1.5em;",R),q=d.b.div(K()),Q=function(){return a.a.createElement(S.Consumer,null,function(e){var t=e.confirmFavorites;return a.a.createElement(q,null,a.a.createElement(X,{onClick:t},"Confirm Favorites"))})},Y=function(e){var t=e.name,n=e.children;return a.a.createElement(S.Consumer,null,function(e){return e.page!==t?null:a.a.createElement("div",null," ",n," ")})};function Z(){var e=Object(v.a)(["\n\tpointer-events: none;\n  opacity: 0.4;\n"]);return Z=function(){return e},e}function _(){var e=Object(v.a)(["\n\t&:hover{\n\t\tcursor: pointer; \n\t\t","\n\t}\n"]);return _=function(){return e},e}function ee(){var e=Object(v.a)(["\n  &:hover {\n    cursor: pointer; \n    ","\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(v.a)(["\n  ","\n  ","\n  padding: 10px;   \n"]);return te=function(){return e},e}var ne=d.b.div(te(),J,U),re=Object(d.b)(ne)(ee(),R),ae=Object(d.b)(re)(_(),"box-shadow: 0px 0px 2px 2px #e41111"),oe=Object(d.b)(ne)(Z());function ie(){var e=Object(v.a)(["\n  justify-self: right;\n  display: none; \n  ",":hover & {\n    display: block;\n    color: red;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(v.a)(["\n  justify-self: right;\n"]);return ce=function(){return e},e}function le(){var e=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return le=function(){return e},e}var ue=d.b.div(le()),se=d.b.div(ce()),fe=d.b.div(ie(),ae),ve=function(e){var t=e.name,n=e.symbol,r=e.topSection;return a.a.createElement(ue,null,a.a.createElement("div",null," ",t," "),r?a.a.createElement(fe,null," X "):a.a.createElement(se,null," ",n," "))};function de(){var e=Object(v.a)(["\n    height: 200px; \n    margin: auto; \n    display: block; \n  "]);return de=function(){return e},e}function me(){var e=Object(v.a)(["\n  height: 50px; \n  ","\n"]);return me=function(){return e},e}var pe=d.b.img(me(),function(e){return e.spotlight&&Object(d.a)(de())}),be=function(e){var t=e.coin,n=e.spotlight;return a.a.createElement(pe,{spotlight:n,alt:t.CoinSymbol,src:"http://cryptocompare.com/".concat(t.ImageUrl)})};var Ce=function(e){var t=e.coinKey,n=e.topSection;return a.a.createElement(S.Consumer,null,function(e){var r=e.coinList,o=e.addCoin,i=e.removeCoin,c=e.isInFavorites,l=r[t],u=re;return n?u=ae:c(t)&&(u=oe),a.a.createElement(u,{onClick:function(e,t,n,r){return e?function(){r(t)}:function(){n(t)}}(n,t,o,i)},a.a.createElement(ve,{topSection:n,name:l.CoinName,symbol:l.Symbol}),a.a.createElement(be,{coin:l}))})};function he(){var e=Object(v.a)(["\n  display: grid;   \n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); \n  grid-gap: 15px; \n  margin-top: 40px; \n"]);return he=function(){return e},e}var ge=d.b.div(he());function ye(e,t,n,r){return t?n:function(e,t){return t&&Object.keys(t)||Object.keys(e).slice(0,100)}(e,r)}var Ee=function(e){var t=e.topSection;return a.a.createElement(S.Consumer,null,function(e){var n=e.coinList,r=e.favorites,o=e.filteredCoins;return a.a.createElement(ge,null,ye(n,t,r,o).map(function(e){return a.a.createElement(Ce,{key:e,topSection:t,coinKey:e})}))})},xe=n(23),Oe=n.n(xe);function je(){var e=Object(v.a)(["\n  ","\n  ","\n  border: 1px solid; \n  height: 25px; \n  color: #1163c9;\n  place-self: center left; \n"]);return je=function(){return e},e}function ke(){var e=Object(v.a)(["\n  display: grid; \n  grid-template-columns: 200px 1fr; \n"]);return ke=function(){return e},e}var Fe=d.b.div(ke()),Se=d.b.input(je(),M,"font-size: 1.0em"),Ae=O.a.debounce(function(e,t,n){var r=Object.keys(t),a=r.map(function(e){return t[e].CoinName}),o=r.concat(a),i=Oe.a.filter(e,o,{}).map(function(e){return e.string});n(O.a.pickBy(t,function(e,t){var n=e.CoinName;return O.a.includes(i,t)||O.a.includes(i,n)}))},500);var we=function(){return a.a.createElement(S.Consumer,null,function(e){var t=e.setFilteredCoins,n=e.coinList;return a.a.createElement(Fe,null,a.a.createElement("h2",null,"Search all coins"),a.a.createElement(Se,{onKeyUp:function(e){return function(e,t,n){var r=e.target.value;r?Ae(r,n,t):t(null)}(e,t,n)}}))})},De=function(){return a.a.createElement(Y,{name:"settings"},a.a.createElement(z,null),a.a.createElement(Ee,{topSection:!0}),a.a.createElement(Q,null),a.a.createElement(we,null),a.a.createElement(Ee,null))};function Be(){var e=Object(v.a)(["\n    ","\n    pointer-events: none; \n  "]);return Be=function(){return e},e}function Ie(){var e=Object(v.a)(["\n    display: grid; \n    ","\n    grid-gap: 5px; \n    grid-template-columns: repeat(3, 1fr); \n    justify-items: right; \n  "]);return Ie=function(){return e},e}function Le(){var e=Object(v.a)(["\n  ","\n  \n  ","\n"]);return Le=function(){return e},e}function He(){var e=Object(v.a)(["\n    color: red; \n  "]);return He=function(){return e},e}function Pe(){var e=Object(v.a)(["\n  color: green; \n  ","\n"]);return Pe=function(){return e},e}function Ve(){var e=Object(v.a)(["\n  ",";\n"]);return Ve=function(){return e},e}function We(){var e=Object(v.a)(["\n  justify-self: left; \n"]);return We=function(){return e},e}function Te(){var e=Object(v.a)(["\n  justify-self: right; \n"]);return Te=function(){return e},e}var Ne=d.b.div(Te()),Ge=d.b.div(We()),ze=d.b.div(Ve(),"font-size: 2em"),Ue=d.b.div(Pe(),function(e){return e.red&&Object(d.a)(He())}),Me=function(e){return+(e+"").slice(0,7)},Je=Object(d.b)(re)(Le(),function(e){return e.compact&&Object(d.a)(Ie(),"font-size: .75em")},function(e){return e.currentFavorite&&Object(d.a)(Be(),R)});function Re(e){var t=e.data;return a.a.createElement(Ne,null,a.a.createElement(Ue,{red:t.CHANGEPCT24HOUR<0},Me(t.CHANGEPCT24HOUR),"%"))}function Ke(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(Je,{onClick:o,currentFavorite:r},a.a.createElement(ue,null,a.a.createElement("div",null," ",t," "),a.a.createElement(Re,{data:n})),a.a.createElement(ze,null,"$",Me(n.PRICE)))}function $e(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(Je,{onClick:o,compact:!0,currentFavorite:r},a.a.createElement(Ge,null," ",t," "),a.a.createElement(Re,{data:n}),a.a.createElement("div",null,"$",Me(n.PRICE)))}var Xe=function(e){var t=e.price,n=e.index,r=Object.keys(t)[0],o=t[r].USD,i=n<5?Ke:$e;return a.a.createElement(S.Consumer,null,function(e){var t=e.currentFavorite,n=e.setCurrentFavorite;return a.a.createElement(i,{sym:r,data:o,currentFavorite:t===r,setCurrentFavorite:function(){return n(r)}})})};function qe(){var e=Object(v.a)(["\n  display: grid; \n  grid-template-columns: repeat(5, 1fr); \n  grid-gap: 15px; \n  margin-top: 40px; \n"]);return qe=function(){return e},e}var Qe=d.b.div(qe()),Ye=function(){return a.a.createElement(S.Consumer,null,function(e){var t=e.prices;return a.a.createElement(Qe,null,t.map(function(e,t){return a.a.createElement(Xe,{key:"priceTile-".concat(t),index:t,price:e})}))})};function Ze(){var e=Object(v.a)(["\n  text-align: center; \n"]);return Ze=function(){return e},e}var _e=d.b.h2(Ze()),et=function(){return a.a.createElement(S.Consumer,null,function(e){var t=e.currentFavorite,n=e.coinList;return a.a.createElement(ne,null,a.a.createElement(_e,null," ",n[t].CoinName," "),a.a.createElement(be,{spotlight:!0,coin:n[t]}))})},tt=n(18),nt=n.n(tt),rt={colors:["#61d936","#552ccb","#1163c9","#04A1EE","#08C6E0","#146B9E","#F376C1","#1B2839"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineWidth:0,gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",hoverSymbolStroke:"#FFFFFF",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"rgb(35, 35, 70)",dataLabelsColor:"#444",textColor:"#C0C0C0",maskColor:"rgba(255,255,255,0.3)"};function at(){var e=Object(v.a)(["\n  ","\n  ","\n  color: #1163c9; \n  border: 1px solid;\n  float: right; \n"]);return at=function(){return e},e}var ot=d.b.select(at(),M,"font-size: 1.0em");nt.a.Highcharts.setOptions(rt);var it=function(){return a.a.createElement(S.Consumer,null,function(e){var t=e.historical,n=e.changeChartSelect;return a.a.createElement(ne,null,a.a.createElement(ot,{defaultValue:"months",onChange:function(e){return n(e.target.value)}},a.a.createElement("option",{value:"days"}," Days "),a.a.createElement("option",{value:"weeks"}," Weeks "),a.a.createElement("option",{value:"months"}," Months ")),t?a.a.createElement(nt.a,{config:function(e){return{title:{text:""},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}}(t)}):a.a.createElement("div",null," Loading Historical Data "))})};function ct(){var e=Object(v.a)(["\n  display: grid; \n  margin-top: 20px; \n  grid-gap: 15px; \n  grid-template-columns: 1fr 3fr; \n"]);return ct=function(){return e},e}var lt=d.b.div(ct()),ut=function(){return a.a.createElement(Y,{name:"dashboard"},a.a.createElement(Ye,null),a.a.createElement(lt,null,a.a.createElement(et,null),a.a.createElement(it,null)))},st=function(e){return a.a.createElement(S.Consumer,null,function(t){var n=t.coinList,r=t.prices,o=t.firstVisit;return n?o||r?a.a.createElement("div",null," ",e.children," "):a.a.createElement("div",null," Loading Prices "):a.a.createElement("div",null," Loading Coins ")})},ft=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(D,null,a.a.createElement(G,null),a.a.createElement(st,null,a.a.createElement(De,null),a.a.createElement(ut,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ft,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.5b60d7a5.chunk.js.map