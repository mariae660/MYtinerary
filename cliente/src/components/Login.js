import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";
import { login } from "../actions/authActions.js";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      msg: null
    };
  }
  static propTypes = {
    isAuth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    Login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const { Email, Password } = this.state;
    const user = { Email, Password };
    this.props.login(user);
    setTimeout(() => {
      this.props.history.push("/");
    }, 300);
  };
  sign() {
    window.location.href = "http://localhost:5000/api/auth/google";
  }
  render() {
    return (
      <Container className="App mt-5">
        {this.state.msg ? (
          <Alert className="mb-3 mt-3 ml-2 text-center" color="danger">
            {this.state.msg}
          </Alert>
        ) : null}
        <h2 className="text-center">Log In</h2>

        <Form onSubmit={this.onSubmit} className="form ml-3">
          <Col>
            <FormGroup className=" mr-2 w-100">
              <Label>Email</Label>
              <Input
                type="email"
                name="Email"
                id="Email"
                placeholder="myemail@email.com"
                onChange={this.onChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="w-100">
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="Password"
                id="Password"
                placeholder="**"
                onChange={this.onChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <FormGroup className="ml-5">
            <Button className="ml-5 w-50 btn-danger">Submit</Button>
            <Button
              onClick={this.sign.bind(this)}
              className="ml-5 mt-5 w-50 btn-danger"
            >
              Google
            </Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  error: state.errorReducer
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);
