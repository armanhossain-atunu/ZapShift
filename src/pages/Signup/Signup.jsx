import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {Signup}=useForm()
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:w-1/2 ">
        <img src="https://i.ibb.co/vCrsrLgr/auth-Image.png" alt="" />
      </div>
      <form className="lg:w-1/2 max-w-md p-8 border rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center">SingUp</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...Signup('email')}/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
