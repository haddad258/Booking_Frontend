import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const API_URL = 'http://localhost:3002/booking/view'
const API_URL1 = 'http://localhost:3002/forResrvation/listDispo/home'

const API_URL2 = 'http://localhost:3002/forResrvation/listDispo/transport_tools'

function CartView(props) {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [open1, setOpen1] = React.useState(false);
    const [price, setPrice] = useState([0, 4999]);
    const [total, settotal] = useState(0);
    const [puissance, setpuissance] = useState(1);
    const [number, setnumber] = useState([]);
    useEffect(() => {
  
      axios.get(API_URL).then((response)=>{
        
            setIsLoaded(true);

    setItems(response.data.content);
      })
    }, [])
    const filtered = (props) => {
    items.filter(item => {
      return item.type.toLowerCase().includes(props.toLowerCase())
    }) 
  }
  const handleChange =  (value) => {
      
    settotal(total+value)

};
const handleChanges = () => {
      
  setpuissance(puissance + 1)


};
const handleChangess = () => {
      
  setpuissance(puissance - 1)

};
  useEffect(() => {
  
    axios.get(API_URL).then((response)=>{
      
          setIsLoaded(true);

  setItems(response.data.content);
    })
  }, [])
  
    if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else {
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-grey mb-3">
          <h1 className="display-6">Shopping Cart</h1>
        </div>       
        <div className="container mb-3">
        
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width={300}>
                          Quantity
                        </th>
                        <th scope="col" width={120}>
                          Price
                        </th>
                        <th scope="col" className="text-right" width={130}></th>
                      </tr>
                    </thead>
                    {items.map((item)   => (item.imageRef != null) ?
                    <tbody>
                    
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                            <img alt="..." className="card-img-top" src={process.env.PUBLIC_URL+ item.imageRef.replace("C:\\fakepath\\", "/")} style={{width:150, height:150}}/>
                            </div>
                            <div className="col">
                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                               {item.name}
                              </Link>
                              <p className="small text-muted">
                              {item.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-dark"
                              type="button"
                              onClick={handleChangess}
                             
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input
                            id="number"
                            name="number"
                              type="text"
                              className="form-control"
                              value={puissance}
                              style={{ width: 50}}
                            />
                            
                            <button
                              className="btn btn-primary text-dark"
                              type="button"
                              onClick={handleChanges}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price"> {item.Price*puissance }</var>
                        
                        </td>
                        <td className="text-right">
                          <button className="btn btn-sm btn-outline-secondary mr-2">
                            <IconHeartFill className="i-va" />
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                                        </tr>
                                        
                   
                    </tbody>:null)}
                  </table>
                </div>
                <div className="card-footer">
                  <Link to="/checkout" className="btn btn-primary float-right">
                    Make Purchase <IconChevronRight className="i-va" />
                  </Link>
                  <Link to="/" className="btn btn-secondary">
                    <IconChevronLeft className="i-va" /> Continue shopping
                  </Link>
                </div>
              </div>
             
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="row border-bottom">
                    <dt className="col-6">Total price:</dt>
                    <dd className="col-6 text-right"> {total}</dd>            
                    
                  </dl>
                  <hr />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light border-top p-4">
          
        </div>
      </React.Fragment>
    );
  
}
}
export default CartView;