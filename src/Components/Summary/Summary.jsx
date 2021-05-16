import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

import ItemList from "./ItemList";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    overflow: "auto",
    backgroundColor: "#ffffff",
    paddingTop: "20px",
  },
  heading: {
    flexGrow: 1,
    textAlign: "center",
    "font-weight": "bold",
  },
  ubtn: {
    marginLeft: "auto",
  },
}));

const itemList = [
  "නාත්තන්ඩිය",
  "තොඩුවාව",
  "කුඩාවැව",
  "මහවැව",
  "මට්ටකොටු වැල්ල",
  "ඉරණවිල",
  "වලහපිටිය",
  "හත්තිනිය",
  "ගල් අමුණ",
  "තල්විල",
  "යටකලාන",
  "කොස්වාඩිය",
  "මාරවිල",
  "මූදුකටුව",
  "කොස්වත්ත",
  "පහළ කටුනේරිය",
  "මාවිල",
  "තබ්බෝව",
  "දුනකන්නාව",
  "තුම්මෝදර",
  "නාරවිල",
  "මැද කටුනේරිය",
  "ඉහළ කටුනේරිය",
  "කොට්ට්‍රාමුල්ල",
]

export default function ElevateAppBar(props) {
  const classes = useStyles();

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
      {/* <Divider /> */}
      <Paper elevation={0} className={classes.root}>
        <Container maxWidth="xl">
          {/* <SummaryTable /> */}
         {
           itemList.map((value, key) => {
             return <ItemList itemName={value} key={key}/>
           })
         }
        </Container>
      </Paper>
    </React.Fragment>
  );
}
