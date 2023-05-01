import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-2/4 mx-auto mb-4">
        <form className="flex flex-col gap-4">
        <h1 className="text-white text-4xl font-bold text-center mt-1">Login</h1>
      <div>
        <div className="mb-2 block">
          <Label className="text-white text-xl" htmlFor="email1" value="Your email" />
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
          <Label className="text-white text-xl" htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" name="password" placeholder="your password" required={true} />
      </div>
      <div className="flex items-center gap-2">
    <Label htmlFor="remember" className="text-white">
      New here? <Link className="border bg-green-400 px-2 py-1 rounded hover:bg-green-600" to='/registration'>Create Account</Link>
    </Label>
  </div>
      <Button type="submit" className="bg-green-400 hover:bg-green-600">Login</Button>
    </form>
    </div>
    
  );
};

export default Login;
