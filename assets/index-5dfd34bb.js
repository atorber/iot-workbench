import{d as n,U as s,e as p,u,a7 as t,_ as c,a8 as m,a9 as i,E as a,a1 as _,f as d,a0 as f}from"./vue-854c8149.js";import{P as l}from"./index-5942b9a5.js";import{_ as C}from"./antd-8c2f8f62.js";import{_ as x}from"./index-224dc280.js";import"./useContentViewHeight-c65c5fec.js";import"./useWindowSizeFn-c06c8e02.js";import"./onMountedOrActivated-1055dd3c.js";const B=n({name:"TestTab",components:{PageWrapper:l,Input:C},setup(){const{currentRoute:e}=s();return{params:p(()=>u(e).params)}}}),P=f("br",null,null,-1);function g(e,E,$,b,h,I){const r=t("Input"),o=t("PageWrapper");return c(),m(o,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:i(()=>[a(" Current Param : "+_(e.params)+" ",1),P,a(" Keep Alive "),d(r)]),_:1})}const F=x(B,[["render",g]]);export{F as default};
