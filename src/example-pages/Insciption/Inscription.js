import React, { Fragment, useRef, useState } from "react";
import { useHistory } from "react-router";

import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";

import "./Inscription.scss";
import axios from "axios";
function Inscription(props) {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const email = useRef({});
  email.current = watch("email", "");

  const [value, setValue] = useState("");
  const [errCnx, setErrCnx] = useState(false);
  const history = useHistory();
  const [inscrit, setInscrit] = useState(false);

  const onSubmit = (data) => {
    if (value) {
      if (isValidPhoneNumber(value)) {
        let userInput = { ...data, phone: value };
        axios
          .post("http://localhost:4200/api/signup", userInput)
          .then((res) => {
            setErrCnx(false);
            setInscrit(true);
            setTimeout(() => {
              history.push({
                pathname: "/LandingPage",
                email: userInput.email,
              });
            }, 3000);
          })
          .catch((err) => {
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
          type="text"
          name="name"
          ref={register({ required: "Le nom est obligatoire" })}
          placeholder="Nom"
        />
        {errors.name ? (
          <Alert className="Alert" color="danger">
            {errors.name && errors.name.message}
          </Alert>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="lastname"
          ref={register({ required: "Le prenom est obligatoire" })}
          placeholder="Prenom"
        />
        {errors.lastname ? (
          <Alert className="Alert" color="danger">
            {errors.lastname && errors.lastname.message}
          </Alert>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Input
          name="email"
          innerRef={register({
            required: "L 'adresse mail est obligatoire",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Adresse mail non valide",
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
        <Input
          name="email_repeat"
          innerRef={register({
            validate: (value) =>
              value === email.current ||
              "Les adresses email ne correspondent pas ! ",
          })}
          placeholder="Confirmez votre adresse mail"
        />
        {errors.email_repeat ? (
          <Alert className="Alert" color="danger">
            {errors.email_repeat && errors.email_repeat.message}
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
          name="phone"
        />
        {errors.phone ? (
          <Alert className="Alert" color="danger">
            {errors.phone && errors.phone.message}
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
          ref={register({
            required: "Le mot de passe est obligatoire",
          })}
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
            validate: (value) =>
              value === password.current ||
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
