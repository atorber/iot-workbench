import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess } from '../_util';

function getRandomPics(count = 10): string[] {
  const arr: string[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()));
  }
  return arr;
}

const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      beginTime: '@datetime',
      endTime: '@datetime',
      address: '@city()',
      name: '@cname()',
      type: '@cname()',
      name2: '@cname()',
      name3: '@cname()',
      name4: '@cname()',
      name5: '@cname()',
      name6: '@cname()',
      name7: '@cname()',
      name8: '@cname()',
      radio1: `选项${index + 1}`,
      radio2: `选项${index + 1}`,
      radio3: `选项${index + 1}`,
      avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      'no|100000-10000000': 100000,
      'status|1': ['normal', 'enable', 'disable'],
      'deviceType|1': ['DIRECT', 'GATEWAY'],
      enableState: true,
      activeState: false,
      'activeTime|1': ['1970-01-01 00:00:00', '2023-07-13 14:57:47'],
      updateTime: '2023-07-12 14:57:47',
      productKey: 'pc',
      deviceName: 'rxcf94r3yne2kpfg',
      productName: '电脑测试',
      banState: false,
      productCategory: '用户自定义',
      accessType: ['WIFI', 'ETHERNET'],
      deviceSecret: '5f6thq0b7nbmcdt6',
      instanceId: 'zasr9fjmk53aur26',
      createTime: '2023-07-12 14:57:47',
      alias: 'll的电脑',
      lastOnlineTime: '1970-01-01 00:00:00',
      authType: null,
      'onlineState|1': [true, false],
      // onlineState: false,
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/device',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
] as MockMethod[];
