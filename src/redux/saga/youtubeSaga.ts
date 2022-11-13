import { takeEvery, put } from "redux-saga/effects";
import {
  CALL_YOUTUBE_API,
  SEND_YOUTUBE_API_DATA_TO_REDUCER,
} from "../../utils/Constants";
import { fetchData } from "./fetching/apicall";

function* gettingdataforsaga() {
  let data: {}[] = yield fetchData();
  yield put({ type: SEND_YOUTUBE_API_DATA_TO_REDUCER, data });
}
export function* youtubeSaga() {
  yield takeEvery(CALL_YOUTUBE_API, gettingdataforsaga);
}
