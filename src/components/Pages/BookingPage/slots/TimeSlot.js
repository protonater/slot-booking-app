/* eslint-disable react/prop-types */
import React, { Fragment, useRef } from 'react'
// import { exportComponentAsPNG } from "react-component-export-image";
import QRcode from './QRcode';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const TimeSlot = ({ timeSlot }) => {
    const componentRef = useRef();

    const width = parseInt(timeSlot.width / timeSlot.total * 100);
    const bgColor = width < 100 ? "#004791" : "red";

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <div className="courses-container">
                <div className="course">
                    <div className="course-preview">
                        <h5>{timeSlot.slot}</h5>
                    </div>
                    <div className="course-info">
                        <div className="progress-container">
                            <div className="progress">
                                <div style={{
                                    width: `${width}%`,
                                    backgroundColor: bgColor
                                }} />
                            </div>
                            <span className="progress-text">{timeSlot.width}/{timeSlot.total} Customers</span>
                        </div>
                        {width < 100 ? <button className="reserve-btn btn" onClick={handleClickOpen}>Book</button> : ""}
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Slot Booked Successfully!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        QR Code:
                    </DialogContentText>
                    <QRcode ref={componentRef}/>
                </DialogContent>
                <DialogActions>
                    {/* <Button variant="outlined" onClick={() => exportComponentAsPNG(componentRef)} color="primary"> */}
                    <Button variant="outlined" color="primary">
                        Download
                    </Button>
                    <Button variant="outlined" onClick={handleClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default TimeSlot
