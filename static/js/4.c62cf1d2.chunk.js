(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4,8],{143:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);i(0),i(69);var n=i(1);t.default=function(e){const{title:t}=e;return Object(n.jsx)("div",{className:"header",children:t})}},73:function(e,t,i){"use strict";i.r(t);var n=i(0),l=i(137),c=i(115),s=i(155),o=i(16),r=i(51),a=i.n(r),j=i(67),d=i(20),b=i(25),h=(i(143),i(1));const u={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:10,marginBottom:10},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{marginBottom:10}};t.default=function(e){const t=Object(n.useContext)(o.a),{header:i}=e,[r,p]=Object(n.useState)(null);return Object(n.useEffect)((()=>{fetch(d.a.experiences,{method:"GET"}).then((e=>e.json())).then((e=>p(e.experiences))).catch((e=>e))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.default,{title:i}),r?Object(h.jsx)("div",{className:"section-content-container",children:Object(h.jsx)(c.a,{children:Object(h.jsx)(l.Timeline,{lineColor:t.timelineLineColor,children:r.map((e=>Object(h.jsx)(a.a,{children:Object(h.jsxs)(l.TimelineItem,{dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:u.itemStyle,bodyContainerStyle:{color:t.color},children:[Object(h.jsx)("h2",{className:"item-title",children:e.title}),Object(h.jsxs)("div",{style:u.subtitleContainerStyle,children:[Object(h.jsx)("h4",{style:{...u.subtitleStyle,color:t.accentColor},children:e.subtitle}),e.workType&&Object(h.jsxs)("h5",{style:u.inlineChild,children:["\xa0\xb7"," ",e.workType]})]}),Object(h.jsx)("ul",{style:u.ulStyle,children:e.workDescription.map((e=>Object(h.jsxs)("div",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.a,{children:e,components:{p:"span"}})}),Object(h.jsx)("br",{})]},e)))})]},e.title+e.dateText)})))})})}):Object(h.jsx)(b.default,{})]})}}}]);
//# sourceMappingURL=4.c62cf1d2.chunk.js.map