import { PageTitle } from "layout-components";
import React, { Fragment, useState } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Alert,
  Label,
  Input,
  Button,
} from "reactstrap";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "./AjouterFournisseur.scss";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function AjouterFournisseur(props) {
  const { register, handleSubmit, errors } = useForm();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [stateFournisseur, setStateFournisseur] = useState(false);
  const history = useHistory();

  const onSubmit = async (data) => {
  
    if (value1) {
      if (!isValidPhoneNumber(value1)) return;
      data = { ...data, mobile: value1 };
    }
    if (value2) {
      if (!isValidPhoneNumber(value2)) return;

      data = { ...data, telephone: value2 };
    }
    if (value3) {
      if (!isValidPhoneNumber(value3)) return;

      data = { ...data, fax: value3 };
    }

   

    await axios
      .post("http://localhost:4200/ajouter-fournisseur", data)
      .then((res) => {
        history.push("/Fournisseur");
      })
      .catch((err) => {
        setStateFournisseur(true);
      });
  };
  return (
    <Fragment>
      <PageTitle />
      <h2>Information</h2> <br />
      <br />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Raison Sociale</Label>
              <Input
                innerRef={register()}
                name="raison_sociale"
                placeholder="Raison Sociale"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Matricule Fiscale (Identifiant Unique)</Label>
              <Input
                innerRef={register({ required: true })}
                name="matricule_fiscale"
                placeholder="Matricule Fiscale"
              />
              {stateFournisseur ? (
                <Alert style={{ padding: "2px" }} color="danger">
                  Matricule existe déja
                </Alert>
              ) : null}
              {errors.matriculeFiscal ? (
                <Alert style={{ padding: "2px" }} color="danger">
                  {errors.matriculeFiscal && <span>Champs obligatoire </span>}
                </Alert>
              ) : null}
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Site Web</Label>
              <Input
                innerRef={register()}
                name="site_web"
                placeholder="Site Web"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Nom et Prénom</Label>
              <Input
                innerRef={register()}
                name="name"
                placeholder="Nom et Prénom"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Email</Label>
              <Input innerRef={register()} name="email" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label>Civlité</Label>
              <Input innerRef={register()} type="select" name="civilité">
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
                name="code_postal"
                innerRef={register()}
                placeholder="Code postal"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Type</Label>
              <Input innerRef={register()} type="select" name="type">
                <option>Adresse de Facturation</option>
                <option>Adresse de Livraison</option>
              </Input>
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
        <div className="buttons">
          <Link to="/Fournisseur">
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

export default AjouterFournisseur;
