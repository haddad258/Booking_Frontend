import React, { useEffect, useState } from "react";


import { ListGroup, ListGroupItem } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TablePagination } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';


import Add from "./Add";
import Delete from "./Delete";
import Edit from "./Edit";



const List = (props) => {
    const {
        targetObject,
        target, 
        buildings,
        floors,
        zones,
        rooms
    } = props;
   
    const [sliding, setSliding] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    let obj = [ ...targetObject]

    const handlePageChange = (event, page) => {
        setPage(page);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };


    return (

        <ListGroup>

            <ListGroupItem
                style={{borderRadius:0}}
            ><ApartmentIcon color="primary" /> {target.toUpperCase()}
            {
                 (target === "rooms") ? <Add target={target} buildings={buildings}  zones={zones} floors={floors} /> : 
                 (target === "floors") ? <Add target={target} buildings={buildings}  zones={zones} /> : 
                 (target === "zones") ? <Add target={target} buildings={buildings}/> : <Add target={target} />
                 
                  
            }
                <ExpandMoreIcon onClick={(e) => { setSliding(!sliding) }} style={{ position: "absolute", top: 10, right: 20, cursor: "pointer" }} /></ListGroupItem>

            {(sliding) ? <div>
                {obj.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((b) =>

                    <ListGroupItem  style={{borderRadius:0}} id={b.id}>
                    {b.name}
                    <Edit target={target} id={b.id} />
                    <Delete target={target} id={b.id}/>
                    </ListGroupItem>
                )}
                <ListGroupItem style={{ justifyContent: 'flex-end', borderRadius:0 }}>

                    <TablePagination
                        component="div"
                        count={obj.length}
                        onChangePage={handlePageChange}
                        onChangeRowsPerPage={handleRowsPerPageChange}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, (obj.length / 2), obj.length]}
                    />
                </ListGroupItem>
            </div> : null}

        </ListGroup>

    )
}
export default List;


