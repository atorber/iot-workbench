import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dm: AppRouteModule = {
  path: '/dm',
  name: 'DM',
  component: LAYOUT,
  redirect: '/dm/product',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: '设备管理',
  },
  children: [
    {
      path: 'product',
      name: 'Product',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: '产品',
      },
    },
    {
      path: 'device',
      name: 'Device',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '设备',
      },
    },
    {
      path: 'group',
      name: 'Group',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '分组',
      },
    },
  ],
};

export default dm;
