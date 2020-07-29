/* eslint-disable react/prop-types */
import React from 'react'
import {
    List,
    ListItemText,
    ListItem, Divider, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    listItem: {
        cursor: "pointer"
    }
}));

const ItemLists = (props) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {props.storeList['storeLocation'] ? props.storeList['storeLocation'].map((store, i) => (
                <React.Fragment key={i + 1}>
                    <ListItem alignItems="flex-start" className={classes.listItem}
                        onClick={() => props.selectStore(store)}>
                        {/* <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar> */}
                        <ListItemText
                            primary={store.storeName}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        #{store.storeNumber} -
                                    </Typography>
                                    {` ${store.address1} ... ${store.zip}`}<br />
                                    <Typography
                                        component="span"
                                        variant="subtitle2"
                                        className={classes.inline}
                                        color="textPrimary">
                                        {store.milesToStore} miles
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            )) : ""}
        </List>
    )
}

export default ItemLists
