<template>
  <div :class="prefixCls">
    <a-row :class="`${prefixCls}-top`">
      <Description @register="register1" class="mt-4" />
    </a-row>
    <div :class="`${prefixCls}-bottom`">
      <Tabs>
        <template v-for="item in achieveList" :key="item.key">
          <TabPane :tab="item.name">
            <component :is="item.component" />
          </TabPane>
        </template>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
  import { Tag, Tabs, Row, Col } from 'ant-design-vue';
  import { type Recordable } from '@vben/types';

  import { defineComponent, computed } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import Icon from '@/components/Icon/Icon.vue';
  import DeviceStatus from './components/DeviceStatus.vue';
  import DeviceShadow from './components/DeviceShadow.vue';
  import DeviceGroup from './components/DeviceGroup.vue';
  import DeviceLog from './components/DeviceLog.vue';
  import DeviceApi from './components/DeviceApi.vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import headerImg from '/@/assets/images/header.jpg';
  import { tags, teams, details, achieveList } from './data';
  import { useUserStore } from '/@/store/modules/user';

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

  export default defineComponent({
    components: {
      CollapseContainer,
      Icon,
      Tag,
      Tabs,
      TabPane: Tabs.TabPane,
      DeviceStatus,
      DeviceShadow,
      DeviceGroup,
      DeviceLog,
      DeviceApi,
      Description,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const userStore = useUserStore();
      const avatar = computed(() => userStore.getUserInfo.avatar || headerImg);
      const [register1] = useDescription({
        title: `${mockData.deviceName}@${mockData.productKey}`,
        bordered: false,
        column: 3,
        size: 'middle',
        data: mockData,
        schema: schema,
      });
      return {
        prefixCls: 'account-center',
        avatar,
        tags,
        teams,
        details,
        achieveList,
        register1,
        // goBack,
        // currentKey,
      };
    },
  });
</script>
<style lang="less" scoped>
  .account-center {
    &-col:not(:last-child) {
      padding: 0 10px;

      &:not(:last-child) {
        border-right: 1px dashed rgb(206 206 206 / 50%);
      }
    }

    &-top {
      margin: 16px 16px 12px;
      padding: 10px;
      border-radius: 3px;
      background-color: @component-background;

      &__avatar {
        text-align: center;

        img {
          margin: auto;
          border-radius: 50%;
        }

        span {
          display: block;
          font-size: 20px;
          font-weight: 500;
        }

        div {
          margin-top: 3px;
          font-size: 12px;
        }
      }

      &__detail {
        margin-top: 15px;
        padding-left: 20px;
      }

      &__team {
        &-item {
          display: inline-block;
          padding: 4px 24px;
        }

        span {
          margin-left: 3px;
        }
      }
    }

    &-bottom {
      margin: 0 16px 16px;
      padding: 10px;
      border-radius: 3px;
      background-color: @component-background;
    }
  }
</style>
