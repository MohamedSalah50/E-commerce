import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "./accountSlice";

export default function Login() {
  return (
    <Container className="mt-5 p-5 shadow rounded">
      <h1 className="mb-5">welcome to React Store</h1>
      <SignIn />
    </Container>
  );
}

function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [inLogin, setInLogin] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      return;
    }
    dispatch(login(name, password));
  };

  return (
    <>
      <h1 className="mb-2">{inLogin ? "Login" : "Register"}</h1>
      <input
        type="text"
        placeholder="Enter your name or email"
        className="form-control mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="form-control mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        className="btn btn-primary m-2"
        value="Submit"
        onClick={handleSubmit}
      />
      <Button className="m-2" onClick={() => setInLogin(!inLogin)}>
        {inLogin ? "Don't have an account" : "Already have an account"}
      </Button>
    </>
  );
}
