import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: "20px",
  },
}));

export default function Form2() {
  const classes = useStyles();

  const validate = (values) => {
    const errors = {};

    if (!values.txtf) {
      errors.txtf = "Required";
    } else if (values.txtf.length > 15) {
      errors.txtf = "Must be 15 characters or less";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      txtf: "",
      txt2: "",
      txt3: "",
      txt4: "",
      txt5: "",
      txt6: "",
      txt7: "",
      txt8: "",
      txt9: "",
      txtf0: "",
      txtf1: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          label="දිනය"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txtf"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.txtf}
          error={formik.touched.txtf && formik.errors.txtf ? true : false}
          helperText={
            formik.touched.txtf && formik.errors.txtf
              ? formik.errors.txtf
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
          name="txt2"
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          label="බොරළු දමා ඇති දුර මීටර්"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt3"
        />

        <TextField
          label="කොන්ක්‍රීට් කර ඇති දුඅර මීටර්"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt4"
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          label="කැට ගල් අතුරා ඇති දුර මීටර්"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt5"
        />

        <TextField
          label="මුළු දුර මීටර්"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt6"
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          label="පළල මීටර්"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt7"
        />

        <TextField
          label="පාලම්"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt8"
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          label="පෙට්ටි බෝක්කු"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt9"
        />

        <TextField
          label="කාණු කැට යෙදූ ස්ථාන"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txtf"
        />
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <TextField
          label="සපත්තු පාලම්"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt11"
        />
      </Grid>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </div>
  );
}
