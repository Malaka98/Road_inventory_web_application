import React, { useState, useRef, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useFormik } from "formik";

import pic from "./empty.png";

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

function ImageUpload() {
  const classes = useStyles();
  const fileInput = useRef(null);
  const u_btn = useRef(true);
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
      withCredentials: true,
      // onUploadProgress: (ProgressEvent) => {
      //     const {loaded, total } = ProgressEvent;
      //     let percent = Math.floor((loaded * 100) / total);
      //     setup(percent);
      // }
    })
      .then((response) => {
        //handle success
        // let img = window.location.origin + `/uploads/${response.data.img_id}`;
        // console.log(response.data[0].img_id);
        // console.log(response.data);
        if (response.data.length !== 0) {
          u_btn.current = false;
          setpicUrl(
            window.location.origin + `/uploads/${response.data[0].img_id}`
          );
        }

        // console.log(picUrl);
        // console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  const del_img = () => {
    let imagedata = new FormData();
    imagedata.append("id", query.get("id"));

    axios({
      method: "post",
      url: "http://localhost:4000/delimage",
      data: imagedata,
      withCredentials: true,
      // onUploadProgress: (ProgressEvent) => {
      //     const {loaded, total } = ProgressEvent;
      //     let percent = Math.floor((loaded * 100) / total);
      //     setup(percent);
      // }
    })
      .then((response) => {
        //handle success
        // let img = window.location.origin + `/uploads/${response.data.img_id}`;
        // console.log(response.data[0].img_id);
        u_btn.current = true;
        setpicUrl(pic);
        // console.log(picUrl);
        // console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  const validate = (values) => {
    let errors = {};

    if (fileInput.current.files.length === 0) {
      errors.file = "Please insert Image";
    } else if (fileInput.current.files[0].type !== "image/png") {
      if (fileInput.current.files[0].type !== "image/jpeg") {
        errors.file = "not valid";
      }
      // console.log(fileInput.current.files[0].type);
      console.log(fileInput.current);
    } else if (fileInput.current.files[0].size > 3000000) {
      errors.file = "full";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      file: "",
    },
    validate,
    onSubmit: (values) => {
      let imagedata = new FormData();

      imagedata.append("img", fileInput.current.files[0]);
      imagedata.append("id", query.get("id"));
      // console.log(query.get("id"));
      // console.log(fileInput.current.files[0]);
      axios({
        method: "post",
        url: "http://localhost:4000/upload",
        data: imagedata,
        headers: {
          "content-type": "multipart/form-data",
        },
        // onUploadProgress: (ProgressEvent) => {
        //     const {loaded, total } = ProgressEvent;
        //     let percent = Math.floor((loaded * 100) / total);
        //     setup(percent);
        // }
      })
        .then((response) => {
          //handle success
          get_img();
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
        });
    },
  });

  return (
    <div>
      {console.log("IMG_UP_UI")}
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
          <Grid item xs>
            <form onSubmit={formik.handleSubmit}>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
                name="file"
                onChange={(e) => {
                  formik.handleChange(e);
                  // setpicUrl(e.target.files[0])
                  let reader = new FileReader();

                  reader.onloadend = () => {
                    setpicUrl(reader.result);
                    // console.log(reader);
                    // console.log(reader.result);
                  };

                  reader.readAsDataURL(e.target.files[0]);
                }}
                onBlur={formik.handleBlur}
                ref={fileInput}
              />
              {formik.errors.file && formik.touched.file ? (
                <div style={{ color: "red" }}>{formik.errors.file}</div>
              ) : null}
              {u_btn.current ? (
                <div>
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera style={{ fontSize: 40 }} />
                    </IconButton>
                  </label>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    type="submit"
                  >
                    Upload
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<CloudUploadIcon />}
                  onClick={() => {
                    del_img();
                  }}
                >
                  Delete
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default React.memo(ImageUpload);
