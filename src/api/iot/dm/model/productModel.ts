import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams;

export interface Product {
  productKey: string;
  productName: string;
  deviceType: string;
  offlineDetectState: boolean;
  permanentConnect: boolean;
  dynamicRegisterState: boolean;
  productSecret: string;
  description: string;
  updateTime: string;
  productCategory: string;
  offlineDetectCycle: number;
  accessType: string[];
  logState: boolean;
  extensions: string[];
  instanceId: string;
  shadowState: boolean;
  createTime: string;
}

const demoDta: Product = {
  deviceType: 'DIRECT',
  offlineDetectState: true,
  permanentConnect: true,
  dynamicRegisterState: false,
  productSecret: 'tjwecf8jjcwemz1s',
  description: '',
  updateTime: '2023-06-30 14:30:53',
  productKey: 'pc',
  productName: '电脑测试',
  productCategory: '用户自定义',
  offlineDetectCycle: 300,
  accessType: ['WIFI', 'ETHERNET'],
  logState: true,
  extensions: ['MQTT'],
  instanceId: 'zasr9fjmk53aur26',
  shadowState: true,
  createTime: '2023-06-30 14:30:53',
};

console.debug(demoDta);

/**
 * @description: Request list return value
 */
export type ProductListGetResultModel = BasicFetchResult<Product>;
