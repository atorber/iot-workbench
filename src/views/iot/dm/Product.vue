<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="stop"> 新建产品 </a-button>
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
                label: '管理设备',
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

  import { productListApi } from '/@/api/iot/dm/product';

  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'productKey',
      width: 100,
    },
    {
      title: '产品名称',
      dataIndex: 'productName',
      width: 200,
    },
    // {
    //   title: '类别',
    //   dataIndex: 'productCategory',
    // },
    {
      title: '节点类型',
      dataIndex: 'deviceType',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
  ];
  // const formConfig = {
  //   labelWidth: 100,
  //   schemas: [
  //     {
  //       field: 'groupName',
  //       label: `产品名称`,
  //       component: 'Input',
  //       colProps: {
  //         xl: 12,
  //         xxl: 8,
  //       },
  //     },
  //     {
  //       field: 'groupId',
  //       label: `产品ID`,
  //       component: 'Input',
  //       colProps: {
  //         xl: 12,
  //         xxl: 8,
  //       },
  //     },
  //     {
  //       field: 'groupId',
  //       label: `描述`,
  //       component: 'Input',
  //       colProps: {
  //         xl: 12,
  //         xxl: 8,
  //       },
  //     },
  //     // {
  //     //   field: `floor`,
  //     //   label: `层级`,
  //     //   component: 'Select',
  //     //   slot: 'custom',
  //     //   colProps: {
  //     //     xl: 12,
  //     //     xxl: 8,
  //     //   },
  //     // },
  //   ],
  // };
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: '产品',
        api: productListApi,
        columns: columns,
        bordered: true,
        showIndexColumn: false,
        // useSearchForm: true,
        // formConfig: formConfig,
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
