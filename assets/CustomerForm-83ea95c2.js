import{B as C}from"./BasicForm-acbb7472.js";import"./componentMap-b532b679.js";import{u as g}from"./useForm-ca5268bb.js";import"./RadioButtonGroup-6e1b2bc9.js";import{C as h}from"./index-5010909f.js";import{b as B,_ as b}from"./index-224dc280.js";import{P as v}from"./index-5942b9a5.js";import{d as E,n as P,a7 as r,_ as A,a8 as F,a9 as n,f as s}from"./vue-854c8149.js";import{_ as a}from"./antd-8c2f8f62.js";import"./FormItem.vue_vue_type_script_lang-5455aec1.js";import"./uniqBy-2dfd8320.js";import"./index-690a596b.js";import"./useWindowSizeFn-c06c8e02.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-1c798f7e.js";import"./base64Conver-39fc0d26.js";import"./index-14619feb.js";import"./IconPicker.vue_vue_type_style_index_0_lang-1c425e19.js";import"./useCopyToClipboard-902b9ef1.js";import"./index-5721ef87.js";import"./index-3b1ebaa2.js";import"./useContentViewHeight-c65c5fec.js";import"./onMountedOrActivated-1055dd3c.js";const m=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>P(a,{placeholder:"请输入",value:e[o],onChange:t=>{e[o]=t.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:h,PageWrapper:v,[a.name]:a},setup(){const{createMessage:e}=B(),[o,{setProps:t}]=g({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:p=>{e.success("click search,values:"+JSON.stringify(p))},setProps:t}}});function x(e,o,t,p,I,W){const l=r("a-input"),c=r("BasicForm"),f=r("CollapseContainer"),d=r("PageWrapper");return A(),F(d,{title:"自定义组件示例"},{default:n(()=>[s(f,{title:"自定义表单"},{default:n(()=>[s(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:n(({model:i,field:u})=>[s(l,{value:i[u],"onUpdate:value":_=>i[u]=_,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}const ee=b(S,[["render",x]]);export{ee as default};
