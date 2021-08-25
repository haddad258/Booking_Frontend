import { PageTitle } from "layout-components";
import React, { Fragment, useEffect, useState } from "react";
import "./InformationFournisseur.scss";
import { Button, ButtonGroup } from "reactstrap";
const InformationFournisseur = (props) => {
  const [rSelected, setRSelected] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    const data = props.location.state.data;
    let result = {};
    let div = <div style={{ fontSize: "20px" }}>--</div>;
    Object.keys(props.location.state.data).map((key) => {
      result[key] = data[key] == null ? div : data[key];
    });
    setData(data);
  }, []);

 
  return (
    <Fragment>
      <div className="information">
        <PageTitle />
        <div className="headerInformation">
          <div className="left">
            <i
              style={{ fontSize: "30px", color: "grey" }}
              className="fas fa-building"
            ></i>

            <div className="info">
              <h4> {data.raison_sociale}</h4>
              <h6 style={{ color: "grey" }}>40100002</h6>
            </div>
          </div>
          <div className="factures">
            <div className="facture">
              <h5>FACTURE RÉGLÉES</h5>
              <h3 style={{ color: "#9DC11E" }}>
                {(data.facture_réglée)} TND
              </h3>
            </div>
            <div className="facture">
              <h5>FACTURE À RÉGLER</h5>
              <h3 style={{ color: "#ED6B4E" }}>
                {(data.facture_à_réglée)} TND
              </h3>
            </div>
            <div className="facture">
              <h5>CHIFFRE D'AFFAIRES</h5>
              <h3 style={{ color: "#7DE3F5" }}>
                {(data.chiffre_affaire)} TND
              </h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
          <ButtonGroup className="tab">
            <Button
              outline
              color="primary"
              onClick={() => setRSelected(1)}
              active={rSelected === 1}
            >
              INFORMATIONS
            </Button>
            <Button
              outline
              color="primary"
              onClick={() => setRSelected(2)}
              active={rSelected === 2}
            >
              HISTORIQUE
            </Button>
            <Button
              outline
              color="primary"
              onClick={() => setRSelected(3)}
              active={rSelected === 3}
            >
              BON DE RÉCEPTION
            </Button>
            <Button
              outline
              color="primary"
              onClick={() => setRSelected(4)}
              active={rSelected === 4}
            >
              COMMANDE
            </Button>
            <Button
              outline
              color="primary"
              onClick={() => setRSelected(5)}
              active={rSelected === 5}
            >
              FACTURE
            </Button>
          </ButtonGroup>
        </div>
        <br />

        <div className="contenu">
          <span>Information</span>

          <div className="last">
            <div className="one">
              <div className="cadre">
                <div className="title"> Raison sociale</div>
                <div className="value">{data.raison_sociale}</div>
              </div>
              <div className="cadre">
                <div className="title">Matricule fiscale</div>
                <div className="value">{data.matricule_fiscale}</div>
              </div>
              <div className="cadre">
                <div className="title">Email</div>
                <div className="value">{data.email}</div>
              </div>
              <div className="cadre">
                <div className="title">Site Web</div>
                <div className="value">{data.site_web}</div>
              </div>
            </div>
            <div className="two">
              <div className="cadre">
                <div className="title">Numéro mobile</div>
                <div className="value">{data.mobile}</div>
              </div>
              <div className="cadre">
                <div className="title">Numéro de téléphone</div>
                <div className="value">{data.telephone}</div>
              </div>
              <div className="cadre">
                <div className="title">Numéro fax</div>
                <div className="value">{data.fax}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InformationFournisseur;
