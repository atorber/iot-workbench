import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const gm: AppRouteModule = {
  path: '/gt',
  name: 'GM',
  component: LAYOUT,
  redirect: '/gt/gateway',
  meta: {
    orderNo: 2,
    icon: 'ion:grid-outline',
    title: '网关管理',
  },
  children: [
    {
      path: 'gateway',
      name: 'Gateway',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: '网关列表',
      },
    },
    {
      path: 'drive',
      name: 'Drvie',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '驱动',
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
  ],
};

export default gm;
