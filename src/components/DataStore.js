import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _dates = [];

class DateStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange(callback) {
    this.emit(CHANGE_EVENT);
  }

  getDates() {
    return _dates;
  }
}

const store = new DateStore();
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.UPDATE_DATE:
      _dates = _dates.map(date =>
        date.id === action.date.id ? action.date : date
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_DATES:
      _dates = action.date;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
