import Link from "next/link";
import {
  LayoutWrapper,
  LoginPanel,
  SigninContainer,
  ButtonContainer,
  SignUpContainer,
  Heading_H3,
  Paragraph,
} from "./LoggerElement";
import Input from "@/components/base/input";
import CheckboxButton from "@/components/base/checkboxButton";
import Button from "@/components/base/button";
import Logo from "@/components/base/logo";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { FeedbackWrapper } from "../register/RegisterElement";
import Succes from "@/components/feedback/success";
import Loading from "@/components/feedback/loading";
import Failure from "@/components/feedback/failure";

const Logger = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorUser, setErrorUser] = useState("");

  const { data: session } = useSession();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessageEmail("Please enter a valid email address");
      setErrorMessagePassword("Please enter a valid email address");
      return;
    } else if (!password) {
      setErrorMessageEmail("");
      setErrorMessagePassword("Please enter a valid password address");
      return;
    }
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(true);
      if (result.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/dashboard");
        }, 5000);
      } else if (result.status === 401) {
        setErrorUser("Please ensure your details are correct");
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  // const handleLoginGoogle = async () => await signIn();
  const isValidEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  if (session) {
    router.replace("/dashboard");
  } else {
    return (
      <>
        <LayoutWrapper>
          <LoginPanel>
            <Logo size={350} />
            <SigninContainer>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={isValidEmail}
                errorMessage={errorMessageEmail}
                required={true}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage={errorMessagePassword}
                required={true}
              />
              <CheckboxButton label="Keep me logged in" />
              <ButtonContainer>
                <Button
                  onClick={handleLogin}
                  bg="primary"
                  size="md"
                  btnText="Sign In"
                />
                {/* <Button
                onClick={handleLoginGoogle}
                bg="secondary"
                size="md"
                btnText="Sign In with Google"
              /> */}
              </ButtonContainer>
            </SigninContainer>
            <SignUpContainer>
              <Heading_H3>Create an account</Heading_H3>
              <Paragraph>
                Create an account to download tracks and use all our features
                such as playlists,share and pitch
              </Paragraph>
              <Link href="/register" className="login-link">
                Register now
              </Link>
            </SignUpContainer>
          </LoginPanel>
        </LayoutWrapper>
        <FeedbackWrapper>
          {loading && <Loading />}
          {success && (
            <Succes
              heading="Welcome back to Foshizi"
              message="You have successfully logged in"
              close="/"
            />
          )}
          {error && (
            <Failure
              heading="Error"
              message={
                errorUser
                  ? errorUser
                  : "Oupsss, something went wrong, try again later..."
              }
              close="/"
            />
          )}
        </FeedbackWrapper>
      </>
    );
  }
};

export default Logger;
