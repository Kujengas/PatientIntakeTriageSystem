import { takeLatest, call, put } from "redux-saga/effects";
import { ROOM_LIST_REQUEST,roomListResponseAction } from '../actions';
import { getRoomList } from '../api';

export function* roomListRequestWatcher()
{
    yield takeLatest(ROOM_LIST_REQUEST, roomListRequestFlow);
}

function* roomListRequestFlow() {
    const roomList = yield call(getRoomList);
    yield put(roomListResponseAction(roomList));

}