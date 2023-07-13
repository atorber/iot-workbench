import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const gm: AppRouteModule = {
  path: '/gt',
  name: 'GM',
  component: LAYOUT,
  redirect: '/gt/gateway',
  meta: {
    orderNo: 3,
    icon: 'ant-design:gateway-outlined',
    title: '网关管理',
  },
  children: [
    {
      path: 'gateway',
      name: 'Gateway',
      component: () => import('/@/views/iot/gt/Gateway.vue'),
      meta: {
        // affix: true,
        title: '网关列表',
      },
    },
    {
      path: 'link',
      name: 'Link',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '连接模型',
      },
    },
    {
      path: 'drive',
      name: 'Drvie',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '驱动市场',
      },
    },
  ],
};

export default gm;
