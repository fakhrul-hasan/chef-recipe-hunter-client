import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle('Login');
  const emailRef = useRef();
  const [error, setError] = useState('');
  const { login, googleLogin, githubLogin, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        console.log(loggedUser);
        toast.success("Login successfull!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message
          .replace('Firebase: ', '')
    .replace(/\(*\.\.?/, ''));
      });
  };
  const handleGoogleSignin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('Login successfull!', {
          duration: 3000,
        })
        navigate(from, { replace: true });
      })
      .catch();
  };
  const handleGithubSignin = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('Login successfull!', {
          duration: 3000,
        })
        navigate(from, { replace: true });
      })
      .catch();
  };
  const handleReset =()=>{
    const email = emailRef.current.value;
    resetPassword(email)
    .then(()=>{
      toast('A link has been sent to your email');
    })
    .catch(error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
  }
  return (
    <div className="w-2/4 mx-auto mb-4">
      <div>
        <Toaster />
      </div>
      <form className="flex flex-col gap-4 mb-3" onSubmit={handleLogin}>
        <h1 className="text-white text-4xl font-bold text-center mt-1">
          Login
        </h1>
        <p className="text-lg text-red-800 bg-red-300">{error}</p>
        <div>
          <div className="mb-2 block">
            <Label
              className="text-white text-xl"
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="your email"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              className="text-white text-xl"
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            name="password"
            placeholder="your password"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Label htmlFor="remember" className="text-white">
            New here?{" "}
            <Link
              className="border-transparent bg-green-400 px-2 py-1 rounded hover:bg-green-600"
              state={location}
              to="/registration"
            >
              Create Account
            </Link>
          </Label>
          <Label className="text-white">
            Forgot password?{" "}
            <Link className="border-transparent bg-green-400 px-2 py-1 rounded hover:bg-green-600" onClick={handleReset}>Reset it</Link>
          </Label>
        </div>
        <Button type="submit" className="bg-green-400 hover:bg-green-600">
          Login
        </Button>
      </form>
      <button
        onClick={handleGoogleSignin}
        className="outline text-white outline-green-400 rounded py-2 hover:text-green-400 w-full mb-3"
      >
        <FaGoogle className="inline me-1" /> Continue with Google
      </button>
      <button
        onClick={handleGithubSignin}
        className="outline text-white outline-green-400 rounded py-2 mb-2 hover:text-green-400 w-full"
      >
        <FaGithub className="inline me-1" /> Continue with Github
      </button>
    </div>
  );
};

export default Login;
