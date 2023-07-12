import { defHttp } from '/@/utils/http/axios';
import { DemoParams, DeviceListGetResultModel } from './model/deviceModel';

enum Api {
  DEVICE_LIST = '/device',
}

/**
 * @description: Get sample list value
 */

export const deviceListApi = (params: DemoParams) =>
  defHttp.get<DeviceListGetResultModel>({
    url: Api.DEVICE_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
