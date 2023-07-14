<template>
  <PageWrapper>
    <div class="mt-2">
      <MarkdownViewer :value="value" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { MarkDownActionType, MarkdownViewer } from '/@/components/Markdown';
  import { PageWrapper } from '/@/components/Page';
  import { type Nullable } from '@vben/types';

  export default defineComponent({
    components: { PageWrapper, MarkdownViewer },
    setup() {
      const markDownRef = ref<Nullable<MarkDownActionType>>(null);
      const valueRef = ref(`
      <table>
    <tr>
        <td>类型</td>
        <td>名称</td>
        <td>接口类</td>
        <td>设备端权限</td>
        <td>服务端权限</td>
    </tr>
    <tr>
        <td rowspan="2">生命周期状态相关</td>
        <td rowspan="1">设备上下线状态变更</td>
        <td>thing/{productKey}/{deviceName}/lifecycle/post</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>上下线状态变更通知</td>
        <td>thing/{productKey}/{deviceName}/lifecycle/post</td>
        <td>-</td>
        <td>接收</td>
    </tr>
        <tr>
        <td rowspan="2">设备属性上报</td>
        <td>属性状态单次上报</td>
        <td>thing/{productKey}/{deviceName}/property/post</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>属性状态批量上报</td>
        <td>thing/{productKey}/{deviceName}/property/batch</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td rowspan="2">设备事件上报</td>
        <td>事件单次上报</td>
        <td>thing/{productKey}/{deviceName}/event/post</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>事件批量上报</td>
        <td>thing/{productKey}/{deviceName}/event/batch</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td rowspan="3">设备服务调用</td>
        <td>更新设备可写属性</td>
        <td>thing/{productKey}/{deviceName}/property/invoke</td>
        <td>接收</td>
        <td>发送</td>
    </tr>
    <tr>
        <td>云端调用设备端服务</td>
        <td>thing/{productKey}/{deviceName}/command/invoke</td>
        <td>接收</td>
        <td>发送</td>
    </tr>
    <tr>
        <td>设备端回复响应消息</td>
        <td>thing/{productKey}/{deviceName}/response/d2c</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td rowspan="2">设备请求云端服务</td>
        <td>设备端调用云端服务</td>
        <td>thing/{productKey}/{deviceName}/service/invoke</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>服务端回复响应消息</td>
        <td>thing/{productKey}/{deviceName}/response/c2d</td>
        <td>接收</td>
        <td>发送</td>
    </tr>
    <tr>
        <td rowspan="4">网关与子设备相关</td>
        <td>子设备上下线状态变更</td>
        <td>thing/{productKey}/{deviceName}/lifecycle/post</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>请求网关与子设备拓扑信息</td>
        <td>thing/{productKey}/{deviceName}/service/invoke</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>下发网关与子设备拓扑信息</td>
        <td>thing/{productKey}/{deviceName}/response/c2d</td>
        <td>接收</td>
        <td>发送</td>
    </tr>
    <tr>
        <td>子设备消息上下行</td>
        <td>thing/{productKey}/{deviceName}/property/post</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td rowspan="6">影子服务相关</td>
        <td rowspan="1">更新设备期望属性状态</td>
        <td>thing/{productKey}/{deviceName}/property/desired</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>请求设备影子快照</td>
        <td>thing/{productKey}/{deviceName}/property/get</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>下发设备影子快照</td>
        <td>thing/{productKey}/{deviceName}/property/snapshot</td>
        <td>接收</td>
        <td>发送</td>
    </tr>
    <tr>
        <td>清空设备属性状态值</td>
        <td>thing/{productKey}/{deviceName}/property/delta</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>属性状态与期望值的差异通知</td>
        <td>thing/{productKey}/{deviceName}/response/c2d</td>
        <td>接收</td>
        <td>发送</td>
    </tr>
    <tr>
        <td>设备影子变更通知</td>
        <td>thing/{productKey}/{deviceName}/property/documents</td>
        <td>接收</td>
        <td>发送</td>
    </tr>
    <tr>
        <td rowspan="2">自定义消息透传</td>
        <td rowspan="1">消息透传上报</td>
        <td>thing/{productKey}/{deviceName}/raw/d2c</td>
        <td>发送</td>
        <td>接收</td>
    </tr>
    <tr>
        <td>消息透传下发</td>
        <td>thing/{productKey}/{deviceName}/raw/c2d</td>
        <td>-</td>
        <td>接收</td>
    </tr>
</table>
`);

      function toggleTheme() {
        const markDown = unref(markDownRef);
        if (!markDown) return;
        const vditor = markDown.getVditor();
        vditor.setTheme('dark', 'dark', 'dracula');
      }

      function handleChange(v: string) {
        valueRef.value = v;
      }

      function clearValue() {
        valueRef.value = '';
      }

      return {
        value: valueRef,
        toggleTheme,
        markDownRef,
        handleChange,
        clearValue,
      };
    },
  });
</script>
