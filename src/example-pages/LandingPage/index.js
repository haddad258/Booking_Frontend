import React, { Fragment, useState } from "react";
import Cookies from "js-cookie";

import { Button, Form, FormGroup, Input, Alert, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
const url = require('../../cfg')()
function LandingPage() {
  const history = useHistory();
  const [errCnx, setErrCnx] = useState(false);
  const [spinnerCheck, setSpinnerCheck] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setSpinnerCheck(true);
    setErrCnx(false);
    axios
      .post(url+"api/signin", data)
      .then((res) => {
        console.log(res.data);
        setSpinnerCheck(false);
        Cookies.set("token", res.data);

        history.push("/Acceuil");
      })
      .catch(() => {
        setSpinnerCheck(false);

        setErrCnx(true);
      });
  };
  const responseGoogle = (response) => {
    setSpinnerCheck(true);

    axios
      .post(url+"api/google", response.profileObj)
      .then((res) => {
        setSpinnerCheck(false);
        Cookies.set("token", res.data);

        history.push("/Acceuil");
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
  const form = (
    <Fragment>
      {errCnx ? (
        <Alert color="danger">
          Nom d'utilisateur ou mot de passe incorrect!
        </Alert>
      ) : null}

      <div className="connexion">Connexion</div>

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
        <Input
          type="password"
          name="password"
          innerRef={register({ required: "Password is required" })}
          placeholder="Mot de passe"
        />
        {errors.password ? (
          <Alert className="Alert" color="danger">
            {errors.password && errors.password.message}
          </Alert>
        ) : null}
      </FormGroup>
      <Link className="mdp" to="resetpassword">
        {" "}
        Mot de passe oublié ?
      </Link>

      <br />
      <Button className="centerButton" type="submit" color="primary">
        Login
      </Button>

      <div className="centerButton google">
        <GoogleLogin
          className="centerButton google"
          clientId="184629361303-pq6lg63254594aejv4q3am5tc07pcrju.apps.googleusercontent.com"
          buttonText="Continuer avec Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {" "}
      <div className="containerHome">
        <div className="headerHome">
          <div className="logo"></div>
          <div className="Right">
            <div> Vous n'avez pas de compte ?</div>
            <Link to="/inscription">
              <Button color="info">créer un compte</Button>
            </Link>
          </div>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)} className="formulaire">
          <div className="logo1"></div>
          {spinnerCheck ? spinner : form}
        </Form>
      </div>
    </Fragment>
  );
}

export default LandingPage;
