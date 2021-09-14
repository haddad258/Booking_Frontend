import React, { Fragment, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import "./NewPassword.scss";
import { Button, Input, Alert, FormGroup } from "reactstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const url = require('../../cfg')()

const NewPassword = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  const [verify, setVerify] = useState(false);
  const [changed, setChanged] = useState(false);
  password.current = watch("password", "");
  const { token } = useParams();
  const onSubmit = (d) => {
    const data = { token: token, password: d.password };
    console.log(data);
    axios
      .post(url+"change-password", data)
      .then(() => {
        setChanged(true);
      })
      .catch(() => {
        setVerify(false);
      });
  };
  useEffect(() => {
    const data = { token: token };
    axios
      .post(url+"new-password", data)
      .then(() => {
        setVerify(true);
      })
      .catch(() => {
        setVerify(false);
      });
  }, []);
  const lien = (
    <Fragment>
      {" "}
      <br />
      <div className="two">
        le lien n'est pas valide , vérifier votre email ou cliquer sur ce button
      </div>
      <Link to="/resetpassword">
        <Button type="button" className="center" outline color="secondary">
          Récupérer votre mot de passe
        </Button>{" "}
      </Link>
    </Fragment>
  );
  const form = (
    <Fragment>
      <div>
        <div className="one">Nouveau mot de passe</div>
      </div>
      <br />

      <FormGroup>
        <Input
          type="password"
          name="password"
          innerRef={register({
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

      <Button className="center" color="primary">
        SAVE{" "}
      </Button>
    </Fragment>
  );
  const done = (
    <Fragment>
      <br />
      <div className="three">Your password changed successfully</div>
      <br />
      <br />
      <br />

      <Link to="/LandingPage">
        <Button type="button" className="center" outline color="primary">
          Login
        </Button>{" "}
      </Link>
    </Fragment>
  );
  return (
    <Fragment>
      <div className="containerNewPass">
        <div className="Logo"></div>

        <Form onSubmit={handleSubmit(onSubmit)} className="formulaire">
          <div className="Logo1"></div>
          {changed ? done : verify ? form : lien}
        </Form>
      </div>
    </Fragment>
  );
};

export default NewPassword;
