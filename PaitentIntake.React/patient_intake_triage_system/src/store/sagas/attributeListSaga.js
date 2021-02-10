import { takeLatest, call, put } from "redux-saga/effects";
import { GET_ATTRIBUTE_LIST_REQUEST, attributeListResponseAction } from '../actions';
import { getAttributeList } from '../api';

export function* attributeListRequestWatcher()
{
    yield takeLatest(GET_ATTRIBUTE_LIST_REQUEST, attributeListRequestFlow);
}

function* attributeListRequestFlow() {
    const attributeList = yield call(getAttributeList);
    yield put(attributeListResponseAction(attributeList));

}