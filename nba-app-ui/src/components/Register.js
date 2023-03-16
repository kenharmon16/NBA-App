import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingPage from "./LoadingPage";
import RegisterErrorMessage from "./RegisterErrorMessage";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [picMessage, setPicMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/api/users",
        {
          userName,
          email,
          password,
          picture,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/teamselect");
    } catch (error) {
      //setError(error.response.data.message);
      setLoading(false);
    }
  };

  const postDetails = (pictures) => {
    if (!pictures) {
      return setPicMessage("Please select a profile picture");
    }
    setPicMessage(null);

    if (pictures.type === "image/jpeg" || pictures.type === "image/png") {
      const data = new FormData();
      data.append("file", pictures);
      data.append("upload_preset", "nba pics");
      data.append("cloud_name", "dy0fzbftg");
      fetch("https://api.cloudinary.com/v1_1/dy0fzbftg/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPicture(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Invalid picture type");
    }
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Register</h2>
        {loading && <LoadingPage />}
        <Form className="needs-validation" onSubmit={submitHandler}>
          <Form.Group>
            <div className="form-group was-validated mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control className="invalid-feedback" />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter your email</div>
            </div>
          </Form.Group>
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

          {picMessage && <RegisterErrorMessage />}

          <Form.Group
            controlId="formFile"
            className="mb-2"
            onChange={(e) => postDetails(e.target.files[0])}
          >
            <Form.Label>Upload Profile Picture</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Register
          </button>
          <a href="/login">Already have an account?</a>
        </Form>
      </div>
    </div>
  );
}

export default Register;
