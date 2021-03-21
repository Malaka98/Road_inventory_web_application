import { Grid, ListItem, ListItemIcon } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";

import { useHistory } from "react-router-dom";
import SearchBox from "../SeachBox";
import DialogBox from "./DialogBox";
import { AutoSizer, List } from "react-virtualized";

const useStyles = makeStyles((theme) => ({

  list: {
    backgroundColor: "white",
    padding: "10px",
    borderradius: "20px",
  },
  err: {
    color: "red",
    fontSize: "20px",
    backgroundColor: "white",
    padding: "10px",
    textAlign: "Center",
  },
  loading: {
    fontSize: "20px",
    backgroundColor: "white",
    padding: "10px",
    textAlign: "Center",
  }
}));

function ViewDoc() {
  const classes = useStyles();
  //const [received, setreceived] = useState(true);
  const [data, setData] = useState({
    received: true,
    res: [{}],
  });

  const [dialogBox, setdialogBox] = useState({
    handleClickOpen: false,
    id: [],
  });

  //const [handleClickOpen, sethandleClickOpen] = useState(false)
  //const handleClickOpen = useRef(false)
  //const [id, setid] = useState([])

  useEffect(() => {
    genarate();
    console.log("mount");
  }, []);

  const genarate = () => {
    axios({
      method: "get",
      url: "http://localhost:4000/getdocuments",
      withCredentials: true,
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

  function select(data) {
    //console.log(data);
    history.push("/fulldetails?id=" + data);
  }
  const history = useHistory();

  function deleteDoc(data) {
    const formdata = new FormData();
    formdata.append("id", data);
    axios({
      method: "post",
      url: "http://localhost:4000/deletedoc",
      data: formdata,
      withCredentials: true,
    })
      .then(function (response) {
        //handle success
        console.log(response);
        genarate();
        //setisDelete(true)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  const renderrow = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ListItem
        button
        onClick={() => {
          select(data.res[index].ID);
        }}
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={data.res[index].data2}
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
                setdialogBox({
                  handleClickOpen: true,
                  id: data.res[index],
                });
                //console.log(data.id);
              }}
            >
              <EditIcon style={{ fontSize: 30, marginRight: "10px" }} />
            </Button>

            <Button
              onClick={() => {
                deleteDoc(data.res[index].ID);
              }}
            >
              <DeleteIcon
                style={{
                  color: "#B4423C",
                  fontSize: 30,
                  marginLeft: "10px",
                }}
              />
            </Button>
          </ButtonGroup>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );

  return (
    <div>
      {console.log("Ui")}
      {dialogBox.handleClickOpen ? (
        <DialogBox
          handleOpen={dialogBox.handleClickOpen}
          id={dialogBox.id}
          callBack={(data) => {
            setdialogBox({ handleClickOpen: data });
          }}
          callBack2={() => {
            genarate();
          }}
        />
      ) : (
        ""
      )}

      <Grid container direction="row" justify="flex-end" alignItems="center">
        <SearchBox
          name={(data) => {
            setData({
              res: data,
            });
          }}
        />
      </Grid>
      
      {data.received ? (
        <div className={classes.loading}>Loading...</div>
      ) : data.res.length !== 0 ? (
        <AutoSizer>
          {({ height, width }) => (
            <List
              className={classes.list}
              height={800}
              width={width}
              rowRenderer={renderrow}
              rowCount={data.res.length}
              rowHeight={60}
            />
          )}
        </AutoSizer>
      ) : (
        <div className={classes.err}>Not data found</div>
      )}
     
    </div>
  );
}

export default ViewDoc;
