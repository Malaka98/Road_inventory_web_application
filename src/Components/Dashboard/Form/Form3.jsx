import React from "react";
import { Grid, InputLabel, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: "20px",
  },
}));

export default function Form3() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6">නඩත්තු සටහන්</Typography>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <InputLabel id="demo-simple-select-label">
          ගැසට් පත්‍රයේ දිනය
        </InputLabel>
        <TextField
          id="date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <TextField
          id="outlined-margin-dense"
          label="සවිකළ උපකරණ / සිදු කල අලුත්වැඩියාව / කරණ ලද වැඩි දියුණු කිරීම / ප්‍රතිසංස්කරණය"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt2"
          fullWidth
          multiline
          rows={3}
        />
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <TextField
          id="outlined-margin-dense"
          label="වියදම"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          size="small"
          name="txt2"
          rows={3}
        />
      </Grid>
    </div>
  );
}
