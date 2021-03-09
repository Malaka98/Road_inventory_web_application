import React, { useRef, useState } from "react";
import RouteGard from "../../../RouteGard";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import axios from "axios";
import pic from './empty.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#4461C1",
    height: "100%",
    padding: "20px",

  },
  con: {
    //backgroundColor: "white",
    padding: "10px",
  },
  heding: {
    textAlign: "center",
    color: "white",
  },
  form: {
    marginTop: "20px",
  },
  paper: {
    padding: "20px",
  },
  textField: {
    margin: "20px",
  },
  formControl: {
    margin: "20px",
  },
  errmsg: {
    color: "#d50000",
  },

}));

function ComplexGrid() {
  const classes = useStyles();
  const fileInput = useRef(null);

  const [picUrl, setpicUrl] = useState(pic)
  

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
    } else if (values.txt7.length > 20) {
      errors.txt7 = "Must be 20 characters or less";
    }

    if (!values.txt8) {
      errors.txt8 = "Required";
    } else if (values.txt8.length > 20) {
      errors.txt8 = "Must be 20 characters or less";
    }

    if (!values.select) {
      errors.select = "Required";
    } else if (values.select.length > 20) {
      errors.select = "Must be 20 characters or less";
    }

    if (fileInput.current.files.length === 0) {
      errors.file = "Please insert Image";
    } else if (fileInput.current.files[0].type !== "image/png") {
      errors.file = "not valid";
      console.log(fileInput.current);
    } else if (fileInput.current.files[0].size > 3000000) {
      errors.file = "full";
    }

    if (!values.txt9) {
      errors.txt9 = "Required";
    } else if (values.txt9.length > 15) {
      errors.txt9 = "Must be 15 characters or less";
    }

    if (!values.txt10) {
      errors.txt10 = "Required";
    } else if (values.txt10.length > 15) {
      errors.txt10 = "Must be 15 characters or less";
    }

    if (!values.txt11) {
      errors.txt11 = "Required";
    } else if (values.txt11.length > 15) {
      errors.txt11 = "Must be 15 characters or less";
    }

    if (!values.txt12) {
      errors.txt12 = "Required";
    } else if (values.txt12.length > 15) {
      errors.txt12 = "Must be 15 characters or less";
    }

    if (!values.txt13) {
      errors.txt13 = "Required";
    } else if (values.txt13.length > 15) {
      errors.txt13 = "Must be 15 characters or less";
    }

    if (!values.txt14) {
      errors.txt14 = "Required";
    } else if (values.txt14.length > 15) {
      errors.txt14 = "Must be 15 characters or less";
    }

    if (!values.txt15) {
      errors.txt15 = "Required";
    } else if (values.txt15.length > 15) {
      errors.txt15 = "Must be 15 characters or less";
    }

    if (!values.txt16) {
      errors.txt16 = "Required";
    } else if (values.txt16.length > 15) {
      errors.txt16 = "Must be 15 characters or less";
    }

    if (!values.txt17) {
      errors.txt17 = "Required";
    } else if (values.txt17.length > 15) {
      errors.txt17 = "Must be 15 characters or less";
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
      txt1: "",
      txt2: "",
      txt3: "",
      txt4: "",
      txt5: "",
      txt6: "",
      txt7: "",
      txt8: "",
      select: "",
      file: "",
      otxt1: "",
      otxt2: "",

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
      date: "",
      txt20: "",
      txt21: "",
    },
    validate,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      //console.log(values)
      const formdata = new FormData();
      formdata.append("img", fileInput.current.files[0]);
      formdata.append("txt1", values.txt1);
      formdata.append("txt2", values.txt2);
      formdata.append("txt3", values.txt3);
      formdata.append("txt4", values.txt4);
      formdata.append("txt5", values.txt5);
      formdata.append("txt6", values.txt6);
      formdata.append("txt7", values.txt7);
      formdata.append("txt8", values.txt8);
      
      formdata.append("txt9", values.txt9);
      formdata.append("txt10", values.txt10);
      formdata.append("txt11", values.txt11);
      formdata.append("txt12", values.txt12);
      formdata.append("txt13", values.txt13);
      formdata.append("txt14", values.txt14);
      formdata.append("txt15", values.txt15);
      formdata.append("txt16", values.txt16);
      formdata.append("txt17", values.txt17);
      formdata.append("txt18", values.txt18);
      formdata.append("txt19", values.txt19);

      formdata.append("txt20", values.txt20);
      formdata.append("txt21", values.txt21);
      formdata.append("txt22", values.select);
      formdata.append("txt23", values.date);
      formdata.append("txt24", values.txt24);
      formdata.append("txt25", values.otxt1);
      formdata.append("txt26", values.otxt2);

      axios({
        method: "post",
        url: "http://localhost:4000/upload",
        data: formdata,
        headers: {
          "content-type": "multipart/form-data",
        },
        // onUploadProgress: (ProgressEvent) => {
        //   const { loaded, total } = ProgressEvent;
        //   let percent = Math.floor((loaded * 100) / total);
        //   setup(percent);
        //   console.log(`${loaded}kb of ${total} | ${percent}%`);
        // },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      
    },
  });
  const matches = useMediaQuery('(min-width:770px)');
  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.con}>
        <Typography
          variant="h4"
          gutterBottom
          className={classes.heding}
          component="div"
        >
          <Box fontWeight="fontWeightBold">
            මාර්ග ඉන්වෙන්ට්‍රිය - නාත්තන්ඩිය ප්‍රාදේශීය සභාව
          </Box>
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} className={classes.form}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={10}>
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
                      defaultValue="2017-05-24"
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
                    <div></div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper} elevation={10}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                 <img src={picUrl} className={classes.pic} style={{maxWidth: matches?"400px":"200px", maxHeight:  matches?"400px":"200px", marginBottom: "20px"}}/>
                  
                    <input
                      type="file"
                      name="file"
                      onChange={(e)=>{
                        
                        formik.handleChange(e)
                        // setpicUrl(e.target.files[0])
                        let reader = new FileReader();

                        reader.onloadend = () => {
                          setpicUrl(reader.result );
                          console.log(reader.result )
                        };
                  
                        reader.readAsDataURL(e.target.files[0]);
                      
                      }}
                      onBlur={formik.handleBlur}
                      ref={fileInput}
                    />
                    {formik.errors.file && formik.touched.file ? (
                      <div style={{ color: "red" }}>{formik.errors.file}</div>
                    ) : null}
                </Grid>
              </Paper>
            </Grid>

            {/* ****************************************************************************************** */}

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={10}>
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
                    error={
                      formik.touched.txt9 && formik.errors.txt9 ? true : false
                    }
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
                  justify="flex-start"
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
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Paper>
            </Grid>
            {/* ************************************************************************************************ */}
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={10}>
                <Typography variant="h6">නඩත්තු සටහන්</Typography>
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
              </Paper>
            </Grid>
            {/* ************************************************************************************************** */}
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default RouteGard(ComplexGrid);
