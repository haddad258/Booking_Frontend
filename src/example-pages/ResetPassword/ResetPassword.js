import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import "./ResetPassword.scss";
import { Button, Input, Alert } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

const ResetPassword = () => {
  const { register, handleSubmit, errors } = useForm();
  const [emailState, setEmailState] = useState(false);
  const [emailSended, setEmailSended] = useState(false);
  const [spinnerCheck, setSpinnerCheck] = useState(false);
  const onSubmit = (data) => {
    setEmailState(false);
    setSpinnerCheck(true);
    axios
      .post("http://localhost:3002/api/resetpassword", data)
      .then(() => {
        setEmailSended(true);
        setSpinnerCheck(false);
      })
      .catch(() => {
        setSpinnerCheck(false);

        setEmailState(true);
      });
  };
  const spinner = (
    <Fragment>
      <br />
      <div className="w-50 mx-auto">
        <h3
          style={{
            margin: "auto",
            width: "max-content",
          }}
        >
          Please Wait ...
        </h3>
        <div
          style={{
            width: "max-content",
            margin: "auto",
          }}
        >
          <Spinner
            style={{
              width: "10rem",
              height: "10rem",
            }}
            color="primary"
          />
        </div>
      </div>
    </Fragment>
  );
  const send = (
    <Fragment>
      <br />
      <h3>NOUS VOUS AVONS ENVOYÉ UN LIEN</h3>
      <br />
      <br />
      <br />

      <h5>
        Veuillez vérifier votre boîte de réception et cliquez sur le lien
        sécurisé.
      </h5>
    </Fragment>
  );
  const form = (
    <Fragment>
      <div>
        <div className="one"> Commençons par trouver votre compte </div>
        <br />
        <div className="two">Saisissez votre e-mail : </div>
      </div>
      <br />
      {emailState ? (
        <Alert color="danger">L'adresse mail n'existe pas!</Alert>
      ) : null}
      <Input
        className="input"
        name="email"
        innerRef={register({
          required: "Email  is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
        placeholder="Quel est votre e-mail?"
      />
      {errors.email ? (
        <Alert className="Alert" color="danger">
          {errors.email && errors.email.message}
        </Alert>
      ) : null}
      <br />
      <br />
      <Button className="center" color="primary">
        Trouver votre compte
      </Button>
      <br />
      <Link to="/LandingPage">
        <Button className="center" outline color="secondary">
          Annuler
        </Button>
      </Link>
      <br />
      <br />
      <div className="two">
        Si vous ne recevez pas notre message, vérifiez dans les courriers
        indésirables de votre messagerie
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      <div className="containerReset">
        <div className="Logo"></div>

        <Form onSubmit={handleSubmit(onSubmit)} className="formulaire">
          <div className="Logo1"></div>
          {spinnerCheck ? spinner : emailSended ? send : form}
        </Form>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
