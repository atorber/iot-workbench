import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams;

export interface Device {
  deviceType: string;
  enableState: boolean;
  activeState: boolean;
  activeTime: string;
  updateTime: string;
  productKey: string;
  deviceName: string;
  productName: string;
  banState: boolean;
  productCategory: string;
  accessType: string[];
  deviceSecret: string;
  instanceId: string;
  createTime: string;
  alias: string;
  lastOnlineTime: string;
  authType: null;
  onlineState: boolean;
}

const demoDta: Device = {
  deviceType: 'DIRECT',
  enableState: true,
  activeState: false,
  activeTime: '1970-01-01 00:00:00',
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
  onlineState: false,
};

console.debug(demoDta);

/**
 * @description: Request list return value
 */
export type DeviceListGetResultModel = BasicFetchResult<Device>;
