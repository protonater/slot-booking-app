/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import {
    Grid,
    Dialog, CircularProgress, IconButton, Paper, InputBase
} from '@material-ui/core';
import ItemLists from './ItemLists';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { StoreContext } from '../../hooks/StoreContext';

const userStyle = makeStyles((theme) => ({
    dialogStyling: {
        maxHeight: "inherit",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

const AddressSearch = (props) => {
    const classes = userStyle();
    const [store, setStore] = useContext(StoreContext);

    const handleSelect = (_store) => {
        setStore(_store);
        props.handleClose();
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="findStore" className={classes.dialogStyling}>
            <Paper component="form">
                <InputBase placeholder="Zipcode or City or State"
                    className={classes.input}
                    onChange={props.onChange} />
                <IconButton type="text" onClick={() => { handleSelect(store) }} className={classes.iconButton}
                    aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <br />
            <Grid justify="center" alignItems="center" container>
                {props.loading ?
                    <React.Fragment>
                        <CircularProgress />
                    </React.Fragment> : <ItemLists storeList={props.storeList} />}
            </Grid>
            <br />
        </Dialog>
    );
    // <div className="store_search">
    //     <div className="cover-img">
    //         <div className="cover-inner">
    //             <h3>Find a Store</h3>
    //         </div>
    //     </div>
    //     <div className="content">
    //         <form className="add">
    //             <input type="text" name="add" placeholder="Zip or City or State ..." />
    //             <div className="input-buttons">
    //                 <a href="#0" className="add-todo">
    //                     {/* <SearchIcon /> */}
    //                     {/* <i className="fas fa-plus add"></i> */}
    //                 </a>
    //             </div>
    //         </form>
    /* <ul className="todos">
                    <li>
                        <input type="checkbox" id="todo_1" />
                        <label htmlFor="todo_1">
                            <span className="check"></span>
          Buy Flight Tickets
        </label>
                        <i className="far fa-trash-alt delete"></i>
                    </li>
                    <li>
                        <input type="checkbox" id="todo_2" />
                        <label htmlFor="todo_2">
                            <span className="check"></span>
          Find AirBnbB
        </label>
                        <i className="far fa-trash-alt delete"></i>
                    </li>
                    <li>
                        <input type="checkbox" id="todo_3" />
                        <label htmlFor="todo_3">
                            <span className="check"></span>
          Look up things to do
        </label>
                        <i className="far fa-trash-alt delete"></i>
                    </li>
                    <li>
                        <input type="checkbox" id="todo_4" />
                        <label htmlFor="todo_4">
                            <span className="check"></span>
          Passport
        </label>
                        <i className="far fa-trash-alt delete"></i>
                    </li>
                </ul> */
}

export default AddressSearch
