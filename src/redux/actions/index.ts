import { Dispatch } from 'redux';
import { getProductList } from '@apis/baseInfo';
import {
  productListDispatchType,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_ACTIVED_ID,
} from '@redux/types';

export const fetchProductList =
  () => async (dispatch: Dispatch<productListDispatchType>) => {
    // @NOTE: 비동기 데이터 받아오는 로직 작성
    // @NOTE: 요청 완료 후 직접 dispatch
    try {
      const response = await getProductList();
      dispatch({
        type: GET_PRODUCT_LIST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_LIST_FAIL,
      });
    }
  };

export const updateActivedId =
  (productId: number) => (dispatch: Dispatch<productListDispatchType>) => {
    dispatch({
      type: UPDATE_ACTIVED_ID,
      payload: productId,
    });
  };
