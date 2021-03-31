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
// import { AutoSizer, List } from "react-virtualized";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import { useHistory } from "react-router-dom";

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
        //console.log(response.data);

        setData({
          received: false,
          res: response.data,
        });
        //console.log(response.data);
        //setisDelete(false)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const classes = useStyles();

  function select(data) {
    //console.log(data);
    history.push("/fulldetails?id=" + data);
  }
  const history = useHistory();

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
              to={"/login"}
            >
              Log In
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Toolbar />
      <Paper elevation={0} className={classes.root}>
        <Grid item className={classes.sbtn}>
          <SearchBox
            name={(data) => {
              setData({
                res: data,
              });
            }}
          />
        </Grid>
        <Grid item>
          <List component="nav" aria-label="contacts">
            {data.res.map((data, key) => (
              <div key={key}>
                <ListItem
                  button
                  onClick={() => {
                    select(data.ID);
                    // console.log(data.ID);
                  }}
                >
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary={data.data2} />
                </ListItem>
              </div>
            ))}
          </List>
        </Grid>
      </Paper>

      {console.log(data.res)}
    </React.Fragment>
  );
}
