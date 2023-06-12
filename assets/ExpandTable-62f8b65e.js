import{B as d}from"./BasicTable-ba48d9df.js";import{T as f}from"./componentMap-b532b679.js";import"./TableImg.vue_vue_type_style_index_0_lang-4164c570.js";import{u as B}from"./useTable-d0f766ce.js";import{P as C}from"./index-5942b9a5.js";import{getBasicColumns as F}from"./tableData-60c839b5.js";import{d as b}from"./table-04a6c85c.js";import{d as _,a7 as e,_ as u,a8 as s,a9 as n,f as g,a0 as E,a1 as T,ab as w}from"./vue-854c8149.js";import{_ as A}from"./index-224dc280.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-6e1b2bc9.js";import"./index-690a596b.js";import"./index-5010909f.js";import"./index-3b1ebaa2.js";import"./useWindowSizeFn-c06c8e02.js";import"./uuid-31b8b5a4.js";import"./download-1c798f7e.js";import"./base64Conver-39fc0d26.js";import"./index-14619feb.js";import"./IconPicker.vue_vue_type_style_index_0_lang-1c425e19.js";import"./useCopyToClipboard-902b9ef1.js";import"./index-5721ef87.js";import"./BasicForm-acbb7472.js";import"./FormItem.vue_vue_type_script_lang-5455aec1.js";import"./uniqBy-2dfd8320.js";import"./useForm-ca5268bb.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";import"./useContentViewHeight-c65c5fec.js";import"./select-5d3bf3aa.js";const h=_({components:{BasicTable:d,TableAction:f,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:F(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function i(r){}function a(r){}return{registerTable:o,handleDelete:i,handleOpen:a}}});function k(o,i,a,r,x,y){const l=e("TableAction"),m=e("BasicTable"),c=e("PageWrapper");return u(),s(c,{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:n(()=>[g(m,{onRegister:o.registerTable},{expandedRowRender:n(({record:t})=>[E("span",null,"No: "+T(t.no),1)]),bodyCell:n(({column:t,record:p})=>[t.key==="action"?(u(),s(l,{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,p)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,p)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1})}const ro=A(h,[["render",k]]);export{ro as default};
