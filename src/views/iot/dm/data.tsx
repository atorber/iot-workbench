export interface ListItem {
  title: string;
  icon: string;
  color?: string;
  value?: string;
}

export interface TabItem {
  key: string;
  name: string;
  component: string;
}

export const tags: string[] = [
  '很有想法的',
  '专注设计',
  '川妹子',
  '大长腿',
  '海纳百川',
  '前端开发',
  'vue3',
];

export const teams: ListItem[] = [
  {
    icon: 'ri:alipay-fill',
    title: '科学搬砖组',
    color: '#ff4000',
  },
  {
    icon: 'emojione-monotone:letter-a',
    title: '中二少年团',
    color: '#7c51b8',
  },
  {
    icon: 'ri:alipay-fill',
    title: '高逼格设计',
    color: '#00adf7',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#00adf7',
  },
  {
    icon: 'fa:behance-square',
    title: '科学搬砖组',
    color: '#7c51b8',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#ff4000',
  },
];

export const details: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
    title: 'ProductKey',
    value: 'ABCDE',
  },
  {
    icon: 'grommet-icons:cluster',
    title: 'DeviceName',
    value: '12345',
  },
  {
    icon: 'bx:bx-home-circle',
    title: 'ProductKey',
    value: 'DeviceName',
  },
];

export const achieveList: TabItem[] = [
  {
    key: '1',
    name: '设备状态',
    component: 'DeviceStatus',
  },
  {
    key: '2',
    name: '设备影子',
    component: 'DeviceShadow',
  },
  {
    key: '3',
    name: '设备分组',
    component: 'DeviceGroup',
  },
  {
    key: '4',
    name: '接口列表',
    component: 'DeviceApi',
  },
  {
    key: '5',
    name: '设备日志',
    component: 'DeviceLog',
  },
];

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const articleList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 4; i++) {
    result.push({
      title: 'Vben Admin',
      description: ['Vben', '设计语言', 'Typescript'],
      content: '基于Vue Next, TypeScript, Ant Design实现的一套完整的企业级后台管理系统。',
      time: '2020-11-14 11:20',
    });
  }
  return result;
})();

export const applicationList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: '温度 temperature',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      value: '38.3',
      time: '2023-7-14 20:25:08',
      download: 'bx:bx-download',
    });
  }
  return result;
})();

export const projectList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vben Admin',
      content: '基于Vue Next, TypeScript, Ant Design实现的一套完整的企业级后台管理系统。',
    });
  }
  return result;
})();
