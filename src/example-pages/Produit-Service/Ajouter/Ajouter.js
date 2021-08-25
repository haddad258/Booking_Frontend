import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import SettingsIcon from "@material-ui/icons/Settings";

import { PageTitle } from "layout-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Ajouter.scss";
import {
  Col,
  Row,
  FormGroup,
  Alert,
  Label,
  Input,
  Button,
  Form,
} from "reactstrap";
import { useForm } from "react-hook-form";

function Ajouter() {
  const { register, handleSubmit, errors } = useForm();
  const [categories, setCategories] = useState(["Catégorie générale"]);
  const [displayService, setDisplayService] = useState(true);
  const displayNone = {
    display: "none",
  };

  const ajouterCategorie = () => {};
  const setPrice = (inputValue) => {
    let selectedTVA = document.getElementById("selectedTVA").value;
    let ttc = document.getElementById("one1");
    let ht = document.getElementById("two1");

    if ((ttc.checked && selectedTVA == 0) || (ht.checked && selectedTVA == 0)) {
      document.getElementById("ttc").innerText = inputValue;
      document.getElementById("ht").innerText = inputValue;
      return;
    }
    if (ttc.checked) {
      document.getElementById("ttc").innerText = inputValue;
      document.getElementById("ht").innerText = (
        inputValue *
        (1 - selectedTVA / 100)
      ).toFixed(3);
      return;
    } else {
      document.getElementById("ht").innerText = inputValue;
      document.getElementById("ttc").innerText = (
        inputValue *
        (1 + selectedTVA / 100)
      ).toFixed(3);
      return;
    }
  };
  const checkButton = (value) => {
    document.getElementById(value).checked = true;
  };
  useEffect(() => {
    if (displayService) {
      checkButton("two");
    } else {
      checkButton("one");
    }
  }, [displayService]);
  const onSubmit = (data) => {
    console.log("data");

    console.log(data);
  };

  return (
    <div>
      <PageTitle />
      <h2>Informations</h2> <br />
      <br />
      <h6>Type du client :</h6>
      <div className="flex">
        <div>
          <div
            style={{ display: "flex", margin: "auto", width: "max-content" }}
          >
            <div
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => {
                setDisplayService(false);
              }}
            >
              <input
                type="radio"
                value="Matériel"
                name="radios"
                checked={"Matériel"}
                id="one"
                onChange={(e) => {}}
              />{" "}
              <SettingsIcon /> Matériel
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDisplayService(true);
              }}
            >
              <input
                type="radio"
                value="Service"
                name="radios"
                checked={"Service"}
                onChange={(e) => {}}
                id="two"
              />{" "}
              <AssignmentTurnedInIcon /> Service
            </div>
          </div>
          <br /> <br />
        </div>
      </div>
      <Form id="matériel" onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Libellé</Label>
              <Input
                innerRef={register({
                  required: "Ce champ est obligatoire",
                })}
                name="libellé"
                placeholder="Libellé"
              />
              {errors.name ? (
                <Alert className="Alert" color="danger">
                  {errors.libellé && errors.libellé.message}
                </Alert>
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Catégorie</Label>
              <Input
                type="select"
                innerRef={register()}
                name="catégorie"
                placeholder="catégorie"
              >
                {" "}
                {categories.map((el, i) => {
                  return <option key={i}>{el}</option>;
                })}
                <option onClick={ajouterCategorie} className="addButton">
                  Ajouter
                </option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Référence Interne</Label>
              <Input
                innerRef={register({
                  required: "Ce champ est obligatoire",
                })}
                name="référence"
                placeholder="Référence Interne"
              />
            </FormGroup>
          </Col>
          <Col md={4} style={displayService ? displayNone : null}>
            <FormGroup>
              <Label>Code à barre</Label>
              <Input
                innerRef={register()}
                name="code"
                placeholder="Code à barre"
              />
            </FormGroup>
          </Col>
          <Col md={4} style={displayService ? displayNone : null}>
            <FormGroup>
              <Label>Marque générale</Label>
              <Input
                type="select"
                innerRef={register()}
                name="marque"
                placeholder="Marque Générale"
              >
                {" "}
                {categories.map((el, i) => {
                  return <option key={i}>{el}</option>;
                })}
                <option onClick={ajouterCategorie} className="addButton">
                  Ajouter
                </option>
              </Input>
           
            </FormGroup>
          </Col>
          <Col md={4} style={displayService ? displayNone : null}>
            <FormGroup>
              <Label>Référence du constructeur</Label>
              <Input
                innerRef={register()}
                name="référence_cons"
                placeholder="Référence du constructeur"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Description</Label>
              <Input innerRef={register()} type="textarea" name="description" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Description</Label>
              <div className="imageUpload">
                <Input innerRef={register()} type="file" name="description" />
              </div>
            </FormGroup>
          </Col>
        </Row>
        <br />
        <h3>Prix de vente</h3>
        <div className="adresse">
          <Col md={4}>
            <FormGroup>
              <Label>Prix public</Label>
              <Input
                min="0"
                defaultValue="0"
                name="prix"
                id="prix"
                innerRef={register()}
                placeholder="Prix"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <div className="flex">
                <div>
                  <div
                    style={{
                      display: "flex",
                      margin: "auto",
                      width: "max-content",
                    }}
                  >
                    <div
                      style={{ marginRight: "10px", cursor: "pointer" }}
                      onClick={() => {
                        checkButton("one1");

                        setPrice(document.getElementById("prix").value);
                      }}
                    >
                      <input
                        type="radio"
                        value="TTC"
                        name="radioos"
                        checked={"TTC"}
                        id="one1"
                        onClick={() =>
                          setPrice(document.getElementById("prix").value)
                        }
                        onChange={(e) => {}}
                      />{" "}
                      TTC
                    </div>

                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        checkButton("two1");
                        setPrice(document.getElementById("prix").value);
                      }}
                    >
                      <input
                        type="radio"
                        value="HT"
                        name="radioos"
                        checked={"HT"}
                        onChange={(e) => {}}
                        onClick={() =>
                          setPrice(document.getElementById("prix").value)
                        }
                        id="two1"
                      />{" "}
                      HT
                    </div>
                  </div>
                  <br /> <br />
                </div>
              </div>
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <div className="res">
                Résultat
                <br />
                <span id="ht">0</span>,000 TND HT
                <br />
                <span style={{ color: "blue" }}>
                  {" "}
                  <span id="ttc">0</span>,000 TND TTC
                </span>
              </div>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Unité</Label>
              <Input innerRef={register()} type="select" name="civilité">
                <option name="Pièce">Pièce</option>
                <option name="Mètre Carré">Mètre Carré</option>
                <option name="kilogramme">kilogramme</option>
                <option name="Mètre">Mètre</option>
                <option name="Jour">Jour</option>
                <option name="Heure">Heure</option>
                <option name="kilomètre">kilomètre</option>
                <option name="Mois">Mois</option>
                <option name="Année">Année</option>
                <option name="Quarter">Quarter</option>
              </Input>
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Taxe appliquée</Label>
              <Input
                innerRef={register()}
                type="select"
                placeholder="Taxes"
                name="taxe"
              >
                <option name="FODEC">FODEC</option>
              </Input>
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>TVA</Label>
              <Input
                innerRef={register()}
                type="select"
                id="selectedTVA"
                onChange={() => setPrice(document.getElementById("prix").value)}
                name="TVA"
              >
                <option>0</option>
                <option>7</option>
                <option>13</option>
                <option>19</option>
              </Input>
            </FormGroup>
          </Col>
        </div>
        <Button color="primary">Enregistrer</Button>
      </Form>
    </div>
  );
}

export default Ajouter;
