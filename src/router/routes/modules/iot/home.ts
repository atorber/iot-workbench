import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:home-outline',
    title: '概览',
    orderNo: 0,
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '概览',
        icon: 'ion:grid-outline',
        hideMenu: true,
      },
    },
  ],
};

export default home;
