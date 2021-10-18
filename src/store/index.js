import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas";

const store = () => {

  //create saga middleware
  const sagaMiddleware = createSagaMiddleware()

  //mouting it to the store
  const configStore = configureStore({
      reducer: reducers,
      middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });

  console.log("Saga Middleware is running")
  sagaMiddleware.run(watchSagas);

  return configStore;
};



export default store;