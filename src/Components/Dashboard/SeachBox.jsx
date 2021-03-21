import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginBottom: "20px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBox(props) {
  const classes = useStyles();
    const searchKey = useRef("")

  function genarate(value) {
    const formdata = new FormData();
    formdata.append("searchKey", value);
    console.log(formdata);
    axios({
      method: "post",
      url: "http://localhost:4000/search",
      data: formdata,
      withCredentials: true,
    })
      .then(function(response) {
        //handle success
        console.log(response.data);

        props.name(response.data);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <Paper className={classes.root}>
      {console.log("Search Box")}
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            genarate(e.target.value);
          }
        }}
        onChange={(e)=>{
            searchKey.current = e.target.value
        }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => {
            
              genarate(searchKey.current);
            
          }}
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}

export default React.memo(SearchBox);