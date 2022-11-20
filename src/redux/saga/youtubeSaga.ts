import { put, takeLatest } from "redux-saga/effects";
import { searchapidata } from "../../utils/types";
import {
  CALL_YOUTUBE_API,
  SEND_YOUTUBE_API_SUCCESS,
} from "../../utils/Constants";
import { fetchData } from "./fetching/apicall";
import Search from "../../Pages/Search";
import { useDispatch } from "react-redux";
import { setloader } from "../actions/callapi";
import React from "react";
import { store } from "../store";

function* gettingdataforsaga(action: {
  type: string;
  data: { search: string | null; token: string | null };
}) {
  try {
    console.log(action);
    let dat: searchapidata = yield fetchData(action.data);
    console.log("in saga", dat);
    let data: [searchapidata, string | null] = [dat, action.data.search];
    yield put({ type: SEND_YOUTUBE_API_SUCCESS, data });
    yield store.dispatch(setloader(false));
  } catch (error) {
    yield console.warn(error);
    yield store.dispatch(setloader(true));
  }
}
export function* youtubeSaga() {
  yield takeLatest(CALL_YOUTUBE_API, gettingdataforsaga);
}
