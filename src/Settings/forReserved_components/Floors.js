import React, { useEffect, useState } from "react";
import axios from 'axios';

import { ListGroup, ListGroupItem } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TablePagination } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';

// import View from "./floors_components/View";
import Add from "./buildings_components/Add";
// import Edit from "./floors_components/Edit";
// import Delete from "./floors_components/Delete";

import cfg from '../../cfg'
const floorURL = cfg.url + "floors/list"


const Floors = (props) => {
    const {
      buildingsList,  zonesList, floorsList, roomsList,
    } = props;

    const [sliding, setSliding] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);


    const handlePageChange = (event, page) => {
        setPage(page);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    const addFloor = async (Floor) => {
        
        console.log(JSON.stringify(Floor, null, 4))
        axios.post(floorURL, Floor).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify(status, null, 4))

            })

    }
    const deleteFloor = (floorID) => {
        //alert(JSON.stringify(`Uncomment deletFloor Function Content for deleting User with id ${floorID}`, null, 4))

        axios.delete(floorURL + `${floorID}`).then(response => response.status)
            .then((status) => {
                console.log("Floor with Id", floorID, " deleted")
                var element = document.getElementById(floorID);
                element.parentNode.removeChild(element);
            })

    }

    const updateFloor = async (floor, id) => {


        alert(JSON.stringify(floor))
        axios.put(floorURL + `${id}`, floor).then(response => response.status)
            .then((status) => {
                console.log("floor with Id", id, " updated")
            })

    }

    return (

        <ListGroup>

            <ListGroupItem
                style={{borderRadius:0}}
            ><ApartmentIcon color="primary" /> Floors
            <Add target={"floors"} buildings={buildingsList} zones={zonesList} />
                <ExpandMoreIcon onClick={(e) => { setSliding(!sliding) }} style={{ position: "absolute", top: 10, right: 20, cursor: "pointer" }} /></ListGroupItem>

            {(sliding) ? <div>
                {floorsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((b) =>

                    <ListGroupItem  style={{borderRadius:0}} id={b.id}>
                    {b.description}
                       
                    </ListGroupItem>
                )}
                <ListGroupItem style={{ justifyContent: 'flex-end', borderRadius:0 }}>

                    <TablePagination
                        component="div"
                        count={floorsList.length}
                        onChangePage={handlePageChange}
                        onChangeRowsPerPage={handleRowsPerPageChange}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, (floorsList.length / 2), floorsList.length]}
                    />
                </ListGroupItem>
            </div> : null}

        </ListGroup>

    )
}
export default Floors;


