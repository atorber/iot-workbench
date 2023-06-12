var R=Object.defineProperty,V=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var P=(t,e,r)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))z.call(e,r)&&P(t,r,e[r]);if(v)for(var r of v(e))H.call(e,r)&&P(t,r,e[r]);return t},C=(t,e)=>V(t,q(e));import{f as L,s as F,v as G,l as O,w as J}from"./index-224dc280.js";import{C as K}from"./index-5010909f.js";import{aq as w,ar as Q}from"./antd-8c2f8f62.js";import{d as T,k as U,e as d,u as s,f as u,ac as X,i as Y,H as Z}from"./vue-854c8149.js";function tt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Y(t)}const et={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:t=>["small","default","middle",void 0].includes(t),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},nt=T({name:"Description",props:et,emits:["register"],setup(t,{slots:e,emit:r}){const m=U(null),{prefixCls:S}=L("description"),_=F(),g=d(()=>o(o({},t),s(m))),f=d(()=>C(o({},s(g)),{title:void 0})),E=d(()=>!!s(g).title),I=d(()=>o({canExpand:!1},s(f).collapseOptions)),M=d(()=>o(o({},s(_)),s(f)));function N(n){m.value=o(o({},s(m)),n)}function W({label:n,labelMinWidth:c,labelStyle:a}){if(!a&&!c)return n;const l=C(o({},a),{minWidth:`${c}px `});return u("div",{style:l},[n])}function $(){const{schema:n,data:c}=s(f);return s(n).map(a=>{const{render:l,field:h,span:A,show:x,contentMinWidth:b}=a;if(x&&O(x)&&!x(c))return null;const D=()=>{var j;const i=(j=s(f))==null?void 0:j.data;if(!i)return null;const p=Q(i,h);return p&&!Z(i).hasOwnProperty(h)?O(l)?l("",i):"":O(l)?l(p,i):p!=null?p:""},B=b;return u(w.Item,{label:W(a),key:h,span:A},{default:()=>{if(!b)return D();const i={minWidth:`${B}px`};return u("div",{style:i},[D()])}})}).filter(a=>!!a)}const y=()=>{let n;return u(w,X({class:`${S}`},s(M)),tt(n=$())?n:{default:()=>[n]})},k=()=>{const n=t.useCollapse?y():u("div",null,[y()]);if(!t.useCollapse)return n;const{canExpand:c,helpMessage:a}=s(I),{title:l}=s(g);return u(K,{title:l,canExpan:c,helpMessage:a},{default:()=>n,action:()=>G(e,"action")})};return r("register",{setDescProps:N}),()=>s(E)?k():y()}}),ct=J(nt);export{ct as D};
