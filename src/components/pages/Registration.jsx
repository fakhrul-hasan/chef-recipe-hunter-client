import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Registration = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location.state?.state?.from?.pathname || '/';
  const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)
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
            toast.success('Registration successfull!');
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.error(error);
        })
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
      </form>
    </div>
  );
};

export default Registration;
