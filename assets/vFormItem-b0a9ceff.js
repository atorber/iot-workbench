var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(e,r,o)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&a(e,o,r[o]);if(s)for(var o of s(r))_.call(r,o)&&a(e,o,r[o]);return e};import{_ as h}from"./FormItem.vue_vue_type_script_lang-5455aec1.js";import{d as l,e as p,u as n,a7 as $,_ as g,a8 as P,ae as C,aa as F,a9 as I,R as b,ad as j,ag as y}from"./vue-854c8149.js";import{_ as O}from"./index-224dc280.js";import"./componentMap-b532b679.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-6e1b2bc9.js";import"./index-690a596b.js";import"./index-5010909f.js";import"./index-3b1ebaa2.js";import"./useWindowSizeFn-c06c8e02.js";import"./uuid-31b8b5a4.js";import"./download-1c798f7e.js";import"./base64Conver-39fc0d26.js";import"./index-14619feb.js";import"./IconPicker.vue_vue_type_style_index_0_lang-1c425e19.js";import"./useCopyToClipboard-902b9ef1.js";import"./index-5721ef87.js";const k=l({name:"VFormItem",components:{FormItem:h},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(e){const r=p(()=>t({},n(e.schema))),o=p(()=>t({},n(e.formConfig)));return{schemaNew:r,getProps:o}}});function v(e,r,o,c,w,q){const i=$("FormItem");return g(),P(i,{schema:e.schemaNew,formProps:e.getProps},C({_:2},[F(Object.keys(e.$slots),m=>({name:m,fn:I(f=>[b(e.$slots,m,j(y(f||{})))])}))]),1032,["schema","formProps"])}const W=O(k,[["render",v]]);export{W as default};
