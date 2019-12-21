import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";
import { register } from "../actions/authActions.js";
import { Link } from "react-router-dom";
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

class CreateAcc extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Country: "",
      msg: null,
      ProfilePic: "http://cons.pe/img/avatar/generic-avatar.png",
      checkBox: false
    };
  }
  static propTypes = {
    isAuth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  checkBoolean() {
    if (this.state.checkBox === false) {
      this.setState({ checkBox: true });
    } else this.setState({ checkBox: false });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangePic(e) {
    if (e.target.validity.valid === true && e.target.value.length !== 0) {
      this.setState({ [e.target.name]: e.target.value });
    } else if (
      e.target.validity.valid === false &&
      e.target.value.length !== 0
    ) {
      this.setState({
        [e.target.name]: "http://cons.pe/img/avatar/generic-avatar.png"
      });
    }
  }
  onSubmit = e => {
    e.preventDefault();
    const {
      FirstName,
      LastName,
      Email,
      Password,
      ProfilePic,
      Country
    } = this.state;

    if (this.state.checkBox === true) {
      const newUser = {
        FirstName,
        LastName,
        Email,
        Password,
        ProfilePic,
        Country
      };

      this.props.register(newUser);
      this.props.clearErrors();
      setTimeout(() => {
        this.props.history.push("/");
      }, 300);
    } else {
      this.setState({ msg: "Accept our Terms and Conditions!" });
    }
  };

  render() {
    return (
      <Container className="App mt-5">
        <h2 className="text-center">Create Account</h2>
        <Col>
          <img
            src={this.state.ProfilePic}
            alt="ProfilePic"
            className="rounded-circle border border-dark w-25 h-25 d-block mx-auto"
          />
        </Col>
        <Col>
          {this.state.msg ? (
            <Alert className="mb-3 mt-3 ml-2 text-center" color="danger">
              {this.state.msg}
            </Alert>
          ) : null}
        </Col>
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
          <Col>
            <FormGroup className=" mr-2 w-100">
              <Label>First Name</Label>
              <Input
                type="text"
                name="FirstName"
                id="FirstName"
                placeholder="First Name"
                onChange={this.onChange.bind(this)}
              />
            </FormGroup>
            <FormGroup className=" mr-2 w-100">
              <Label>Last Name</Label>
              <Input
                type="text"
                name="LastName"
                id="LastName"
                placeholder="Last Name"
                onChange={this.onChange.bind(this)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Profile Picture</Label>
              <Input
                type="url"
                name="ProfilePic"
                id="ProfilePic"
                placeholder="Image URL"
                onChange={this.onChangePic.bind(this)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Country</Label>
              <Input
                type="select"
                placeholder="Select a Country"
                name="Country"
                id="Country"
                onChange={this.onChange.bind(this)}
              >
                <option>Select a Country...</option>
                <option>England</option>
                <option>France</option>
                <option>Germany</option>
                <option>Holland</option>
                <option>Ireland</option>
                <option>Spain</option>
                <option>Venezuela</option>
                <option>United States</option>
              </Input>
            </FormGroup>
            <Label className="ml-4 mb-3" check>
              <Input type="checkbox" onChange={this.checkBoolean.bind(this)} />I
              agree to MYtinerary's <Link to="#">Terms and Conditions</Link>
            </Label>
          </Col>
          <FormGroup className="ml-5">
            <Button className="ml-5 w-50 btn-danger">Submit</Button>
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
  { register, clearErrors }
)(CreateAcc);
