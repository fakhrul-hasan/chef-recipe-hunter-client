import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const Registration = () => {
  const [error, setError] = useState('');
    const {createUser, googleLogin, githubLogin} = useContext(AuthContext)
    const handleRegistration=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('');
        if(password.length < 6){
          return setError('Password should be at least 6 character or more');
        }
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            form.reset();
            console.log(user);
            toast.success('Registration successfull!')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleGoogleSignin=()=>{
      googleLogin()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch()
    }
    const handleGithubSignin=()=>{
      githubLogin()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch()
    }
  return (
    <div className="w-2/4 mx-auto">
      <form className="flex flex-col gap-2" onSubmit={handleRegistration}>
        <h1 className="text-white text-4xl font-bold text-center mt-1">Registration</h1>
        <div>
          <div className="mb-2 block">
            <Label
              className="text-white text-xl"
              htmlFor="name"
              value="Your name"
            />
          </div>
          <TextInput
            type="text"
            name="name"
            placeholder="your name"
            required={true}
          />
        </div>
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
          <p className="text-blue-300">{error}</p>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              className="text-white text-xl"
              htmlFor="photo"
              value="Photo URL"
            />
          </div>
          <TextInput
            type="text"
            name="photo"
            placeholder="your photo URL"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="remember" className="text-white">
            Already have an account?{" "}
            <Link to='/login' className="border bg-green-400 px-2 py-1 rounded hover:bg-green-600">
              Login
            </Link>
          </Label>
        </div>
        <Button type="submit" className="bg-green-400 hover:bg-green-600">
          Sign Up
        </Button>
        <div><Toaster/></div>
        <button onClick={handleGoogleSignin} className="outline text-white outline-green-400 rounded py-2 hover:text-green-400"><FaGoogle className="inline me-1"/> Continue with Google</button>
        <button onClick={handleGithubSignin} className="outline text-white outline-green-400 rounded py-2 mb-2 hover:text-green-400"><FaGithub className="inline me-1"/> Continue with Github</button>
      </form>
    </div>
  );
};

export default Registration;
