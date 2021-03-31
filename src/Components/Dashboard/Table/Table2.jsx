import React, { useState } from "react";
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
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import DialogBox2 from "./DialogBox2";

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

function createData(col1, col2, col3, delete_col) {
  return { col1, col2, col3, delete_col };
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
});

export default function CustomPaginationActionsTable(props) {
  const [handleClickOpen, sethandleClickOpen] = useState(false);
  const [id, setid] = useState({});

  const rows = props.row.map((data, index) => {
    return createData(data.T2data3, data.T2data2, data.T2data1, data.t2_id);
  });

  //console.log(rows);
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

  function deleteDoc(id) {
    const formdata = new FormData();
    formdata.append("id", id);
    axios({
      method: "post",
      url: "http://localhost:4000/deletetable2",
      data: formdata,
      withCredentials: true,
    })
      .then(function (response) {
        //handle success
        console.log(response);
        props.onDelete(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <div>
      {/* **************************************************Dialog Box********************************************************* */}
      {handleClickOpen ? (
        <DialogBox2
          handleOpen={handleClickOpen}
          id={id}
          callBack={(data) => {
            sethandleClickOpen(data);
            props.onDelete(data);
          }}
        />
      ) : (
        ""
      )}
      {/* ******************************************************************************************************************************************** */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead className={classes.th}>
            <TableRow>
              <TableCell className={classes.tc} align="left">
                දිනය
              </TableCell>
              <TableCell className={classes.tc} align="center">
                සවිකළ උපකරණ / සිදු කල අලුත්වැඩියාව කරන ලද වැඩි දියුණු කිරීම /
                ප්‍රතිසංස්කරණය
              </TableCell>
              <TableCell className={classes.tc} align="center">
                වියදම
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, key) => (
              <TableRow key={key}>
                <TableCell align="left">{row.col1}</TableCell>
                <TableCell align="center">{row.col3}</TableCell>
                <TableCell align="center">{row.col2}</TableCell>
                {row.delete_col ? (
                  <>
                    <TableCell style={{ width: 20 }} align="center">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          deleteDoc(row.delete_col);
                        }}
                      >
                        <DeleteIcon style={{ color: "#fc0303" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell style={{ width: 20 }} align="center">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          sethandleClickOpen(true);
                          setid(row);
                        }}
                      >
                        <EditIcon style={{ color: "#34989D" }} />
                      </IconButton>
                    </TableCell>
                  </>
                ) : (
                  <td></td>
                )}
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
