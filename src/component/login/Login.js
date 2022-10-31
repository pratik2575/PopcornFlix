import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [to, setTo] = useState("");
  const { account } = useSelector((state) => state.movie);
  const data = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : account;
  const index = data.findIndex((info) => info.email === email);
  const array = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : account;
  const found = array.some(el => el.email === email);
  useEffect(() => {
    if (email !== "" && password !== "" && found) {
      if (data[index].email === email && data[index].password === password) {
        setTo("/homePage");
      }
    }
  }, [email, password])
  const handleLogin = () => {
    if (email && password) {
      if (!found) {
        alert("Account does not exist")
      } else if (data[index].email === email && data[index].password === password) {
        console.log("Login successfully");
      } else {
        alert("Enter valid email and password.");
      }
    }else{
      alert("Please fill in the required fields")
    }
  };
  return (
    <div>
      <Card style={{ width: "18rem" }} className="margin fontColor rounded-3">
        <Card.Body>
          <Card.Title className="text-center mt-4">
            <span className="yellow"> Popcornflix</span>
          </Card.Title>
          <Form className="mt-4">
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
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid mb-3">
              <Button
                as={Link}
                to={to}
                disabled="true"
                variant="warning"
                type="reset"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
            <div className="text-center">
              <span>Don't have an account?</span><Link to="/" className="text-warning ps-1">signUp</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
