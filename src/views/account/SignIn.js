import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

class SignInView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <h4 className="text-center">Sign In</h4>
          </div>
          <div className="col-md-6 p-3">
           
            <SignInForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInView;
