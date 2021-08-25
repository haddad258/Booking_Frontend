import Tableau from "example-components/Client-Fournisseur/Tableau/Tableau";
import React, { Fragment, useEffect, useState } from "react";
import "./Fournisseur.scss";
import axios from "axios";

function Fournisseur() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFournisseur = async () => {
      await axios.get("http://localhost:4200/getFournisseurs").then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    };
    getFournisseur();
  }, []);

  return (
    <Fragment>
      <Tableau rows={data}></Tableau>
    </Fragment>
  );
}

export default Fournisseur;
