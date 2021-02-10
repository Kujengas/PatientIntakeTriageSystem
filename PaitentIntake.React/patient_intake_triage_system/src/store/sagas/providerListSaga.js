import { takeLatest, call, put } from "redux-saga/effects";
import { PROVIDER_LIST_REQUEST,providerListResponseAction } from '../actions';
import { getProviderList } from '../api';

export function* providerListRequestWatcher()
{
    yield takeLatest(PROVIDER_LIST_REQUEST, providerListRequestFlow);
}

function* providerListRequestFlow() {
    const providerList = yield call(getProviderList);
    yield put(providerListResponseAction(providerList));

}