import { put, takeLatest } from "redux-saga/effects";
import { searchapidata } from "../../utils/types";
import {
  CALL_YOUTUBE_API,
  SEND_YOUTUBE_API_SUCCESS,
} from "../../utils/Constants";
import { fetchData } from "./fetching/apicall";
import Search from "../../Pages/Search";

function* gettingdataforsaga(action: {
  type: string;
  data: { search: string; token: string };
}) {
  try {
    console.log(action);
    let dat: searchapidata = yield fetchData(action.data);
    console.log("in saga", dat);
    let data: [searchapidata, string] = [dat, action.data.search];
    yield put({ type: SEND_YOUTUBE_API_SUCCESS, data });
  } catch (error) {
    yield console.warn(error);
  }
}
export function* youtubeSaga() {
  yield takeLatest(CALL_YOUTUBE_API, gettingdataforsaga);
}
