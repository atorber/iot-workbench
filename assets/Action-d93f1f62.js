import{S as f}from"./index-5010909f.js";import{P as E}from"./index-5942b9a5.js";import{d as A,k as C,u as v,a7 as c,_ as m,a8 as F,a9 as s,a0 as a,f as l,E as u,$ as k,F as D,aa as $,a1 as B}from"./vue-854c8149.js";import{_ as g}from"./index-224dc280.js";import"./index-3b1ebaa2.js";import"./antd-8c2f8f62.js";import"./useContentViewHeight-c65c5fec.js";import"./useWindowSizeFn-c06c8e02.js";import"./onMountedOrActivated-1055dd3c.js";const b=A({components:{ScrollContainer:f,PageWrapper:E},setup(){const t=C(null),o=()=>{const r=v(t);if(!r)throw new Error("scroll is Null");return r};function p(r){o().scrollTo(r)}function i(){o().scrollBottom()}return{scrollTo:p,scrollRef:t,scrollBottom:i}}});const y={class:"my-4"},S={class:"scroll-wrap"},T={class:"p-3"};function w(t,o,p,i,r,x){const n=c("a-button"),_=c("ScrollContainer"),d=c("PageWrapper");return m(),F(d,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:s(()=>[a("div",y,[l(n,{onClick:o[0]||(o[0]=e=>t.scrollTo(100)),class:"mr-2"},{default:s(()=>[u(" 滚动到100px位置 ")]),_:1}),l(n,{onClick:o[1]||(o[1]=e=>t.scrollTo(800)),class:"mr-2"},{default:s(()=>[u(" 滚动到800px位置 ")]),_:1}),l(n,{onClick:o[2]||(o[2]=e=>t.scrollTo(0)),class:"mr-2"},{default:s(()=>[u(" 滚动到顶部 ")]),_:1}),l(n,{onClick:o[3]||(o[3]=e=>t.scrollBottom()),class:"mr-2"},{default:s(()=>[u(" 滚动到底部 ")]),_:1})]),a("div",S,[l(_,{class:"mt-4",ref:"scrollRef"},{default:s(()=>[a("ul",T,[(m(),k(D,null,$(100,e=>a("li",{key:e,class:"p-2",style:{border:"1px solid #eee"}},B(e),1)),64))])]),_:1},512)])]),_:1})}const z=g(b,[["render",w],["__scopeId","data-v-672060ba"]]);export{z as default};
