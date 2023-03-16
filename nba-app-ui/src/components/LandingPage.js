import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo){
  //     history.push("/dashboard");
  //   }
  // }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="text">
            <h1 className="title">
              Welcome to NBA Tracker
            </h1>
            <p className="subtitle">One place to track your favorite NBA team</p>
            <div className="buttonContainer">
              <a href="/login"><Button size= "lg" variant="danger" className="landingButton">Log In</Button></a>
              <a href="/register"><Button size="lg" className="landingButton">Register</Button></a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
