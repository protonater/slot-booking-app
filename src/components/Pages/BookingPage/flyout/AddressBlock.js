import React, { useState } from "react";
import {
  Grid,
  Dialog,
  CircularProgress,
  IconButton,
  Paper,
  InputBase
} from "@material-ui/core";
import ItemLists from "./ItemLists";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const userStyle = makeStyles(theme => ({
  dialogStyling: {
    maxHeight: "inherit"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

function AddressBlock() {
  const classes = userStyle();
  const [open, setOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [store, setStore] = useState({});
  const [storeList, setStoreList] = useState([]);
  const [err, setErr] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://yacdn.org/proxy/https://www.lowes.com/wcs/resources/store/10151/storelocation/v1_0?maxResults=6&query=" +
      (zipCode === "" ? "28115" : zipCode);
    // const url2 = "https://www.lowes.com/store/nearbystoredetails?maxResults=10&responseGroup=medium&searchTerm=28117";
    console.log(url);
    setLoading(true);
    fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        setErr("");
        setLoading(false);
        setStoreList(data);
      })
      .catch(_err => {
        setLoading(false);
        setStoreList([]);
      });
  };

  const selectStore = _store => {
    setStore(_store);
  };
  return (
    <div className="addressWrapper addressBorder">
      <div className="addressBlkContainer">
        <div className="storeName">
          <div className="boldText">
            {store.zip
              ? `${store.storeName} Store #${store.storeNumber}`
              : "Mooresville Lowe's Store #595"}
          </div>
          <div className="truncateAddress">
            {store.zip
              ? `${store.address1} ... ${store.zip}`
              : "509 River Highway ... 28117"}
          </div>
        </div>
        <button
          className="button-link changeLocation"
          onClick={handleClickOpen}
        >
          Change <span className="hideLocation">location</span>
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="findStore"
          className={classes.dialogStyling}
        >
          <Paper component="form">
            <InputBase
              placeholder="Zipcode or City or State"
              className={classes.input}
              onChange={e => setZipCode(e.target.value)}
              value={zipCode}
            />
            <IconButton
              type="search"
              id="searchZip"
              onClick={fetchData}
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <br />
          <Grid justify="center" alignItems="center" container>
            {loading ? (
              <CircularProgress />
            ) : (
              <ItemLists storeList={storeList} selectStore={selectStore} />
            )}
          </Grid>
          <br />
        </Dialog>
      </div>
    </div>
  );
}

export default AddressBlock;
