import React, { Fragment, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";

import "./Inscription.scss";
import axios from "axios";
const url = require('../../../src/cfg')()
function Inscription(props) {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const email = useRef({});
  email.current = watch("email", "");

  const [value, setValue] = useState("");
  const [pasword, setpasword] = useState("");
  const [errCnx, setErrCnx] = useState(false);
  const history = useHistory();
  const [inscrit, setInscrit] = useState(false);

  const onSubmit = (data) => {
    console.log("azhar1")
    if (value) {
      if (isValidPhoneNumber(value)) {
        let userInput = { ...data, phonePro: value };
        axios
          .post(url+"api/signup", userInput)
          .then((res) => {
            console.log(res.userInput)
            setErrCnx(false);
            setInscrit(true);
            
              history.push({
                pathname: "/LandingPage",
                email: userInput.email,
              });
           
          })
          .catch((err) => {
            console.log("azhar")
            setErrCnx(true);
          });
      }
    }
  };

  const form = (
    <Fragment>
      {errCnx ? (
        <Alert color="danger">L'adresse email existe déja!</Alert>
      ) : null}
      <FormGroup>
      <Input
          name="firstName"
          value={useLocation().firstName}
          innerRef={register({ required: "Le nom est obligatoire" })}
          placeholder="Nom"
        />
        {errors.firstName ? (
          <Alert className="Alert" color="danger">
            {errors.firstName && errors.firstName.message}
          </Alert>
        ) : null}
      </FormGroup>
      <FormGroup>
      <Input
          name="lastName"
          value={useLocation().lastName}
          innerRef={register({ required: "Le nom est obligatoire" })}
          placeholder="Prenom"
        />
        {errors.lastName ? (
          <Alert className="Alert" color="danger">
            {errors.lastName && errors.lastName.message}
          </Alert>
        ) : null}
      </FormGroup>
      <FormGroup>
      <Input
          name="email"
          value={useLocation().email}
          innerRef={register({
            required: "Email is required",
            pattern: {
              message: "invalid email address",
            },
          })}
          placeholder="Email"
        />
        {errors.email ? (
          <Alert className="Alert" color="danger">
            {errors.email && errors.email.message}
          </Alert>
        ) : null}
      </FormGroup>
      <FormGroup>
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          defaultCountry="TN"
         
          className="phone"
          name="phonePro"
        />
        {errors.phonePro ? (
          <Alert className="Alert" color="danger">
            {errors.phonePro && errors.phonePro.message}
          </Alert>
        ) : null}
        {value ? (
          isValidPhoneNumber(value) ? (
            undefined
          ) : (
            <Alert className="Alert" color="danger">
              Numéro de téléphone invalide
            </Alert>
          )
        ) : (
          <Alert className="Alert" color="warning">
            Le numéro de téléphone est obligatoire
          </Alert>
        )}
      </FormGroup>

      <FormGroup>
      <Input
          type="password"
          name="password"
          innerRef={register({ required: "Password is required" })}
          onChange={setpasword}
          placeholder="Mot de passe"
        />
        {errors.password ? (
          <Alert className="Alert" color="danger">
            {errors.password && errors.password.message}
          </Alert>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password_repeat"
          innerRef={register({
            validate: (pasword) =>
            pasword === password.current ||
              "Les mots de passe  ne correspondent pas !",
          })}
          placeholder="Confirmez votre mot de passe"
        />
        {errors.password_repeat ? (
          <Alert className="Alert" color="danger">
            {errors.password_repeat && errors.password_repeat.message}
          </Alert>
        ) : null}
        
      </FormGroup>
      <Button className="centerButton" color="success">
        Créer un compte
      </Button>
    </Fragment>
  );
  return (
    <Fragment>
      <div className="containerHome">
        <div className="headerHome">
          <div className="logo"></div>
          <div className="Right">
            <div> Vous avez déjà un compte?</div>
            <Link to="/LandingPage">
              <Button color="info">connexion</Button>
            </Link>
          </div>
        </div>

        <Form className="formulaire" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo1"> </div>
          {inscrit ? (
            <Toast style={{ width: "100%", height: "100%", margin: "auto" }}>
              <ToastHeader icon={<Spinner size="sm" />}>
                Vous êtes maintenant inscrit{" "}
              </ToastHeader>
              <ToastBody style={{ fontWeight: "bold" }}>
                Vous allez être dirigé vers la page de connexion dans 3 secondes
              </ToastBody>
            </Toast>
          ) : (
            form
          )}
        </Form>
      </div>
    </Fragment>
  );
}

export default Inscription;