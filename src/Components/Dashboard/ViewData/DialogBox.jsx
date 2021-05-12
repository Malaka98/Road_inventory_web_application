import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  textField: {
    margin: "20px",
  },
}));

const validate = (values) => {
  const errors = {};

  if (!values.txt1) {
    errors.txt1 = "Required";
  } else if (values.txt1.length > 15) {
    errors.txt1 = "Must be 15 characters or less";
  }

  if (!values.txt2) {
    errors.txt2 = "Required";
  } else if (values.txt2.length > 20) {
    errors.txt2 = "Must be 20 characters or less";
  }

  if (!values.txt3) {
    errors.txt3 = "Required";
  } else if (values.txt3.length > 20) {
    errors.txt3 = "Must be 20 characters or less";
  }

  if (!values.txt4) {
    errors.txt4 = "Required";
  } else if (values.txt4.length > 20) {
    errors.txt4 = "Must be 20 characters or less";
  }
  if (!values.txt5) {
    errors.txt5 = "Required";
  } else if (values.txt5.length > 15) {
    errors.txt5 = "Must be 15 characters or less";
  }

  if (!values.txt6) {
    errors.txt6 = "Required";
  } else if (values.txt6.length > 20) {
    errors.txt6 = "Must be 20 characters or less";
  }

  if (!values.txt7) {
    errors.txt7 = "Required";
  } else if (isNaN(values.txt7)) {
    errors.txt7 = "Please enter numeric value";
  }

  if (!values.txt8) {
    errors.txt8 = "Required";
  } else if (isNaN(values.txt8)) {
    errors.txt8 = "Please enter numeric value";
  }

  if (!values.select) {
    errors.select = "Required";
  } else if (values.select.length > 20) {
    errors.select = "Must be 20 characters or less";
  }

  return errors;
};

function DialogBox(props) {
  //console.log(props.id);
  const classes = useStyles();
  const [open, setOpen] = useState(props.handleOpen);

  const handleClose = () => {
    setOpen(false);
    props.callBack(false);
  };

  console.log("Dialog Box");
  const formik = useFormik({
    initialValues: {
      txt1: props.id.data1,
      txt2: props.id.data2,
      txt3: props.id.data3,
      txt4: props.id.data4,
      txt5: props.id.data5,
      txt6: props.id.data6,
      txt7: props.id.data7,
      txt8: props.id.data8,
      select: props.id.data9,
      otxt1: props.id.data10,
      otxt2: props.id.data11,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      const formdata = new FormData();

      formdata.append("data1", values.txt1);
      formdata.append("data2", values.txt2);
      formdata.append("data3", values.txt3);
      formdata.append("data4", values.txt4);
      formdata.append("data5", values.txt5);
      formdata.append("data6", values.txt6);
      formdata.append("data7", values.txt7);
      formdata.append("data8", values.txt8);
      formdata.append("data9", values.select);
      formdata.append("data10", values.otxt1);
      formdata.append("data11", values.otxt2);
      formdata.append("ID", props.id.ID);

      axios({
        method: "post",
        url: "http://localhost:4000/updatedocument",
        data: formdata,
        withCredentials: true,
      })
        .then(function (response) {
          //handle success
          console.log(response);
          setOpen(false);
          props.callBack(false);
          props.callBack2();
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },
  });

  return (
    <Dialog
      open={open}
      //onClose={handleClose}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth={"xl"}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="form-dialog-title">Update Document</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a new data to update</DialogContentText>

          <Grid>
            <Paper className={classes.paper} elevation={3}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    label="ගම/නගරය"
                    id="outlined-margin-dense"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    name="txt1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt1}
                    error={
                      formik.touched.txt1 && formik.errors.txt1 ? true : false
                    }
                    helperText={
                      formik.touched.txt1 && formik.errors.txt1
                        ? formik.errors.txt1
                        : null
                    }
                  />

                  <TextField
                    label="මාර්ගයේ නම"
                    id="outlined-margin-dense"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    name="txt2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt2}
                    error={
                      formik.touched.txt2 && formik.errors.txt2 ? true : false
                    }
                    helperText={
                      formik.touched.txt2 && formik.errors.txt2
                        ? formik.errors.txt2
                        : null
                    }
                  />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    label="පටන් ගන්නා ස්ථානය"
                    id="outlined-margin-dense"
                    name="txt3"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt3}
                    error={
                      formik.touched.txt3 && formik.errors.txt3 ? true : false
                    }
                    helperText={
                      formik.touched.txt3 && formik.errors.txt3
                        ? formik.errors.txt3
                        : null
                    }
                  />
                  <TextField
                    label="අවසන් වන ස්ථානය"
                    id="outlined-margin-dense"
                    name="txt4"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt4}
                    error={
                      formik.touched.txt4 && formik.errors.txt4 ? true : false
                    }
                    helperText={
                      formik.touched.txt4 && formik.errors.txt4
                        ? formik.errors.txt4
                        : null
                    }
                  />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    label="ග්‍රාම නිලධාරී වසම"
                    id="outlined-margin-dense"
                    name="txt5"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt5}
                    error={
                      formik.touched.txt5 && formik.errors.txt5 ? true : false
                    }
                    helperText={
                      formik.touched.txt5 && formik.errors.txt5
                        ? formik.errors.txt5
                        : null
                    }
                  />
                  <TextField
                    label="මන්ත්‍රී කොට්ටාසය"
                    id="outlined-margin-dense"
                    name="txt6"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt6}
                    error={
                      formik.touched.txt6 && formik.errors.txt6 ? true : false
                    }
                    helperText={
                      formik.touched.txt6 && formik.errors.txt6
                        ? formik.errors.txt6
                        : null
                    }
                  />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    label="විදුලි කණු ගණන"
                    id="outlined-margin-dense"
                    name="txt7"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt7}
                    error={
                      formik.touched.txt7 && formik.errors.txt7 ? true : false
                    }
                    helperText={
                      formik.touched.txt7 && formik.errors.txt7
                        ? formik.errors.txt7
                        : null
                    }
                  />
                  <TextField
                    label="විදුලි පහන් ගණන"
                    id="outlined-margin-dense"
                    name="txt8"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt8}
                    error={
                      formik.touched.txt8 && formik.errors.txt8 ? true : false
                    }
                    helperText={
                      formik.touched.txt8 && formik.errors.txt8
                        ? formik.errors.txt8
                        : null
                    }
                  />
                </Grid>
                <Typography variant="h6">ගැසට් කර ඇත්නම්</Typography>
                <Grid container on="row" justify="center" alignItems="center">
                  <TextField
                    label="ගැසට් පත්‍රයේ අංකය"
                    id="outlined-margin-dense"
                    name="otxt1"
                    className={classes.textField}
                    value={formik.values.otxt1}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    onChange={formik.handleChange}
                  />

                  <InputLabel id="demo-simple-select-label">
                    ගැසට් පත්‍රයේ දිනය
                  </InputLabel>
                  <TextField
                    id="date"
                    type="date"
                    name="otxt2"
                    value={formik.values.otxt2}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    className={classes.formControl}
                  >
                    නාම පුවරුවක් යොදා තිබේද?
                  </InputLabel>
                  <FormControl>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.select}
                      error={
                        formik.touched.select && formik.errors.select
                          ? true
                          : false
                      }
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default React.memo(DialogBox);
