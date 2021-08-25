import React, { Fragment, useEffect, useState } from "react";
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
import { PageTitle } from "layout-components";
import CachedIcon from "@material-ui/icons/Cached";

import { Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
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
import axios from "axios";
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

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function Tableau({ rows }) {
  const filterData = (tab, value) => {
    return tab.filter((data) => {
      return data.is_archived === value;
    });
  };
  const [fournisseurs, setFournisseur] = useState([]);

  const [archives, setArchives] = useState([]);
  useEffect(() => {
    setFournisseur(filterData(rows, 0));
    setArchives(filterData(rows, 1));
  }, [rows]);

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

  const [rSelected, setRSelected] = useState(1);
  const tableArchive = (
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
              ? archives.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : archives
            ).map((row) => (
              <TableRow key={row.id_fournisseur}>
                <TableCell align="center">type</TableCell>
                <TableCell align="center">{row.id_fournisseur}</TableCell>
                <TableCell align="center">{row.raison_sociale}</TableCell>
                <TableCell align="center">{row.mobile}</TableCell>
                <TableCell align="center">{row.telephone}</TableCell>
                <TableCell
                  align="center"
                  style={{ color: "green", fontSize: "larger" }}
                >
                  {row.chiffre_affaire}
                </TableCell>
                <TableCell align="center">{row.registration_date}</TableCell>
                <TableCell align="center">
                  <Link
                    to={{
                      pathname: "/Fournisseur/editer-fournisseur",
                      state: { data: row },
                    }}
                  >
                    <EditOutlinedIcon
                      style={{
                        color: "#466FD8",
                        cursor: "pointer",
                        margin: "0 4px",
                        border: "1px solid #DCDCDC	 ",
                        padding: "1px",
                      }}
                    />
                  </Link>{" "}
                  <Link
                    to={{
                      pathname: "/Fournisseur/information",
                      state: { data: row },
                    }}
                  >
                    <VisibilityIcon
                      style={{
                        color: "#4ad1e2",
                        cursor: "pointer",
                        margin: "0 4px",
                        border: "1px solid #DCDCDC	 ",
                        padding: "1px",
                      }}
                    />
                  </Link>
                  <CachedIcon
                    style={{
                      color: "#2AC940",
                      cursor: "pointer",
                      margin: "0 4px",
                      border: "1px solid #DCDCDC	 ",
                      padding: "1px",
                    }}
                    onClick={() => {
                      unArchiveFournisseur(row.fournisseur_id);
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

  const tableFournisseur = (
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
              ? fournisseurs.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : fournisseurs
            ).map((row) => (
              <TableRow key={row.fournisseur_id}>
                <TableCell align="center">type</TableCell>
                <TableCell align="center">{row.fournisseur_id}</TableCell>
                <TableCell align="center">{row.raison_sociale}</TableCell>
                <TableCell align="center">{row.mobile}</TableCell>
                <TableCell align="center">{row.telephone}</TableCell>
                <TableCell
                  align="center"
                  style={{ color: "green", fontSize: "larger" }}
                >
                  {row.chiffre_affaire}
                </TableCell>
                <TableCell align="center">{row.registration_date}</TableCell>
                <TableCell align="center">
                  <Link
                    to={{
                      pathname: "/Fournisseur/editer-fournisseur",
                      state: { data: row },
                    }}
                  >
                    <EditOutlinedIcon
                      style={{
                        color: "#466FD8",
                        cursor: "pointer",
                        margin: "0 4px",
                        border: "1px solid #DCDCDC	 ",
                        padding: "1px",
                      }}
                    />
                  </Link>
                  <Link
                    to={{
                      pathname: "/Fournisseur/information",
                      state: { data: row },
                    }}
                  >
                    <VisibilityIcon
                      style={{
                        color: "#4ad1e2",
                        cursor: "pointer",
                        margin: "0 4px",
                        border: "1px solid #DCDCDC	 ",
                        padding: "1px",
                      }}
                    />
                  </Link>
                  <DeleteForeverIcon
                    style={{
                      color: "red",
                      cursor: "pointer",
                      margin: "0 4px",
                      border: "1px solid #DCDCDC	 ",
                      padding: "1px",
                    }}
                    onClick={() => {
                      archiveFournisseur(row.fournisseur_id);
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
  const unArchiveFournisseur = (id) => {
    rows.forEach((element) => {
      if (element.fournisseur_id === id) {
        element.is_archived = 1 - element.is_archived;

        return;
      }
    });
    setFournisseur(filterData(rows, 0));
    setArchives(filterData(rows, 1));
    axios
      .post("http://localhost:4200/archiveFournisseur", { id: id, value: 0 })
      .then((res) => {});
  };
  const archiveFournisseur = (id) => {
    rows.forEach((element) => {
      if (element.fournisseur_id === id) {
        element.is_archived = 1 - element.is_archived;

        return;
      }
    });

    setFournisseur(filterData(rows, 0));
    setArchives(filterData(rows, 1));
    axios
      .post("http://localhost:4200/archiveFournisseur", { id: id, value: 1 })
      .then((res) => {});
  };

  const findElements = (value) => {
    const data = rows;
    let searchData = [];
    data.map((el) => {
      let test = Object.values(el).reduce((prev, cur) => {
        return prev + cur;
      });
      if (test.includes(value)) {
        searchData.push(el);
      }
    });
    setFournisseur(filterData(searchData, 0));
    setArchives(filterData(searchData, 1));
  };
  return (
    <Fragment>
      <Fragment>
        <PageTitle />
        <div className="searchBar">
          <div className="search-box">
            <button type="submit" className="search-btn">
              <i className="fa fa-search"></i>
            </button>
            <input
              type="search"
              placeholder="Search here..."
              onChange={(e) => {
                findElements(e.target.value);
              }}
            />
            <Link to="/Fournisseur/ajouter-fournisseur">
              <Button className="add" color="success">
                Ajouter
              </Button>{" "}
            </Link>
          </div>
        </div>
        <br />
        <ButtonGroup>
          <Button
            outline
            color="primary"
            onClick={() => setRSelected(1)}
            active={rSelected === 1}
          >
            Fournisseurs ({fournisseurs.length})
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => setRSelected(2)}
            active={rSelected === 2}
          >
            Archives ({archives.length})
          </Button>
        </ButtonGroup>
        {rSelected === 1 ? tableFournisseur : tableArchive}
      </Fragment>
    </Fragment>
  );
}
