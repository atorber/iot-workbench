import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dm: AppRouteModule = {
  path: '/re',
  name: 'RE',
  component: LAYOUT,
  redirect: '/dm/product',
  meta: {
    orderNo: 2,
    icon: 'ant-design:codepen-outlined',
    title: '规则引擎',
  },
  children: [
    {
      path: 'flow',
      name: 'Flow',
      component: () => import('/@/views/iot/dm/Product.vue'),
      meta: {
        // affix: true,
        title: '数据流转',
      },
    },
    {
      path: 'sink',
      name: 'Sink',
      component: () => import('/@/views/iot/dm/Product.vue'),
      meta: {
        // affix: true,
        title: '服务目的地',
      },
    },
  ],
};

export default dm;
