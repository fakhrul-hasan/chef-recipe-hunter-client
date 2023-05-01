import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegistration=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
  return (
    <div className="w-2/4 mx-auto">
      <form className="flex flex-col gap-4" onSubmit={handleRegistration}>
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
      </form>
    </div>
  );
};

export default Registration;
