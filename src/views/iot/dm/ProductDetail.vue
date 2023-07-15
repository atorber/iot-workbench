<template>
  <PageWrapper :title="`ABCE`" contentBackground @back="goBack">
    <template #headerContent>
      <Description @register="register1" class="mt-4" />
    </template>
    <!-- <template #extra>
      <a-button type="primary" danger> 禁用账号 </a-button>
      <a-button type="primary"> 修改密码 </a-button>
    </template> -->
    <template #footer>
      <a-tabs default-active-key="DeviceStatus" v-model:activeKey="currentKey">
        <a-tab-pane key="DeviceStatus" tab="功能定义" />
        <a-tab-pane key="DeviceShadow" tab="物模型" />
        <a-tab-pane key="DeviceGroup" tab="接口类" />
      </a-tabs>
    </template>
    <div class="pt-4 m-4 desc-wrap">
      <template v-if="currentKey == 'DeviceStatus'">
        <component :is="DeviceStatus" />
      </template>
      <template v-if="currentKey == 'DeviceShadow'">
        <component :is="DeviceShadow" />
      </template>
      <template v-if="currentKey == 'DeviceGroup'">
        <component :is="DeviceGroup" />
      </template>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { type Recordable } from '@vben/types';

  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { Tabs } from 'ant-design-vue';
  import DeviceStatus from './components/DeviceStatus.vue';
  import DeviceShadow from './components/DeviceShadow.vue';
  import DeviceGroup from './components/DeviceGroup.vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';

  const mockData: Recordable = {
    deviceType: 'DIRECT',
    enableState: true,
    activeState: true,
    activeTime: '2023-06-27 16:44:10',
    updateTime: '2023-06-27 16:44:10',
    productKey: 'TSDB',
    deviceName: 'D1',
    productName: 'TSDB测试专用',
    banState: false,
    productCategory: '用户自定义',
    accessType: ['WIFI'],
    deviceSecret: '0idcyj09fp59ay3m',
    instanceId: 'xpu2x7153nwk5qm8',
    createTime: '2023-06-27 16:25:32',
    alias: '--',
    lastOnlineTime: '1970-01-01 00:00:00',
    authType: 'SIGNATURE',
    onlineState: '离线',
  };
  const schema: DescItem[] = [
    {
      field: 'productKey',
      label: 'ProductKey',
    },
    {
      field: 'deviceName',
      label: 'DeviceName',
      // render: (curVal, data) => {
      //   return `${data.username}-${curVal}`;
      // },
    },
    {
      field: 'deviceSecret',
      label: 'DeviceSecret',
    },
    {
      field: 'alias',
      label: '备注名称',
    },
    {
      field: 'onlineState',
      label: '在线状态',
    },
    {
      field: 'productName',
      label: '所属产品',
    },
    {
      field: 'deviceType',
      label: '节点类型',
    },
    {
      field: 'activeTime',
      label: '激活时间',
    },
    {
      field: 'createTime',
      label: '创建时间',
    },
  ];
  defineOptions({ name: 'AccountDetail' });

  const ATabs = Tabs;
  const ATabPane = Tabs.TabPane;

  const go = useGo();
  const currentKey = ref('DeviceStatus');
  const { setTitle } = useTabs();
  const [register1] = useDescription({
    title: '',
    bordered: false,
    column: 3,
    size: 'middle',
    data: mockData,
    schema: schema,
  });
  // TODO
  // 本页代码仅作演示，实际应当通过userId从接口获得用户的相关资料

  // 设置Tab的标题（不会影响页面标题）
  setTitle('产品详情');

  // 页面左侧点击返回链接时的操作
  function goBack() {
    // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
    go('/dm/product');
  }
</script>

<style></style>
