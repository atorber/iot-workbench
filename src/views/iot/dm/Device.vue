<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="stop"> 添加设备 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '查看',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
                auth: 'super', // 根据权限控制是否显示: 有权限，会显示
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { type Recordable } from '@vben/types';
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';

  import { deviceListApi } from '/@/api/iot/dm/device';

  const columns: BasicColumn[] = [
    {
      title: '设备名',
      dataIndex: 'deviceName',
      width: 100,
    },
    {
      title: '备注名称',
      dataIndex: 'alias',
      width: 200,
    },
    {
      title: '在线状态',
      dataIndex: 'onlineState',
    },
    {
      title: '所属产品',
      dataIndex: 'productName',
    },
    // {
    //   title: '产品类别',
    //   dataIndex: 'productCategory',
    // },
    {
      title: '节点类型',
      dataIndex: 'deviceType',
    },
    {
      title: '启用时间',
      dataIndex: 'activeTime',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
  ];
  const formConfig = {
    labelWidth: 100,
    schemas: [
      {
        field: 'groupName',
        label: `设备ID`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'groupId',
        label: `备注名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      // {
      //   field: `floor`,
      //   label: `层级`,
      //   component: 'Select',
      //   slot: 'custom',
      //   colProps: {
      //     xl: 12,
      //     xxl: 8,
      //   },
      // },
    ],
  };
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: '设备',
        api: deviceListApi,
        columns: columns,
        showIndexColumn: false,
        useSearchForm: true,
        formConfig: formConfig,
        bordered: true,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
        actionColumn: {
          width: 250,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });
      function handleEdit(record: Recordable) {
        console.log('点击了编辑', record);
      }
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }
      return {
        registerTable,
        handleEdit,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
