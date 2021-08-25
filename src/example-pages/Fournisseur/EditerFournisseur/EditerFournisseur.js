import { PageTitle } from "layout-components";
import React, { Fragment, useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function EditerFournisseur(props) {
  const { register, handleSubmit, errors } = useForm();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [stateFournisseur, setStateFournisseur] = useState(false);
  const [fournisseurInformation, setFournisseurInformation] = useState({});
  const history = useHistory();
  useEffect(() => {
    let result = props.location.state.data;
    setFournisseurInformation(result);
    setValue1(result.mobile);
    setValue2(result.telephone);
    setValue3(result.fax);

    setFournisseurInformation(result);
  }, [props]);

  const onSubmit = (data) => {
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

    data.id_fournisseur = fournisseurInformation.id_fournisseur;
    axios
      .post("http://localhost:4200/editer-fournisseur", data)
      .then(() => {
        history.push("/Fournisseur");
      })
      .catch(() => {
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
                defaultValue={fournisseurInformation.raison_sociale}
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
                defaultValue={fournisseurInformation.matricule_fiscale}
                innerRef={register({ required: true })}
                name="matricule_fiscale"
                placeholder="Matricule Fiscale"
              />
              {stateFournisseur ? (
                <Alert style={{ padding: "2px" }} color="danger">
                  Matricule existe déja
                </Alert>
              ) : null}
              {errors.matricule_fiscale ? (
                <Alert style={{ padding: "2px" }} color="danger">
                  {errors.matricule_fiscale && <span>Champs obligatoire </span>}
                </Alert>
              ) : null}
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Site Web</Label>
              <Input
                defaultValue={fournisseurInformation.site_web}
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
                defaultValue={fournisseurInformation.name}
                innerRef={register()}
                name="name"
                placeholder="Nom et Prénom"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                defaultValue={fournisseurInformation.email}
                innerRef={register()}
                name="email"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label>Civlité</Label>
              <Input
                defaultValue={fournisseurInformation.civilité}
                innerRef={register()}
                type="select"
                name="civilité"
              >
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
                value={fournisseurInformation.value3}
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
              <Input
                defaultValue={fournisseurInformation.pays}
                name="pays"
                innerRef={register()}
                placeholder="Pays"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Région</Label>
              <Input
                defaultValue={fournisseurInformation.region}
                name="region"
                innerRef={register()}
                placeholder="Région"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Code postal</Label>
              <Input
                defaultValue={fournisseurInformation.code_postal}
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
                defaultValue={fournisseurInformation.adresse}
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

export default EditerFournisseur;
