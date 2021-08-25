import { PageTitle } from "layout-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import React, { Fragment, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import {
  Col,
  Row,
  FormGroup,
  Alert,
  Label,
  Form,
  Input,
  Button,
} from "reactstrap";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "../AjouterClient/AjoutClient.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function EditerClient() {
  const { register, handleSubmit, errors } = useForm();
  const { register: register2, handleSubmit: handleSubmit2, errors: errors2 } = useForm();

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [clientStatus, setClientStatus] = useState(false);
  const history =useHistory();
  const onSubmit  = async (data) => {
    console.log(data);

    let contact = {
      pays: data.pays,
      postal: data.postal,
      region: data.region,
      adresse: data.adresse,
      type: data.type,
    };
    if (value1) {
      if (!isValidPhoneNumber(value1)) return;
      contact = { ...contact, mobile: value1 };
    }
    if (value2) {
      if (!isValidPhoneNumber(value2)) return;

      contact = { ...contact, telephone: value2 };
    }
    if (value3) {
      if (!isValidPhoneNumber(value3)) return;

      contact = { ...contact, fax: value3 };
    }

    delete data.pays;
    delete data.postal;
    delete data.region;
    delete data.adresse;
    delete data.type;
    Object.keys(contact).map((key) => {
      if (!contact[key]) {
        delete contact[key];
      }
    });
    Object.keys(data).map((key) => {
      if (!data[key]) delete data[key];
    });
    data = { client: data, contact };
    

    await axios
      .post("http://localhost:4200/ajouter-client", data)
      .then((res) => {
        history.push("/Client");
      })
      .catch((err) => {
        setClientStatus(true);
        window.scroll(0,0)
      });
  };

  function disp() {
    var x = document.getElementById("particulier");
    var y = document.getElementById("professionnel");
    y.style.display = "none";
    x.style.display = "block";
  }

  function dispP() {
    var x = document.getElementById("particulier");
    var y = document.getElementById("professionnel");
    x.style.display = "none";
    y.style.display = "block";
  }

  return (
    <Fragment>
      <PageTitle />
      <h2>Informations</h2> <br />
      <br />
      <h6>Type du client :</h6>
      <div className="flex">
        <div>
          <input
            type="radio"
            value="Particulier"
            name="radios"
            onClick={disp}
            checked={"Particulier"}
            onChange={(e) => {}}
          />{" "}
          <PersonIcon /> Particulier
        </div>
        <div>
          <input
            type="radio"
            value="Professionnel"
            name="radios"
            onClick={dispP}
            checked={"Professionnel"}
            onChange={(e) => {}}
          />{" "}
          <AccountBalanceIcon /> Professionnel
        </div>
      </div>
      <br /> <br />
      <form id="particulier" onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Nom et Prénom</Label>
              <Input
                innerRef={register({required: "Ce champ est obligatoire"})}
                name="Nom"
                placeholder="Nom et Prénom"
              />
              {errors.Nom ? (
          <Alert className="Alert" color="danger">
            {errors.Nom && errors.Nom.message}
          </Alert>
        ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Email</Label>
              <Input innerRef={register(
                {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "adresse email invalide",
                  },
                }
              )} name="Email" placeholder="Email" />
              {errors.Email ? (
          <Alert className="Alert" color="danger">
            {errors.Email && errors.Email.message}
          </Alert>
        ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Identifiant Unique</Label>
              <Input
                innerRef={register()}
                name="Identifiant"
                placeholder="Identifiant Unique"
              />
              {clientStatus ?  <Alert > matricule existe déja </Alert>  : null}
           
            </FormGroup>
          </Col>

          <Col md={1}>
            <FormGroup>
              <Label>Civlité</Label>
              <Input innerRef={register()} type="select" name="Civilite">
                <option name="M">M</option>
                <option name="Mme">Mme</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <br />
        <h3>Contact</h3>
        <div className="contact">
          <Col md={4}>
            <FormGroup>
              <Label>Numéro mobile</Label>

              <PhoneInput
                value={value1}
                onChange={setValue1}
                defaultCountry="TN"
                className="phone"
                name="phone"
              />
              {value1 ? (
                isValidPhoneNumber(value1) ? (
                  undefined
                ) : (
                  <Alert className="Alert" color="danger">
                    Numéro de téléphone invalide
                  </Alert>
                )
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Numéro de téléphone</Label>

              <PhoneInput
                value={value2}
                onChange={setValue2}
                defaultCountry="TN"
                className="phone"
                name="phone"
              />
              {value2 ? (
                isValidPhoneNumber(value2) ? (
                  undefined
                ) : (
                  <Alert className="Alert" color="danger">
                    Numéro de téléphone invalide
                  </Alert>
                )
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Numéro Fax</Label>

              <PhoneInput
                value={value3}
                onChange={setValue3}
                defaultCountry="TN"
                className="phone"
                name="phone"
              />
              {value3 ? (
                isValidPhoneNumber(value3) ? (
                  undefined
                ) : (
                  <Alert className="Alert" color="danger">
                    Numéro de téléphone invalide
                  </Alert>
                )
              ) : null}
            </FormGroup>
          </Col>
        </div>
        <br />
        <h3>Adresse</h3>
        <div className="adresse">
          <Col md={4}>
            <FormGroup>
              <Label>Pays</Label>
              <Input name="pays" innerRef={register()} placeholder="Pays" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Région</Label>
              <Input name="region" innerRef={register()} placeholder="Région" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Code postal</Label>
              <Input
                name="postal"
                innerRef={register()}
                placeholder="Code postal"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Adresse</Label>
              <Input
                innerRef={register()}
                type="textarea"
                name="adresse"
                id="exampleText"
              />
            </FormGroup>
          </Col>
        </div>
        <br />
        <h3>Informations Complémentaires</h3>
        <div className="infos">
          <Col md={4}>
            <FormGroup>
              <Label>Encours autorisé</Label>
              <Input
                name="Encours"
                innerRef={register()}
                placeholder="encours"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Grille Tarifaire</Label>
              <Input
                name="Grille"
                innerRef={register()}
                placeholder="Grille tarifaire"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Délais de payement</Label>
              <div className="flex1">
                <Input
                  type="select"
                  style={{ width: "80px", padding: "0px" }}
                  name="select"
                  innerRef={register()}
                >
                  <option>jour</option>
                  <option>mois</option>
                  <option>année</option>
                </Input>
                <Input
                  name="Delais"
                  min="0"
                  type="number"
                  innerRef={register()}
                  placeholder="Délais de payement"
                />
              </div>
            </FormGroup>
          </Col>
        </div>

        <br />
        <div className="buttons">
          <Link to="/Client">
            <Button outline color="secondary">
              Annuler
            </Button>
          </Link>
          <Button color="primary">Enregistrer</Button>
        </div>
      </form>
      <Form id="professionnel" onSubmit={handleSubmit2(onSubmit)}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Raison Sociale</Label>
              <Input
                innerRef={register2({
                  required:"Ce champ est obligatoire"
                })}
                name="Raison"
                placeholder="Raison Sociale"
              />
              {errors2.Raison ? (
          <Alert className="Alert" color="danger">
            {errors2.Raison && errors2.Raison.message}
          </Alert>
        ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Matricule Fiscale (Identifiant Unique)</Label>
              <Input
                innerRef={register2()}
                name="Identifiant"
                placeholder="Matricule Fiscale"
              />
                            {clientStatus ?  <Alert > matricule existe déja </Alert>  : null}

            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Site Web</Label>
              <Input
                innerRef={register2()}
                name="Site"
                placeholder="Site Web"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Nom et Prénom</Label>
              <Input
                innerRef={register2()}
                name="Nom"
                placeholder="Nom et Prénom"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Email</Label>
              <Input innerRef={register2({
                required: "Ce champ est obligatoire",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "adresse email invalide",
                },
              }
            )
              } name="Email" placeholder="Email" />
              {errors2.Email ? (
          <Alert className="Alert" color="danger">
            {errors2.Email && errors2.Email.message}
          </Alert>
        ) : null}
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label>Civlité</Label>
              <Input innerRef={register2()} type="select" name="Civilite">
                <option name="M">M</option>
                <option name="Mme">Mme</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <br />
        <h3>Contact</h3>
        <div className="contact">
          <Col md={4}>
            <FormGroup>
              <Label>Numéro mobile</Label>

              <PhoneInput
                value={value1}
                onChange={setValue1}
                defaultCountry="TN"
                className="phone"
                name="phone"
              />
              {value1 ? (
                isValidPhoneNumber(value1) ? (
                  undefined
                ) : (
                  <Alert className="Alert" color="danger">
                    Numéro de téléphone invalide
                  </Alert>
                )
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Numéro de téléphone</Label>

              <PhoneInput
                value={value2}
                onChange={setValue2}
                defaultCountry="TN"
                className="phone"
                name="phone"
              />
              {value2 ? (
                isValidPhoneNumber(value2) ? (
                  undefined
                ) : (
                  <Alert className="Alert" color="danger">
                    Numéro de téléphone invalide
                  </Alert>
                )
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Numéro Fax</Label>

              <PhoneInput
                value={value3}
                onChange={setValue3}
                defaultCountry="TN"
                className="phone"
                name="phone"
              />
              {value3 ? (
                isValidPhoneNumber(value3) ? (
                  undefined
                ) : (
                  <Alert className="Alert" color="danger">
                    Numéro de téléphone invalide
                  </Alert>
                )
              ) : null}
            </FormGroup>
          </Col>
        </div>

        <br />
        <h3>Adresse</h3>
        <div className="adresse">
          <Col md={4}>
            <FormGroup>
              <Label>Pays</Label>
              <Input name="pays" innerRef={register2()} placeholder="Pays" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Région</Label>
              <Input
                name="region"
                innerRef={register2()}
                placeholder="Région"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Code postal</Label>
              <Input
                name="postal"
                innerRef={register2()}
                placeholder="Code postal"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Adresse</Label>
              <Input
                innerRef={register2()}
                type="textarea"
                name="adresse"
                id="exampleText"
              />
            </FormGroup>
          </Col>
        </div>

        <br />
        <h3>Informations Complémentaires</h3>
        <div className="infos">
          <Col md={4}>
            <FormGroup>
              <Label>Encours autorisé</Label>
              <Input
                name="Encours"
                innerRef={register2()}
                placeholder="Encours autorisé"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Grille Tarifaire</Label>
              <Input
                name="Grille"
                innerRef={register2()}
                placeholder="Grille tarifaire"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Délais de payement</Label>
              <div className="flex1">
                <Input
                  innerRef={register2()}
                  type="select"
                  style={{ width: "80px", padding: "0px" }}
                  name="select"
                  id="exampleSelect"
                >
                  <option>jour</option>
                  <option>mois</option>
                  <option>année</option>
                </Input>
                <Input
                  name="Delais"
                  min="0"
                  type="number"
                  innerRef={register2()}
                  placeholder="Délais de payement"
                />
              </div>
            </FormGroup>
          </Col>
        </div>

        <br />
        <div className="buttons">
          <Link to="/Client">
            <Button outline color="secondary">
              Annuler
            </Button>
          </Link>
          <Button color="primary">Enregistrer</Button>
        </div>
      </Form>
    </Fragment>
  );
}
