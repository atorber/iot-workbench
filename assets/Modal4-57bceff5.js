import{B as l,a as c}from"./index-690a596b.js";import{B as d}from"./BasicForm-acbb7472.js";import"./componentMap-b532b679.js";import{u as f}from"./useForm-ca5268bb.js";import"./RadioButtonGroup-6e1b2bc9.js";import{d as u,k as g,q as h,a7 as n,_ as B,a8 as _,a9 as b,a0 as C,f as V,ac as F}from"./vue-854c8149.js";import{_ as M}from"./index-224dc280.js";import"./antd-8c2f8f62.js";import"./index-5010909f.js";import"./index-3b1ebaa2.js";import"./useWindowSizeFn-c06c8e02.js";import"./FormItem.vue_vue_type_script_lang-5455aec1.js";import"./uniqBy-2dfd8320.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-1c798f7e.js";import"./base64Conver-39fc0d26.js";import"./index-14619feb.js";import"./IconPicker.vue_vue_type_style_index_0_lang-1c425e19.js";import"./useCopyToClipboard-902b9ef1.js";import"./index-5721ef87.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:24}}],R=u({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=g({}),[r,{}]=f({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[a]=c(o=>{o&&s(o)});function s(o){t.value={field2:o.data,field1:o.info}}function i(o){o&&e.userData&&h(()=>s(e.userData))}return{register:a,schemas:p,registerForm:r,model:t,handleVisibleChange:i}}}),$={class:"pt-3px pr-3px"};function k(e,t,r,a,s,i){const o=n("BasicForm"),m=n("BasicModal");return B(),_(m,F(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[C("div",$,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}const Q=M(R,[["render",k]]);export{Q as default};
