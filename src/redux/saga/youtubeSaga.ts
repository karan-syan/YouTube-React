import { takeEvery, put } from "redux-saga/effects";
import { searchvidtype } from "../../utils/types";
import {
  CALL_YOUTUBE_API,
  SEND_YOUTUBE_API_FAILED,
  SEND_YOUTUBE_API_REQUEST,
  SEND_YOUTUBE_API_SUCCESS,
} from "../../utils/Constants";
import { fetchData } from "./fetching/apicall";

function* gettingdataforsaga() {
  try {
    yield put({ type: SEND_YOUTUBE_API_REQUEST });
    let data: searchvidtype[] = yield fetchData();
    yield put({ type: SEND_YOUTUBE_API_SUCCESS, data });
  } catch (error) {
    yield console.warn(error);
  }
}
export function* youtubeSaga() {
  yield takeEvery(CALL_YOUTUBE_API, gettingdataforsaga);
}
