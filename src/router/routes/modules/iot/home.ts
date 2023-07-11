import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/iot/home',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: '概览',
    orderNo: 0,
  },
  children: [
    {
      path: 'index',
      name: 'Home',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: '概览',
        icon: 'ion:grid-outline',
        hideMenu: true,
      },
    },
  ],
};

export default home;
