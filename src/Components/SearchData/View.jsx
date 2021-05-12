import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import SearchBox from "../Dashboard/SeachBox";
import axios from "axios";
import { AutoSizer, List } from "react-virtualized";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import { useHistory } from "react-router-dom";
// import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#ffffff",
  },
  heading: {
    flexGrow: 1,
    textAlign: "center",
    "font-weight": "bold",
  },
  ubtn: {
    marginLeft: "auto",
    // marginRight: "20px",
  },
  ubtn2: {
    marginLeft: "20px",
    // marginRight: "20px",
  },
  sbtn: {
    margin: "20px",
  },
}));

export default function ElevateAppBar(props) {
  const [data, setData] = useState({
    received: true,
    res: [{}],
  });

  useEffect(() => {
    genarate();
    console.log("mount");
    console.log(data.res);
  }, []);

  const genarate = () => {
    axios({
      method: "get",
      url: "http://localhost:4000/getdocuments",
      // withCredentials: true,
    })
      .then(function (response) {
        //handle success
        // console.log(response.data);

        setData({
          received: false,
          res: response.data,
        });
        //console.log(response.data);
        //setisDelete(false)
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });
  };

  const classes = useStyles();

  function select(data) {
    //console.log(data);
    history.push("/viewfulldetail?id=" + data);
  }
  const history = useHistory();

  const renderList = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ListItem
        button
        onClick={() => {
          select(data.res[index].ID);
          // console.log(data.ID);
        }}
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={data.res[index].data2} />
      </ListItem>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" className={classes.heading}>
            මාර්ග ඉන්වෙන්ට්‍රිය - නාත්තන්ඩිය ප්‍රාදේශීය සභාව
          </Typography>
          <div className={classes.ubtn}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={"/summary"}
            >
              Summary Detail
            </Button>
          </div>
          <div className={classes.ubtn2}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={"/login"}
            >
              Log In
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Toolbar />
      {/* <Divider /> */}
      <Paper elevation={0} className={classes.root}>
        <Grid item className={classes.sbtn}>
          <SearchBox
            name={(data) => {
              setData({
                res: data,
              });
              // console.log(data);
            }}
          />
        </Grid>
        <Grid item>
          {data.received ? (
            <div>Loading...</div>
          ) : data.res.length !== 0 ? (
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={800}
                  width={width}
                  rowRenderer={renderList}
                  rowCount={data.res.length}
                  rowHeight={60}
                />
              )}
            </AutoSizer>
          ) : (
            <div>Data not found</div>
          )}
        </Grid>
      </Paper>

      {console.log(data.res)}
    </React.Fragment>
  );
}
// </List>; */}
