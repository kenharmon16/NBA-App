import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Login.css";
import LoadingPage from "./LoadingPage";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

function Login({history}) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
        const config = {
            headers: {
                "Content-type" : "application/json"
            }
        }

        setLoading(true);

        const {data} = await axios.post("/api/users/login",
        {
            userName, password
        }, config)
        
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        setLoading(false);
        navigate("/dashboard");
    } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
    }
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Log In</h2>
        {error && <ErrorMessage/>}
        {loading && <LoadingPage/>}
        <Form className="needs-validation" onSubmit={submitHandler}>
          <Form.Group>
            <div className="form-group was-validated mb-2">
              <Form.Label>Username</Form.Label>
              <Form.Control className="invalid-feedback" />
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter your username</div>
            </div>
          </Form.Group>
          <Form.Group>
            <div className="form-group was-validated mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control className="invalid-feedback" />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter your password</div>
            </div>
          </Form.Group>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Log In
          </button>
          <a href="/register">Don't have an account?</a>
        </Form>
      </div>
    </div>
  );
}

export default Login;
