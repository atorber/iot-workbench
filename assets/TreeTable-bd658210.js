import{B as n}from"./BasicTable-ba48d9df.js";import"./componentMap-b532b679.js";import"./TableImg.vue_vue_type_style_index_0_lang-4164c570.js";import{u as c}from"./useTable-d0f766ce.js";import{getBasicColumns as u,getTreeTableData as d}from"./tableData-60c839b5.js";import{d as _,a7 as s,_ as f,$ as b,f as o,a9 as t,E as m}from"./vue-854c8149.js";import{_ as T}from"./index-224dc280.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-6e1b2bc9.js";import"./index-690a596b.js";import"./index-5010909f.js";import"./index-3b1ebaa2.js";import"./useWindowSizeFn-c06c8e02.js";import"./uuid-31b8b5a4.js";import"./download-1c798f7e.js";import"./base64Conver-39fc0d26.js";import"./index-14619feb.js";import"./IconPicker.vue_vue_type_style_index_0_lang-1c425e19.js";import"./useCopyToClipboard-902b9ef1.js";import"./index-5721ef87.js";import"./BasicForm-acbb7472.js";import"./FormItem.vue_vue_type_script_lang-5455aec1.js";import"./uniqBy-2dfd8320.js";import"./useForm-ca5268bb.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";import"./select-5d3bf3aa.js";const C=_({components:{BasicTable:n},setup(){const[e,{expandAll:r,collapseAll:i}]=c({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:u(),dataSource:d(),rowKey:"id"});return{register:e,expandAll:r,collapseAll:i}}}),g={class:"p-4"};function k(e,r,i,p,B,x){const a=s("a-button"),l=s("BasicTable");return f(),b("div",g,[o(l,{onRegister:e.register},{toolbar:t(()=>[o(a,{type:"primary",onClick:e.expandAll},{default:t(()=>[m("展开全部")]),_:1},8,["onClick"]),o(a,{type:"primary",onClick:e.collapseAll},{default:t(()=>[m("折叠全部")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}const X=T(C,[["render",k]]);export{X as default};
