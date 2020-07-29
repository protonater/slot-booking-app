/* eslint-disable react/prop-types */
import React from 'react';

const DateSlot = (props) => {
    return (
        <>
            {props.dates.map((date, i) => (
                <div key={i} className="bookslot_slotDates" data-automation-id="book-slot-slotDates">
                    <button onClick={() => props.updateDate(date, props.dates)}
                        className="bookslot_slotDate bookslot_dayBtn bookslot_dateSelected"
                        data-automation-id="btn-slot-date-0">
                        <span className="screenReaderOnlyText">{date.day}</span>
                        <div className={date.selected ? "bookslot_dateSelectedCircle mt-2" : "mt-2"}>{date.date}</div>
                    </button>
                </div>
            ))}
        </>
    )
}

export default DateSlot;
