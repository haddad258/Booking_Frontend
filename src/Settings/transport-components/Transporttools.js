
import React, { Fragment ,useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios"

import {
  Avatar,
  IconButton,
  Box,
  Checkbox,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import Addtransport from './Addtransport'

const API_URL = 'http://localhost:3002/forResrvation/list/transport_tools'
  
export default function MyCompcaronent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
   
 
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
  
      axios.get(API_URL).then((response)=>{
        
            setIsLoaded(true);

    setItems(response.data.content);
      })
    }, [])
    const deletecar = (id) => {
      alert("delete")
      axios.delete('http://localhost:3002/forResrvation/delete/transport_tools/'+`${id}`).then(response => response.status)
      .then((status) => {
          alert("status : " + status)
        //  var element = document.getElementById(id);
        //  element.parentNode.removeChild(element);
      }).catch(err => alert("status : " + err))
    }
    const addcar = (id) => {
      alert("delete")
      axios.delete('/forResrvation/delete/transport_tools/'+`${id}`).then(response => response.status)
      .then((status) => {
          alert("status : " + status)
        //  var element = document.getElementById(id);
        //  element.parentNode.removeChild(element);
      }).catch(err => alert("status : " + err))
    }
    
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        //     <ul>
        //   {items.map(item => (
        //     <li key={item.matricule}>
        //       {item.st} 
        //     </li>
        //   ))}
        // </ul> 
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">list of cars</div>
        </div>
        <CardContent > 
          
        
        <CardContent className="p-4">
        
          <div className="table-responsive">
            <table className="table table-borderless table-hover text-nowrap mb-0">
            <thead className="thead-light">
                <tr>
                  <th style={{ width: '20%' }}>cars</th>
                  <th className="text-center">brand</th>
                  <th className="text-center">color</th>
                  <th className="text-center">matricule</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">price</th>
                  <th style={{ width: '10%' }}>action</th>
                </tr>
              </thead>

              {items.map(item   =>  (item.imageRef != null) ? 
          
              
              <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                  
                  <img  alt="..." src={process.env.PUBLIC_URL+ item.imageRef.replace("C:\\fakepath\\", "/")} style={{width:150, height:150}} className="p-3" />
               
                   <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        {item.description}
                      </a>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                <div className="font-weight-bold text-black">
                  {item.brand}
                  </div>
                </td>
                <td className="text-center">
                <div className="font-weight-bold text-black">
                  {item.color}
                  </div>
                </td>
                <td className="text-center">
                <div className="font-weight-bold text-black">
                {item.matricule}
                  </div>
                </td>
                <td className="text-center">
                  <div className="h-auto py-0 px-3 badge badge-warning">
                  {item.status}
                  </div>
                </td>
                <td className="text-center">
                <div className="font-weight-bold text-black">
                  {item.price}
                  </div>
                </td>
                <td>
                <div className="card-footer d-flex justify-content-between">
                <FontAwesomeIcon
                icon={['far', 'edit']}
                className="font-size-l"
                style={{color:"gray" , cursor : "pointer"}}
                
              />  
              <FontAwesomeIcon
                icon={['far', 'trash-alt']}
                className="font-size-l"
                style={{color:"gray" , cursor : "pointer"}}
                onClick={() => { deletecar(item.id) }}
              />    
          </div>
                </td>
              </tr>
              </tbody> : null
              )}
            </table>
          </div>
        </CardContent>
        </CardContent>
       
          <div>
            
            
             
              <Addtransport />
            
          
        </div>
      </Card>
    
        





      );
    }
  }