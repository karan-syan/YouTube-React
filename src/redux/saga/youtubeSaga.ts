import { put, takeLatest } from "redux-saga/effects";
import { searchvidtype } from "../../utils/types";
import {
  CALL_YOUTUBE_API,
  SEND_YOUTUBE_API_FAILED,
  SEND_YOUTUBE_API_REQUEST,
  SEND_YOUTUBE_API_SUCCESS,
} from "../../utils/Constants";
import { fetchData } from "./fetching/apicall";

function* gettingdataforsaga(action: { type: string; data: string }) {
  try {
    console.log(action.data);
    let apiData: searchvidtype[] = yield fetchData(action.data);
    yield put({ type: SEND_YOUTUBE_API_SUCCESS, apiData });
  } catch (error) {
    yield console.warn(error);
  }
}
export function* youtubeSaga() {
  yield takeLatest(CALL_YOUTUBE_API, gettingdataforsaga);
}
