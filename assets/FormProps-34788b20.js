import{u as k}from"./useFormDesignState-c29500c0.js";import{d as B,a7 as d,_ as m,$ as b,f as o,a9 as l,E as t,t as E,A as h,ab as v,a8 as _}from"./vue-854c8149.js";import{aH as U,aK as A,ai as G,ax as g,ah as L,bD as R,aa as w}from"./antd-8c2f8f62.js";import{_ as z}from"./index-224dc280.js";const D=B({name:"FormProps",components:{InputNumber:U,Slider:A,Checkbox:G,RadioGroup:g.Group,RadioButton:g.Button,Form:L,FormItem:R,Col:w},setup(){const{formConfig:e}=k();return e.value=e.value||{labelCol:{span:24},wrapperCol:{span:24}},{formConfig:e,lableLayoutChange:p=>{p.target.value==="Grid"&&(e.value.layout="horizontal")}}}}),I={class:"properties-content"},N={key:0};function S(e,a,p,$,V,q){const n=d("RadioButton"),f=d("RadioGroup"),r=d("FormItem"),F=d("InputNumber"),C=d("Slider"),i=d("Checkbox"),s=d("Col"),y=d("Form");return m(),b("div",I,[o(y,{class:"properties-body","label-align":"left",layout:"vertical"},{default:l(()=>[o(r,{label:"表单布局"},{default:l(()=>[o(f,{"button-style":"solid",value:e.formConfig.layout,"onUpdate:value":a[0]||(a[0]=u=>e.formConfig.layout=u)},{default:l(()=>[o(n,{value:"horizontal"},{default:l(()=>[t("水平")]),_:1}),o(n,{value:"vertical",disabled:e.formConfig.labelLayout==="Grid"},{default:l(()=>[t(" 垂直 ")]),_:1},8,["disabled"]),o(n,{value:"inline",disabled:e.formConfig.labelLayout==="Grid"},{default:l(()=>[t(" 行内 ")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),o(r,{label:"标签布局"},{default:l(()=>[o(f,{buttonStyle:"solid",value:e.formConfig.labelLayout,"onUpdate:value":a[1]||(a[1]=u=>e.formConfig.labelLayout=u),onChange:e.lableLayoutChange},{default:l(()=>[o(n,{value:"flex"},{default:l(()=>[t("固定")]),_:1}),o(n,{value:"Grid",disabled:e.formConfig.layout!=="horizontal"},{default:l(()=>[t(" 栅格 ")]),_:1},8,["disabled"])]),_:1},8,["value","onChange"])]),_:1}),E(o(r,{label:"标签宽度（px）"},{default:l(()=>[o(F,{style:{width:"100%"},value:e.formConfig.labelWidth,"onUpdate:value":a[2]||(a[2]=u=>e.formConfig.labelWidth=u),min:0,step:1},null,8,["value"])]),_:1},512),[[h,e.formConfig.labelLayout==="flex"]]),e.formConfig.labelLayout==="Grid"?(m(),b("div",N,[o(r,{label:"labelCol"},{default:l(()=>[o(C,{value:e.formConfig.labelCol.span,"onUpdate:value":a[3]||(a[3]=u=>e.formConfig.labelCol.span=u),max:24},null,8,["value"])]),_:1}),o(r,{label:"wrapperCol"},{default:l(()=>[o(C,{value:e.formConfig.wrapperCol.span,"onUpdate:value":a[4]||(a[4]=u=>e.formConfig.wrapperCol.span=u),max:24},null,8,["value"])]),_:1}),o(r,{label:"标签对齐"},{default:l(()=>[o(f,{"button-style":"solid",value:e.formConfig.labelAlign,"onUpdate:value":a[5]||(a[5]=u=>e.formConfig.labelAlign=u)},{default:l(()=>[o(n,{value:"left"},{default:l(()=>[t("靠左")]),_:1}),o(n,{value:"right"},{default:l(()=>[t("靠右")]),_:1})]),_:1},8,["value"])]),_:1}),o(r,{label:"控件大小"},{default:l(()=>[o(f,{"button-style":"solid",value:e.formConfig.size,"onUpdate:value":a[6]||(a[6]=u=>e.formConfig.size=u)},{default:l(()=>[o(n,{value:"default"},{default:l(()=>[t("默认")]),_:1}),o(n,{value:"small"},{default:l(()=>[t("小")]),_:1}),o(n,{value:"large"},{default:l(()=>[t("大")]),_:1})]),_:1},8,["value"])]),_:1})])):v("",!0),o(r,{label:"表单属性"},{default:l(()=>[o(s,null,{default:l(()=>[e.formConfig.layout=="horizontal"?(m(),_(i,{key:0,checked:e.formConfig.colon,"onUpdate:checked":a[7]||(a[7]=u=>e.formConfig.colon=u)},{default:l(()=>[t("label后面显示冒号")]),_:1},8,["checked"])):v("",!0)]),_:1}),o(s,null,{default:l(()=>[o(i,{checked:e.formConfig.disabled,"onUpdate:checked":a[8]||(a[8]=u=>e.formConfig.disabled=u)},{default:l(()=>[t("禁用")]),_:1},8,["checked"])]),_:1}),o(s,null,{default:l(()=>[o(i,{checked:e.formConfig.hideRequiredMark,"onUpdate:checked":a[9]||(a[9]=u=>e.formConfig.hideRequiredMark=u)},{default:l(()=>[t("隐藏必选标记")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1})])}const K=z(D,[["render",S]]);export{K as default};
