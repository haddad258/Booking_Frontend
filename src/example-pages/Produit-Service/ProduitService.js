import { PageTitle } from "layout-components";
import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function ProduitService(props) {
  return (
    <div>
      <PageTitle pathTitle="Produit et Service" />
      <div className="searchBar">
        <div className="search-box">
          <button type="submit" className="search-btn">
            <i className="fa fa-search"></i>
          </button>
          <input
            type="search"
            placeholder="Search here..."
         
          />
          <Link to="/Produit-Service/ajouter">
            <Button className="add" color="success">
              Ajouter
            </Button>{" "}
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

export default ProduitService;
