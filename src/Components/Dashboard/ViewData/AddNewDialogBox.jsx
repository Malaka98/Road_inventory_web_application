import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  textField: {
    margin: "20px",
  },
}));

export default function AddNewDialogBox(props) {
  console.log(props.id);
  const classes = useStyles();
  const [open, setOpen] = useState(props.handleOpen);

  const handleClose = () => {
    setOpen(false);
    props.callBack(false);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.txt9) {
      errors.txt9 = "Required";
    } else if (values.txt9.length > 100) {
      errors.txt9 = "Must be 100 characters or less";
    }

    if (!values.txt10) {
      errors.txt10 = "Required";
    } else if (values.txt10.length > 100) {
      errors.txt10 = "Must be 100 characters or less";
    }

    if (!values.txt11) {
      errors.txt11 = "Required";
    } else if (values.txt11.length > 100) {
      errors.txt11 = "Must be 100 characters or less";
    }

    if (!values.txt12) {
      errors.txt12 = "Required";
    } else if (values.txt12.length > 100) {
      errors.txt12 = "Must be 100 characters or less";
    }

    if (!values.txt13) {
      errors.txt13 = "Required";
    } else if (values.txt13.length > 100) {
      errors.txt13 = "Must be 100 characters or less";
    }

    if (!values.txt14) {
      errors.txt14 = "Required";
    } else if (values.txt14.length > 100) {
      errors.txt14 = "Must be 100 characters or less";
    }

    if (!values.txt15) {
      errors.txt15 = "Required";
    } else if (values.txt15.length > 100) {
      errors.txt15 = "Must be 100 characters or less";
    }

    if (!values.txt16) {
      errors.txt16 = "Required";
    } else if (values.txt16.length > 100) {
      errors.txt16 = "Must be 100 characters or less";
    }

    if (!values.txt17) {
      errors.txt17 = "Required";
    } else if (values.txt17.length > 100) {
      errors.txt17 = "Must be 100 characters or less";
    }

    if (!values.txt18) {
      errors.txt18 = "Required";
    } else if (values.txt18.length > 15) {
      errors.txt18 = "Must be 15 characters or less";
    }

    if (!values.txt19) {
      errors.txt19 = "Required";
    } else if (values.txt19.length > 15) {
      errors.txt19 = "Must be 15 characters or less";
    }

    return errors;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      txt9: "",
      txt10: "",
      txt11: "",
      txt12: "",
      txt13: "",
      txt14: "",
      txt15: "",
      txt16: "",
      txt17: "",
      txt18: "",
      txt19: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      const formdata = new FormData();

      formdata.append("T1data1", values.txt9);
      formdata.append("T1data2", values.txt10);
      formdata.append("T1data3", values.txt11);
      formdata.append("T1data4", values.txt12);
      formdata.append("T1data5", values.txt13);
      formdata.append("T1data6", values.txt14);
      formdata.append("T1data7", values.txt15);
      formdata.append("T1data8", values.txt16);
      formdata.append("T1data9", values.txt17);
      formdata.append("T1data10", values.txt18);
      formdata.append("T1data11", values.txt19);
      formdata.append("d_id", props.id);

      axios({
        method: "post",
        url: "http://localhost:4000/addnewrecode",
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
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xl"
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="form-dialog-title">Enter Data</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new data for a new record</DialogContentText>

          <Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <TextField
                label="දිනය"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt9"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt9}
                error={formik.touched.txt9 && formik.errors.txt9 ? true : false}
                helperText={
                  formik.touched.txt9 && formik.errors.txt9
                    ? formik.errors.txt9
                    : null
                }
              />

              <TextField
                label="තාර දම ඇති දුර මීටර්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt10}
                error={
                  formik.touched.txt10 && formik.errors.txt10 ? true : false
                }
                helperText={
                  formik.touched.txt10 && formik.errors.txt10
                    ? formik.errors.txt10
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
                label="බොරළු දමා ඇති දුර මීටර්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt11"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt11}
                error={
                  formik.touched.txt11 && formik.errors.txt11 ? true : false
                }
                helperText={
                  formik.touched.txt11 && formik.errors.txt11
                    ? formik.errors.txt11
                    : null
                }
              />

              <TextField
                label="කොන්ක්‍රීට් කර ඇති දුඅර මීටර්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt12"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt12}
                error={
                  formik.touched.txt12 && formik.errors.txt12 ? true : false
                }
                helperText={
                  formik.touched.txt12 && formik.errors.txt12
                    ? formik.errors.txt12
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
                label="කැට ගල් අතුරා ඇති දුර මීටර්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt13"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt13}
                error={
                  formik.touched.txt13 && formik.errors.txt13 ? true : false
                }
                helperText={
                  formik.touched.txt13 && formik.errors.txt13
                    ? formik.errors.txt13
                    : null
                }
              />

              <TextField
                label="මුළු දුර මීටර්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt14"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt14}
                error={
                  formik.touched.txt14 && formik.errors.txt14 ? true : false
                }
                helperText={
                  formik.touched.txt14 && formik.errors.txt14
                    ? formik.errors.txt14
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
                label="පළල මීටර්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt15"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt15}
                error={
                  formik.touched.txt15 && formik.errors.txt15 ? true : false
                }
                helperText={
                  formik.touched.txt15 && formik.errors.txt15
                    ? formik.errors.txt15
                    : null
                }
              />

              <TextField
                label="පාලම්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt16"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt16}
                error={
                  formik.touched.txt16 && formik.errors.txt16 ? true : false
                }
                helperText={
                  formik.touched.txt16 && formik.errors.txt16
                    ? formik.errors.txt16
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
                label="පෙට්ටි බෝක්කු"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt17"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt17}
                error={
                  formik.touched.txt17 && formik.errors.txt17 ? true : false
                }
                helperText={
                  formik.touched.txt17 && formik.errors.txt17
                    ? formik.errors.txt17
                    : null
                }
              />

              <TextField
                label="කාණු කැට යෙදූ ස්ථාන"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt18"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt18}
                error={
                  formik.touched.txt18 && formik.errors.txt18 ? true : false
                }
                helperText={
                  formik.touched.txt18 && formik.errors.txt18
                    ? formik.errors.txt18
                    : null
                }
              />
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <TextField
                label="සපත්තු පාලම්"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                size="small"
                name="txt19"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.txt19}
                error={
                  formik.touched.txt19 && formik.errors.txt19 ? true : false
                }
                helperText={
                  formik.touched.txt19 && formik.errors.txt19
                    ? formik.errors.txt19
                    : null
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* onClick={handleClose} */}
          <Button type="submit" color="primary">
            Insert
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
