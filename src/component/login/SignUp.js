import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAccountValue } from "store/movie/action";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);
  const [to, setTo] = useState("");
  const array = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : account;
  const found = array.some(el => el.email === email);
  const dispatch = useDispatch();
  const userInfo = {
    name: userName,
    email: email,
    password: password
  };
  useEffect(() => {
    dispatch(getAccountValue(account))
  }, [account])
  useEffect(() => {
    localStorage.getItem("user") && setAccount(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);
  useEffect(() => {
    if (userName && email && password && !found) {
      setTo("/Login")
    }
  }, [found, userName, email, password])
  const handleUserInfo = () => {
    if (userName && email && password) {
      account.push(userInfo);
      if (!localStorage.getItem('user') && account) {
        localStorage.setItem("user", JSON.stringify(account));
      } else if (localStorage.getItem("user") && !found && account) {
        localStorage.setItem("user", JSON.stringify(account));
      } else if (found) {
        alert("Account Already Exists")
      }
    } else {
      alert("Please fill in the required fields")
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }} className="margin fontColor rounded-3">
        <Card.Body>
          <Card.Title className="text-center mt-4">
            <span className="yellow h4"> Popcornflix</span>
          </Card.Title>
          <Form className="mt-4" >
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="userName"
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid mt-4">
              <Button as={Link} to={to} disabled="true" variant="warning" type="reset" onClick={handleUserInfo}>
                SignUp
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3 mb-2">
            <span>Already have an account?</span><Link to="/Login" className="text-warning ps-1">Login</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
