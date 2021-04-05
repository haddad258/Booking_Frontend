import React, { useEffect, useState } from "react";
import axios from 'axios';

import { ListGroup, ListGroupItem } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TablePagination } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';

// import View from "./rooms_components/View";
import Add from "./buildings_components/Add";
// import Edit from "./rooms_components/Edit";
// import Delete from "./rooms_components/Delete";

import cfg from '../../cfg'
const roomURL = cfg.url + "rooms/list"


const Rooms = (props) => {
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
    const addRoom = async (Room) => {
        
        console.log(JSON.stringify(Room, null, 4))
        axios.post(roomURL, Room).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify(status, null, 4))

            })

    }
    const deleteRoom = (roomID) => {
        //alert(JSON.stringify(`Uncomment deletRoom Function Content for deleting User with id ${roomID}`, null, 4))

        axios.delete(roomURL + `${roomID}`).then(response => response.status)
            .then((status) => {
                console.log("Room with Id", roomID, " deleted")
                var element = document.getElementById(roomID);
                element.parentNode.removeChild(element);
            })

    }

    const updateRoom = async (room, id) => {


        alert(JSON.stringify(room))
        axios.put(roomURL + `${id}`, room).then(response => response.status)
            .then((status) => {
                console.log("room with Id", id, " updated")
            })

    }

    return (

        <ListGroup>

            <ListGroupItem
                style={{borderRadius:0}}
            ><ApartmentIcon color="primary" /> Rooms
            <Add target={"rooms"} buildings={buildingsList} zones={zonesList} floors={floorsList}/>
                <ExpandMoreIcon onClick={(e) => { setSliding(!sliding) }} style={{ position: "absolute", top: 10, right: 20, cursor: "pointer" }} /></ListGroupItem>

            {(sliding) ? <div>
                {roomsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((b) =>

                    <ListGroupItem  style={{borderRadius:0}} id={b.id}>
                    {b.name}
                       
                    </ListGroupItem>
                )}
                <ListGroupItem style={{ justifyContent: 'flex-end', borderRadius:0 }}>

                    <TablePagination
                        component="div"
                        count={roomsList.length}
                        onChangePage={handlePageChange}
                        onChangeRowsPerPage={handleRowsPerPageChange}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, (roomsList.length / 2), roomsList.length]}
                    />
                </ListGroupItem>
            </div> : null}

        </ListGroup>

    )
}
export default Rooms;


