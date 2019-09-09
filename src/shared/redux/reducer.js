import { combineReducers } from "redux";
import MenuReducer from 'views/Menu/redux';

const appReducer = combineReducers({
  MenuReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
