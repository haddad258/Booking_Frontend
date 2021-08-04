import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
} from "../../helpers/validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';
import {
  faTwitter,
  faFacebookF,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as IconPhoneFill } from "bootstrap-icons/icons/phone-fill.svg";
import { ReactComponent as IconShieldLockFill } from "bootstrap-icons/icons/shield-lock-fill.svg";

const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
    <div className="col- text-center">
     <div>
        
          <input
            name="firstName"
            type="text"
            label="First name"
            icon={IconShieldLockFill}
            component={renderFormField}
            placeholder="First Name"
            validate={[required, name]}
            required={true}
            className="mb-3"
          />
         </div>
         <div>
          <input
            name="lastName"
            type="text"
            label="Last name"
            component={renderFormField}
            placeholder="Last Name"
            validate={[required, name]}
            required={true}
            className="mb-3"
          />
        </div>
       
      <input
        name="mobileNo"
        type="text"
        
        component={renderFormGroupField}
        placeholder="addressMail"
   
       
        className="mb-3"
      />
        <div>
      <input
        name="mobileNo"
        type="number"
        label="Mobile no"
        component={renderFormGroupField}
        placeholder="Mobile no without country code"
        icon={IconPhoneFill}
        validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
        required={true}
        max="999999999999999"
        min="9999"
        className="mb-3"
      />
      </div>
      <div>
      <input
        name="password"
        type="password"
        label="Your password"
        component={renderFormGroupField}
        placeholder="******"
        icon={IconShieldLockFill}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />
      </div>
      <button
     
        type="submit"
        className="btn btn-primary btn-block mb-3"
        disabled={submitting}
      >
        Create
      </button>
      </div>
      <Link className="float-left" to="/account/signin" title="Sign In">
        Sing In
      </Link>
      <Link
        className="float-right"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className="col- text-center">
          <Link to="/" className="btn text-white bg-twitter mr-3">
          <Tooltip arrow title="Twitter">
                <Button color="default" className="text-twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </Tooltip>
          </Link>
          <Link to="/" className="btn text-white mr-3 bg-facebook">
          <Tooltip arrow title="facebook">
          <Button color="default" className="text-facebook">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                </Button>
              </Tooltip>
          </Link>
          <Link to="/" className="btn text-white mr-3 bg-google">
          <Tooltip arrow title="google">
          <Button color="default" className="text-google">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'google']} />
                  </span>
                </Button>
              </Tooltip>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signup",
  })
)(SignUpForm);
