import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import classes from "/src/style/Login.module.css";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />

        <Form className={classes.login}>
          <TextInput
            type="text"
            placeholder="Enter your email"
            icon="alternate_email "
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Don`t have an account? <a href="signup.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}