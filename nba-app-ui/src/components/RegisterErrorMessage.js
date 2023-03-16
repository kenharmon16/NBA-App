import Alert from "react-bootstrap/Alert";

function RegisterErrorMessage() {
  return (
    <div style={{textAlign: "center"}}>
      <Alert variant="danger">
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>
          Invalid picture type!
        </p>
      </Alert>
    </div>
  );
};

export default RegisterErrorMessage;
