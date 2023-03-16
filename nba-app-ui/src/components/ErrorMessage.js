import Alert from "react-bootstrap/Alert";

function ErrorMessage() {
  return (
    <div style={{textAlign: "center"}}>
      <Alert variant="danger">
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>
          Invalid username or password!
        </p>
      </Alert>
    </div>
  );
};

export default ErrorMessage;
