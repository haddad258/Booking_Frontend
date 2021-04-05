import React, { useEffect, useState } from "react";
import axios from 'axios';

import { ListGroup, ListGroupItem } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TablePagination } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';

// import View from "./buildings_components/View";
import Add from "./buildings_components/Add";
// import Edit from "./buildings_components/Edit";
// import Delete from "./buildings_components/Delete";

import cfg from '../../cfg'
const buildingURL = cfg.url + "buildings/list"


const Buildings = (props) => {
    const {
        buildingsList, zonesList, floorsList, roomsList,
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
    const addBuilding = async (Building) => {
        
        console.log(JSON.stringify(Building, null, 4))
        axios.post(buildingURL, Building).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify(status, null, 4))

            })

    }
    const deleteBuilding = (buildingID) => {
        //alert(JSON.stringify(`Uncomment deletBuilding Function Content for deleting User with id ${buildingID}`, null, 4))

        axios.delete(buildingURL + `${buildingID}`).then(response => response.status)
            .then((status) => {
                console.log("Building with Id", buildingID, " deleted")
                var element = document.getElementById(buildingID);
                element.parentNode.removeChild(element);
            })

    }

    const updateBuilding = async (Builiding, id) => {


        alert(JSON.stringify(Builiding))
        axios.put(buildingURL + `${id}`, Builiding).then(response => response.status)
            .then((status) => {
                console.log("Builiding with Id", id, " updated")
            })

    }

    return (

        <ListGroup>

            <ListGroupItem
                style={{borderRadius:0}}
            ><ApartmentIcon color="primary" /> Buildings
            <Add target={"buildings"} />
                <ExpandMoreIcon onClick={(e) => { setSliding(!sliding) }} style={{ position: "absolute", top: 10, right: 20, cursor: "pointer" }} /></ListGroupItem>

            {(sliding) ? <div>
                {buildingsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((b) =>

                    <ListGroupItem  style={{borderRadius:0}} id={b.id}>
                    {b.name}
                       
                    </ListGroupItem>
                )}
                <ListGroupItem style={{ justifyContent: 'flex-end', borderRadius:0 }}>

                    <TablePagination
                        component="div"
                        count={buildingsList.length}
                        onChangePage={handlePageChange}
                        onChangeRowsPerPage={handleRowsPerPageChange}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, (buildingsList.length / 2), buildingsList.length]}
                    />
                </ListGroupItem>
            </div> : null}

        </ListGroup>

    )
}
export default Buildings;


