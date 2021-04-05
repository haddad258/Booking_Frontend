import React, { useEffect, useState } from "react";
import axios from 'axios';

import { ListGroup, ListGroupItem } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TablePagination } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';

// import View from "./zones_components/View";
import Add from "./buildings_components/Add";
// import Edit from "./zones_components/Edit";
// import Delete from "./zones_components/Delete";

import cfg from '../../cfg'
const zoneURL = cfg.url + "zones/list"


const Zones = (props) => {
    const {
      buildingsList,zonesList
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
    const addZone = async (Zone) => {
        
        console.log(JSON.stringify(Zone, null, 4))
        axios.post(zoneURL, Zone).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify(status, null, 4))

            })

    }
    const deleteZone = (zoneID) => {
        //alert(JSON.stringify(`Uncomment deletZone Function Content for deleting User with id ${zoneID}`, null, 4))

        axios.delete(zoneURL + `${zoneID}`).then(response => response.status)
            .then((status) => {
                console.log("Zone with Id", zoneID, " deleted")
                var element = document.getElementById(zoneID);
                element.parentNode.removeChild(element);
            })

    }

    const updateZone = async (zone, id) => {


        alert(JSON.stringify(zone))
        axios.put(zoneURL + `${id}`, zone).then(response => response.status)
            .then((status) => {
                console.log("zone with Id", id, " updated")
            })

    }

    return (

        <ListGroup>

            <ListGroupItem
                style={{borderRadius:0}}
            ><ApartmentIcon color="primary" /> Zones
            <Add target={"zones"} buildings={buildingsList} />
                <ExpandMoreIcon onClick={(e) => { setSliding(!sliding) }} style={{ position: "absolute", top: 10, right: 20, cursor: "pointer" }} /></ListGroupItem>

            {(sliding) ? <div>
                {zonesList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((b) =>

                    <ListGroupItem  style={{borderRadius:0}} id={b.id}>
                    {b.name}
                       
                    </ListGroupItem>
                )}
                <ListGroupItem style={{ justifyContent: 'flex-end', borderRadius:0 }}>

                    <TablePagination
                        component="div"
                        count={zonesList.length}
                        onChangePage={handlePageChange}
                        onChangeRowsPerPage={handleRowsPerPageChange}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, (zonesList.length / 2), zonesList.length]}
                    />
                </ListGroupItem>
            </div> : null}

        </ListGroup>

    )
}
export default Zones;


