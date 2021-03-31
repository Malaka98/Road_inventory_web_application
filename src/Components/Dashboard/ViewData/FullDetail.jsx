import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useLocation } from "react-router";

import Table1 from "../Table/Table1";
import Table2 from "../Table/Table2";
import Button from "@material-ui/core/Button";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import AddNewDialogBox from "./AddNewDialogBox";
import AddNewDialogBox2 from "./AddNewDialogBox2";
import ImageUpload from "./ImageUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#4461C1",
    overflow: "auto",
    height: "100vh",
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
  paper: {
    padding: "20px",
  },
  divider: {
    padding: "10px",
  },
  h6: {
    margin: "20px",
  },
}));

function ViewDoc() {
  // const [Tdata, setTdata] = useState([{}]);
  // const [T1data, setT1data] = useState([{}]);
  // const [T2data, setT2data] = useState([{}]);
  const [Data, setData] = useState({
    Tdata: [{}],
    T1data: [{}],
    T2data: [{}],
  });
  const [load, setload] = useState(false);

  const [handleClickOpen, sethandleClickOpen] = useState(false);
  const [id, setid] = useState();

  const [handleClickOpen2, sethandleClickOpen2] = useState(false);
  const [id2, setid2] = useState();

  const classes = useStyles();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  //console.log(query.get("id"));

  useEffect(() => {
    genarate();
  }, []);

  async function genarate() {
    try {
      const formdata = new FormData();
      formdata.append("id", query.get("id"));
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/getfulldetail",
        data: formdata,
        // withCredentials: true,
      });
      // console.log(response);

      // setTdata(response.data.document);

      //   if (response.data.table1.length) {
      //     setT1data(response.data.table1);
      //   } else {
      //     setT1data([{}]);
      //   }

      //   if (response.data.table2.length) {
      //     setT2data(response.data.table2);
      //   } else {
      //     setT2data([{}]);
      //   }

      setData({
        Tdata: response.data.document,
        T1data: response.data.table1,
        T2data: response.data.table2,
      });

      setload(true);
    } catch (error) {
      console.error(error);
    }
  }

  // const matches = useMediaQuery("(min-width:770px)");
  return (
    <div className={classes.root}>
      {handleClickOpen ? (
        <AddNewDialogBox
          handleOpen={handleClickOpen}
          id={id}
          callBack={(data) => {
            sethandleClickOpen(data);
          }}
          callBack2={() => {
            genarate();
          }}
        />
      ) : (
        ""
      )}
      {handleClickOpen2 ? (
        <AddNewDialogBox2
          handleOpen={handleClickOpen2}
          id={id2}
          callBack={(data) => {
            sethandleClickOpen2(data);
          }}
          callBack2={() => {
            genarate();
          }}
        />
      ) : (
        ""
      )}

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

        <Grid>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              spacing={3}
              style={{ marginBottom: "20px" }}
            >
              <Grid item xs={12} lg={8}>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        ගම/නගරය : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data1}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        මාර්ගයේ නම : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data2}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        පටන් ගන්නා ස්ථානය : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data3}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        අවසන් වන ස්ථානය : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data4}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        ග්‍රාම නිලධාරී වසම : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data5}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        මන්ත්‍රී කොට්ටාසය : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data6}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        විදුලි කණු ගණන : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data7}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        විදුලි පහන් ගණන : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data8}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        ගැසට් කර ඇත්නම් ගැසට් පත්‍රයේ අංකය හා දිනය : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {`${Data.Tdata[0].data10} - ${Data.Tdata[0].data11}`}
                      </Typography>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={3}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        නාම පුවරුවක් යොදා තිබේද? : -
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.h6}
                      >
                        {Data.Tdata[0].data9}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4}>
                <ImageUpload />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginBottom: "20px", backgroundColor: "#62C95E" }}
                onClick={() => {
                  sethandleClickOpen(true);
                  setid(query.get("id"));
                }}
              >
                ADD NEW
              </Button>
            </Grid>

            {load ? (
              <Table1
                row={Data.T1data}
                onDelete={(data) => {
                  genarate();
                }}
              />
            ) : (
              <div>Loading...</div>
            )}

            <Divider className={classes.divider} />
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginBottom: "20px", backgroundColor: "#62C95E" }}
                onClick={() => {
                  sethandleClickOpen2(true);
                  setid2(query.get("id"));
                }}
              >
                ADD NEW
              </Button>
            </Grid>

            {load ? (
              <Table2
                row={Data.T2data}
                onDelete={(data) => {
                  genarate();
                }}
              />
            ) : (
              <div>Loading...</div>
            )}

            <Divider className={classes.divider} />
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default ViewDoc;
