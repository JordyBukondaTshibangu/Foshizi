import Link from "next/link";
import {
  LayoutWrapper,
  RegisterPanel,
  RegisterContainer,
} from "./RegisterElement";
import Input from "@/components/base/input";
import Button from "@/components/base/button";
import Logo from "@/components/base/logo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../base/store/authSlice";
import { useRouter } from "next/router";
import { Heading_H3, SignUpContainer } from "../logger/LoggerElement";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const route = useRouter();
  const dispatch = useDispatch();
  const [errorMessageEmail, setErrorMessageEamil] = useState("");
  const [errorMessageUsername, setErrorMessageUsername] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessageEamil("Please enter a valid email");
      return;
    }
    if (!username) {
      setErrorMessageUsername("Please enter a valid username");
      return;
    }
    if (!number) {
      setErrorMessagePhone("Please enter a valid phone number");
    }
    if (!password && password !== confirmPassword) {
      setErrorMessagePassword("Passwords do not match");
      return;
    } else {
      // Perform login API call here and retrieve user data
      dispatch(
        loginSuccess({
          name: username,
          email: email,
          number: number,
          password: password,
          loggedIn: true,
        })
      );
      route.push("/dashboard");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return password.length >= minLength && hasSpecialChar.test(password);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return password.length >= minLength && hasSpecialChar.test(password);
  };

  return (
    <LayoutWrapper>
      <RegisterPanel>
        <Logo size={350} />
        <RegisterContainer>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={errorMessageEmail}
          />
          <Input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            errorMessage={errorMessageUsername}
          />
          <Input
            label="Phone Number"
            type="text"
            minLength={10}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            errorMessage={errorMessagePhone}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={errorMessagePassword}
          />
          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <Button
            onClick={handleSubmit}
            btnText="Register"
            bg="primary"
            size="md"
            isBtn={true}
          />
        </RegisterContainer>
        <SignUpContainer>
          <Heading_H3>Existing account ? </Heading_H3>
          <p>Already a member ?</p>
          <Link href="/">Login now</Link>
        </SignUpContainer>
      </RegisterPanel>
    </LayoutWrapper>
  );
};

export default Register;
