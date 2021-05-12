import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";


function createData(col0, col1, col2, col3, col4, col5, col6) {
  return { col0, col1, col2, col3, col4, col5, col6 };
}

const useStyles = makeStyles({
  root: {
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#ffffff",
    paddingTop: "20px",
  },
  heading: {
    flexGrow: 1,
    textAlign: "center",
    "font-weight": "bold",
  },
  ubtn: {
    marginLeft: "auto",
  },
  table: {
    minWidth: 500,
  },
  th: {
    backgroundColor: "#283677",
  },
  tc: {
    color: "#ffffff",
    "font-weight": "bold",
  },
});

export default function STable(props) {
  const classes = useStyles();

  const rowData = ["මුළු මාර්ග සංක්‍යාව"];
  const rowData2 = ["මුළු මාර්ග දිග මීටර"];
  const rowData3 = ["තාර දැමූ දිග මීටර "];
  const rowData4 = ["මුළු මාර්ග සංක්‍යාව"];
  const rowData5 = ["කැටගල් ඇල්ලූ දිග මීටර"];
  const rowData6 = ["බොරළු යෙදූ දිග මීටර"];
  const rowData7 = ["පාලම් සංක්‍යාව"];
  const rowData8 = ["පෙට්ටි බෝක්කු සංක්‍යාව"];
  const rowData9 = ["කානුකැට යෙදූ ස්ථාන"];
  const rowData10 = ["සපත්තු පාලම් සංක්‍යාව"];
  const rowData11 = ["ලියිට් කණු සංක්‍යාව"];
  const rowData12 = ["විථි පහන් සංක්‍යාව"];

  props.rowData.map((value, key) => {
    rowData9.push(value[0]["SUM(T1data10)"]);
    rowData10.push(value[0]["SUM(T1data11)"]);
    rowData.push(value[0]["SUM(T1data2)"]);
    rowData2.push(value[0]["SUM(T1data3)"]);
    rowData3.push(value[0]["SUM(T1data4)"]);
    rowData4.push(value[0]["SUM(T1data5)"]);
    rowData5.push(value[0]["SUM(T1data6)"]);
    rowData6.push(value[0]["SUM(T1data7)"]);
    rowData7.push(value[0]["SUM(T1data8)"]);
    rowData8.push(value[0]["SUM(T1data9)"]);
    return value;
  });

  props.rowData2.map((value, key) => {
    rowData11.push(value[0]["SUM(data7)"]);
    rowData12.push(value[0]["SUM(data8)"]);
    return value;
  });

  const rows = [
    createData(...rowData),
    createData(...rowData2),
    createData(...rowData3),
    createData(...rowData4),
    createData(...rowData5),
    createData(...rowData6),
    createData(...rowData7),
    createData(...rowData8),
    createData(...rowData9),
    createData(...rowData10),
    createData(...rowData11),
    createData(...rowData12),
  ];

  const col = ["", ...props.colData];

  return (
    <React.Fragment>
    <AppBar>
      <Toolbar>
        <Typography variant="h5" className={classes.heading}>
          මාර්ග ඉන්වෙන්ට්‍රිය - නාත්තන්ඩිය ප්‍රාදේශීය සභාව
        </Typography>
        <div className={classes.ubtn}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={"/login"}
          >
            Log In
          </Button>
        </div>
      </Toolbar>
    </AppBar>

    <Toolbar />
    {/* <Divider /> */}
    <Paper elevation={0} className={classes.root}>
      <Container maxWidth="xl">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead className={classes.th}>
          <TableRow>
            {col.map((col, key) => (
              <TableCell className={classes.tc} align="center" key={key}>
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow key={key}>
              <TableCell align="left">{row.col0}</TableCell>
              {row.col1 !== undefined ? (
                <TableCell align="center">{row.col1}</TableCell>
              ) : null}
              {row.col2 !== undefined ? (
                <TableCell align="center">{row.col2}</TableCell>
              ) : null}
              {row.col3 !== undefined ? (
                <TableCell align="center">{row.col3}</TableCell>
              ) : null}
              {row.col4 !== undefined ? (
                <TableCell align="center">{row.col4}</TableCell>
              ) : null}
              {row.col5 !== undefined ? (
                <TableCell align="center">{row.col5}</TableCell>
              ) : null}
              {row.col6 !== undefined ? (
                <TableCell align="center">{row.col6}</TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
      </Paper>
    </React.Fragment>
  );
}
