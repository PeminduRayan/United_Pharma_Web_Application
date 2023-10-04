import React, { Component } from 'react';
import LoginForm from '../components/user/loginForm'; // Import the LoginForm component

class LoginPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div>
        <div className="container-fluid ps-md-0 g-0">
          <div className="row g-0">
            <LoginForm /> {/* Render the LoginForm component */}
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
