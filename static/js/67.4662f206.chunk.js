"use strict";(self.webpackChunkframer_motion_example=self.webpackChunkframer_motion_example||[]).push([[67],{67:function(n,i,e){e.r(i),e.d(i,{default:function(){return u}});e(798);var a=e(330),t=e(791),r=e(360),s=e(184);var o=e(413),c=[{name:"\u5de6\u98db\u5165",initial:{x:"-100%"},animate:{x:"0%"}},{name:"\u53f3\u98db\u5165",initial:{x:"100%"},animate:{x:"0%"}},{name:"\u4e0a\u98db\u5165",initial:{y:"100%"},animate:{y:"0%"}},{name:"\u4e0b\u98db\u5165",initial:{y:"-100%"},animate:{y:"0%"}}];var l=e(885);var m=[{name:"CSS v.s motion",component:[function(){return(0,s.jsxs)("div",{className:"section v",children:[(0,s.jsx)("div",{className:"box anim",children:"only className"}),(0,s.jsx)("div",{className:"box",style:{animation:"move 1s ease normal forwards"},children:"inline style"}),(0,s.jsx)("div",{className:"box",style:{animationName:"move",animationDuration:"1s",animationTimingFunction:"normal",animationFillMode:"forwards"},children:"\u5206\u958b animation"})]})},function(){return(0,s.jsx)(r.E.div,{className:"box framer",animate:{x:100},children:"framer motion"})}]},{name:"keyframes square",component:function(){return(0,s.jsx)(r.E.div,{className:"box",animate:{x:[0,100,100,0,0],y:[0,0,100,100,0]},children:"SquareAnimation"})},containerHeight:"300px"},{name:"PPT \u967d\u6625\u52d5\u756b",component:function(){return(0,s.jsx)("div",{className:"section",children:c.map((function(n){var i=n.name,e=n.initial,a=n.animate;return(0,s.jsxs)("div",{style:{marginLeft:"50px"},children:[(0,s.jsx)("h3",{children:i}),(0,s.jsx)(r.E.div,{className:"box",initial:(0,o.Z)((0,o.Z)({},e),{},{opacity:0}),animate:(0,o.Z)((0,o.Z)({},a),{},{opacity:1})})]},i)}))})},containerHeight:"250px"},{name:"initial false",component:function(){var n=(0,t.useState)(!1),i=(0,l.Z)(n,2),e=i[0],a=i[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"checkbox",onChange:function(){return a((function(n){return!n}))}}),(0,s.jsxs)(r.E.div,{className:"box",initial:null!==e&&void 0!==e?e:{x:0},animate:{x:100},children:["Initial",e?"True":"False"]},e)]})}},{name:"transition types",component:function(){return(0,s.jsxs)("div",{className:"section",children:[(0,s.jsx)(r.E.div,{className:"box",animate:{y:100},transition:{ease:"circInOut",duration:2,delay:.5,type:"spring",damping:5},children:"spring"}),(0,s.jsx)(r.E.div,{className:"box",animate:{y:100},transition:{ease:"backOut",duration:2,delay:.5,type:"tween"},children:"tween"}),(0,s.jsx)(r.E.div,{className:"box",animate:{y:100},transition:{ease:"linear",duration:2,delay:.5,type:"inertia",velocity:200,power:.5},children:"inertia"})]})},containerHeight:"300px"}];function u(){return(0,s.jsx)("div",{className:"Day",children:m.map((function(n){var i,e=n.name,t=n.component;if(Array.isArray(t))return(0,s.jsxs)("div",{className:"container",style:{height:null!==n&&void 0!==n?n:"auto"},children:[(0,s.jsx)("h3",{children:e}),(0,s.jsx)(a.Z,{children:t.map((function(n,i){var e=n;return(0,s.jsx)(e,{},i)}))})]});var r=t;return(0,s.jsxs)("div",{className:"container",style:{height:null!==(i=null===n||void 0===n?void 0:n.containerHeight)&&void 0!==i?i:"auto"},children:[(0,s.jsx)("h3",{children:e}),(0,s.jsx)(a.Z,{children:(0,s.jsx)(r,{})})]})}))})}},330:function(n,i,e){e.d(i,{Z:function(){return s}});var a=e(885),t=e(791),r=e(184);function s(n){var i=n.children,e=(0,t.useState)(!1),s=(0,a.Z)(e,2),o=s[0],c=s[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:function(){return c((function(n){return!n}))},children:"\u521d\u59cb\u5316"}),i]},o)}}}]);
//# sourceMappingURL=67.4662f206.chunk.js.map