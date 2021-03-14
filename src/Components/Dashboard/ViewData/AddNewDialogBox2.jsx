import React, { useState } from 'react'
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
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({

    paper: {
      padding: "20px",
    },
    textField: {
      margin: "20px",
    },
  }));

export default function AddNewDialogBox2(props) {
    console.log(props.id);
    const classes = useStyles();
    const [open, setOpen] = useState(props.handleOpen);
  
    const handleClose = () => {
      setOpen(false);
      props.callBack(false);
    };

    const validate = (values) => {
        const errors = {};

        if (!values.date) {
          errors.date = "Required";
        }
    
        if (!values.txt20) {
          errors.txt20 = "Required";
        } else if (values.txt20.length > 15) {
          errors.txt20 = "Must be 15 characters or less";
        }
    
        if (!values.txt21) {
          errors.txt21 = "Required";
        } else if (values.txt21.length > 15) {
          errors.txt21 = "Must be 15 characters or less";
        }
    
        return errors;
      };

  const formik = useFormik({
    initialValues: {
      date: "",
      txt20: "",
      txt21: "",
    },
    validate,
    onSubmit: (values) => {
      
      const formdata = new FormData();

      formdata.append("T2data1", values.txt20);
      formdata.append("T2data2", values.txt21);
      formdata.append("T2data3", values.date);
      formdata.append("d_id", props.id);
      
      axios({
        method: "post",
        url: "http://localhost:4000/addnewrecode2",
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
            <DialogContentText>
            Enter new data for a new record
            </DialogContentText>

            <Grid>
            <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <InputLabel id="demo-simple-select-label">
                    ගැසට් පත්‍රයේ දිනය
                  </InputLabel>
                  <TextField
                    id="date"
                    type="date"
                    name="date"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                    error={
                      formik.touched.date && formik.errors.date ? true : false
                    }
                    helperText={
                      formik.touched.date && formik.errors.date
                        ? formik.errors.date
                        : null
                    }
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <TextField
                    id="outlined-margin-dense"
                    label="සවිකළ උපකරණ / සිදු කල අලුත්වැඩියාව / කරණ ලද වැඩි දියුණු කිරීම / ප්‍රතිසංස්කරණය"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    name="txt20"
                    fullWidth
                    multiline
                    rows={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt20}
                    error={
                      formik.touched.txt20 && formik.errors.txt20 ? true : false
                    }
                    helperText={
                      formik.touched.txt20 && formik.errors.txt20
                        ? formik.errors.txt20
                        : null
                    }
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <TextField
                    id="outlined-margin-dense"
                    label="වියදම"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    size="small"
                    name="txt21"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.txt21}
                    error={
                      formik.touched.txt21 && formik.errors.txt21 ? true : false
                    }
                    helperText={
                      formik.touched.txt21 && formik.errors.txt21
                        ? formik.errors.txt21
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
    )
}
