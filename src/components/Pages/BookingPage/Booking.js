import React, { useState, useEffect } from "react";
// Pages
import DateSlot from "./slots/DateSlot";
import TimeSlot from "./slots/TimeSlot";
import AddressBlock from "./flyout/AddressBlock";
import NoSlot from "./slots/NoSlot";
import SlotFull from "./slots/SlotFull";
// Flux store components
import DateStore from "../../store/DataStore";
import { loadDates, updateDate } from "../../actions/dateActions";
import { StoreContextProvider } from "../../context/StoreContext";

const BookingPage = () => {
  const [dates, setDates] = useState(DateStore.getDates());

  useEffect(() => {
    DateStore.addChangeListener(onChangeDate);
    if (DateStore.getDates().length === 0) loadDates();
    return () => DateStore.removeChangeListener(onChangeDate);
  }, []);

  let times = [];
  function onChangeDate() {
    setDates(DateStore.getDates());
  }

  return (
    <div className="section-blocks" style={{ marginTop: -70 }}>
      <div
        id="Make-An-Appointment"
        className="row offset-sm-2-sm-2 Make-An-Appointment section pt-md-4 pt-lg-5"
      >
        <div className="offset-sm-3 container py-5">
          <div className="section-col-max" style={{ borderRadius: "10px" }}>
            <div className="card slotPage">
              {/* <img src={img} className="card-img-top" /> */}
              <div className="card-title mt-4 ">
                <h3
                  className="section-title mx-auto"
                  style={{ width: "280px" }}
                >
                  Select the Time Slot
                </h3>
              </div>
              <div className="card-body">
                <StoreContextProvider>
                  <AddressBlock />
                </StoreContextProvider>
                <div className="slotdiv">
                  {dates[0] ? (
                    <>
                      <div className="bookslot_scrollableContainer">
                        <DateSlot dates={dates} updateDate={updateDate} />
                      </div>
                      {dates.forEach(date => {
                        if (date.selected && !date.slotFull)
                          times = date.timePeriod;
                      })}
                      {times[0] ? (
                        <div className="timeSlot_container">
                          {times.map((timeSlot, i) => (
                            <TimeSlot key={i} timeSlot={timeSlot} />
                          ))}
                        </div>
                      ) : (
                        <SlotFull />
                      )}
                    </>
                  ) : (
                    <NoSlot />
                  )}
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
