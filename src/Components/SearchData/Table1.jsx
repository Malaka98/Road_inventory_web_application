import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableHead from "@material-ui/core/TableHead";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  col10,
  col11,
  delete_col
) {
  return {
    col1,
    col2,
    col3,
    col4,
    col5,
    col6,
    col7,
    col8,
    col9,
    col10,
    col11,
    delete_col,
  };
}

const useStyles2 = makeStyles({
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
  textField: {
    margin: "10px",
  },
});

export default function CustomPaginationActionsTable(props) {

  const rows = props.row.map((data, index) => {
    return createData(
      data.T1data1,
      data.T1data2,
      data.T1data3,
      data.T1data4,
      data.T1data5,
      data.T1data6,
      data.T1data7,
      data.T1data8,
      data.T1data9,
      data.T1data10,
      data.T1data11,
      data.t1_id
    );
  });

  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {/* **************************************************Dialog Box********************************************************* */}
      {/* ******************************************************************************************************************************************** */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead className={classes.th}>
            <TableRow>
              <TableCell className={classes.tc}>දිනය</TableCell>
              <TableCell className={classes.tc} align="left">
                තාර දමා ඇති දුර මීටර්{" "}
              </TableCell>
              <TableCell className={classes.tc} align="left">
                බොරළු දමා ඇති දුර මීටර්{" "}
              </TableCell>
              <TableCell className={classes.tc} align="left">
                කොන්ක්‍රීට් කර ඇති දුර මීටර්
              </TableCell>
              <TableCell className={classes.tc} align="left">
                කැට ගල් අතුරා ඇති දුර මීටර්
              </TableCell>
              <TableCell className={classes.tc} align="left">
                මුලු දුර මීටර්{" "}
              </TableCell>
              <TableCell className={classes.tc} align="left">
                පළල මීටර්
              </TableCell>
              <TableCell className={classes.tc} align="left">
                පාලම්
              </TableCell>
              <TableCell className={classes.tc} align="left">
                පෙට්ටි බෝක්කු
              </TableCell>
              <TableCell className={classes.tc} align="left">
                කාණු කැට යෙදූ ස්ථාන{" "}
              </TableCell>
              <TableCell className={classes.tc} align="left">
                සපත්තු පාලම්
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {row.col1}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col2}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col3}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col4}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col5}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col6}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col7}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col8}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col9}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col10}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.col11}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={12}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
