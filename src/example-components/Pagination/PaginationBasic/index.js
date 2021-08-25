import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  Paper,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useTheme } from "@material-ui/core/styles";

import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
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

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7, 5),
  createData("Cupcake", 305, 3.7, 5),
];
const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function LivePreviewExample() {
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
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                TYPE
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                RÉFÉRENCE
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                NOM
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                N° PORTABLE{" "}
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                TÉLÉPHONE{" "}
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                CHIFFRE D'AFFAIRES{" "}
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                DATE CRÉATION{" "}
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "#7A91A8", fontSize: "16px" }}
              >
                ACTION{" "}
              </TableCell>
            </TableRow>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell
                  align="center"
                  style={{ color: "green", fontSize: "larger" }}
                >
                  0.000
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">
                  <EditOutlinedIcon
                    style={{
                      color: "#466FD8",
                      cursor: "pointer",
                      margin: "0 4px",
                      border: "1px solid #DCDCDC	 ",
                      padding: "1px",
                    }}
                  />
                  <VisibilityIcon
                    style={{
                      color: "#4ad1e2",
                      cursor: "pointer",
                      margin: "0 4px",
                      border: "1px solid #DCDCDC	 ",
                      padding: "1px",
                    }}
                  />
                  <DeleteForeverIcon
                    style={{
                      color: "red",
                      cursor: "pointer",
                      margin: "0 4px",
                      border: "1px solid #DCDCDC	 ",
                      padding: "1px",
                    }}
                  />
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
                colSpan={8}
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
    </Fragment>
  );
}
