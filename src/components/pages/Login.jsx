import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const {login} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(result=>{
      const loggedUser = result.user;
      form.reset();
      console.log(loggedUser);
      toast.success('Login successfull!');
      navigate(from,{replace: true});
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <div className="w-2/4 mx-auto mb-4">
      <div><Toaster/></div>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
