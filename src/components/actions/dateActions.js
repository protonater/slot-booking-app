import dispatcher from "../store/appDispatcher";
import * as dateApi from "../api/dateApi";
import actionTypes from "./actionTypes";

// Action creater
export function updateDate(date, dates) {
  dates.forEach(_date => {
    if (_date.selected) {
      _date.selected = false;
      dateApi.saveDate(_date).then(savedDate => {
        dispatcher.dispatch({
          actionType: actionTypes.UPDATE_DATE,
          date: savedDate
        });
      });
    }
  });

  date.selected = true;
  return dateApi.saveDate(date).then(savedDate => {
    // Hey dispatcher go tell all the stores that a date was just created.
    dispatcher.dispatch({
      actionType: actionTypes.UPDATE_DATE, // -> action
      date: savedDate
    });
  });
}

export function loadDates() {
  return dateApi.getDates().then(dates => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_DATES,
      date: dates
    });
  });
}
