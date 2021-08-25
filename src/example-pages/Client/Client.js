import React, { Fragment, useEffect, useState } from "react";
import "./Client.scss";
import axios from "axios";
import TableauClient from "./TableauClient/TableauClient";

function Client(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFournisseur = async () => {
      await axios.get("http://localhost:4200/getClients").then((res) => {
        setData(res.data);
        console.log(res.data)
      });
    };
    getFournisseur();
  }, []);

  return (
    <Fragment>

<TableauClient rows={data}></TableauClient>

    </Fragment>
  );
}

export default Client;
