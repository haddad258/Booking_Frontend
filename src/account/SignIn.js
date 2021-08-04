import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

class SignInView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div >
        
          
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={this.onSubmit} />
          </div>
       
    );
  }
}

export default SignInView;
