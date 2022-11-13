import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { get_youtube_data } from "./reducers/youtubedatareducer";
import rootreducer from "./roots/rootreducer";
import { youtubeSaga } from "./saga/youtubeSaga";

const middlewaresaga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootreducer,
  middleware: () => [middlewaresaga],
});

middlewaresaga.run(youtubeSaga);
