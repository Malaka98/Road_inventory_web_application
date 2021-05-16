import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import pic from "../Dashboard/ViewData/empty.png";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  input: {
    display: "none",
  },
  button: {
    margin: theme.spacing(1),
  },
}));



function GetImage(props) {

  // console.log(props.printData.T2data);

  const classes = useStyles();
  const [picUrl, setpicUrl] = useState(pic);

  const matches = useMediaQuery("(min-width:1820px)");
  const matches2 = useMediaQuery("(min-width:1510px)");
  const matches3 = useMediaQuery("(min-width:555px)");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  useEffect(() => {
    get_img();
  }, []);

  const get_img = () => {
    let imagedata = new FormData();
    imagedata.append("id", query.get("id"));

    axios({
      method: "post",
      url: "http://localhost:4000/getimage",
      data: imagedata,
      // withCredentials: true,
      // onUploadProgress: (ProgressEvent) => {
      //     const {loaded, total } = ProgressEvent;
      //     let percent = Math.floor((loaded * 100) / total);
      //     setup(percent);
      // }
    })
      .then((response) => {
        //handle success

        if (response.data.length !== 0) {
          setpicUrl(
            window.location.origin + `/uploads/${response.data[0].img_id}`
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <img
              // src={window.location.origin + `/uploads/${query.get("id")}`}
              src={picUrl}
              className={classes.pic}
              style={{
                maxWidth: matches
                  ? "520px"
                  : matches2
                  ? "420px"
                  : matches3
                  ? "350px"
                  : "220px",
                maxHeight: matches
                  ? "520px"
                  : matches2
                  ? "420px"
                  : matches3
                  ? "350px"
                  : "220px",
                marginBottom: "20px",
              }}
              alt=""
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default React.memo(GetImage);
