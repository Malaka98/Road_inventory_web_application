import { Grid, List, ListItem, ListItemIcon, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";

import { useHistory } from "react-router-dom";
import SearchBox from '../SeachBox'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
}));

function ViewDoc() {
  const classes = useStyles();
  const [received, setreceived] = useState(true);
  const [data, setData] = useState([{}]);
  //var data = [{}]

  useEffect(() => {
    genarate();
  }, []);

  function genarate() {
    axios({
      method: "get",
      url: "http://localhost:4000/getdocuments",
      withCredentials: true,
    })
      .then(function(response) {
        //handle success
        //console.log(response.data);

        setData(response.data);
        //console.log(data);
        setreceived(false);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }

  function select(data) {
    console.log(data);
    history.push("/fulldetails?id=" + data);
  }
  const history = useHistory();
  return (
    <div>
           <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <SearchBox name={(data)=>{
              setData(data);
            }}/>
          </Grid>
          
      <Paper className={classes.paper}>
        <List>
          {received ? (
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Loading" />
            </ListItem>
          ) : (
            
            data.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  onClick={() => {
                    select(item.ID);
                  }}
                >
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${item.data2} මාර්ගය`}
                    style={{ marginRight: "450px" }}
                  />

                  <ListItemSecondaryAction>
                    <ButtonGroup
                      variant="text"
                      color="primary"
                      aria-label="text primary button group"
                    >
                      <Button
                        onClick={() => {
                          console.log("Update");
                        }}
                      >
                        <UpdateIcon
                          style={{ fontSize: 30, marginRight: "10px" }}
                        />
                      </Button>

                      <Button
                        onClick={() => {
                          console.log("Delete");
                        }}
                      >
                        <DeleteIcon
                          style={{
                            color: "#fc030b",
                            fontSize: 30,
                            marginLeft: "10px",
                          }}
                        />
                      </Button>
                    </ButtonGroup>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            }) 
            
          )}
           
        </List>
      </Paper>
    </div>
  );
}

export default ViewDoc;
