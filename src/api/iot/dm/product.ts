import { defHttp } from '/@/utils/http/axios';
import { DemoParams, ProductListGetResultModel } from './model/productModel';

enum Api {
  PRODUCT_LIST = '/product',
}

/**
 * @description: Get sample list value
 */

export const productListApi = (params: DemoParams) =>
  defHttp.get<ProductListGetResultModel>({
    url: Api.PRODUCT_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
