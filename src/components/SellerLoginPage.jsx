"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";


export default function SellerLoginPage({ isSeller, setIsSeller }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const router = useRouter();
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Check if the input value is a valid email address
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{3,}$/i;
    setIsValidEmail(emailPattern.test(inputEmail));
  };
  const handlePasswordChange = (e) => {
    const inputpassword = e.target.value;
    setPassword(inputpassword);
    setIsValidPassword(password>=8);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.length>=8&&isValidEmail)
    try {
      setIsSeller(true);
      const res = await signIn("credentials", {
        email,
        password,
        isSeller,
        redirect: false,
      });

      console.log("seller")
      console.log("seller: ",res)
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
<>

    <div className="grid place-items-center mt-8 ">
    <div className="w-full max-w-md shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <h1 className="text-xl font-bold my-4">Seller Login</h1>
  
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          required
        />
        {!isValidEmail && (
          <p className="text-red-500">Please enter a valid email address.</p>
        )}
        <input
          className="border rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          required
        />
        {!isValidPassword && (
          <p className="text-red-500">Please enter a valid password with 8 characters.</p>
        )}
        <button className="w-full bg-green-600 hover:opacity-80 text-white font-bold cursor-pointer px-6 py-2 rounded-md">
          Login
        </button>
   
        <button
            className={`${
                isSeller
                ? "bg-white text-green-600"
                : "bg-white text-green-600"
            } flex-1 py-2 px-4 rounded-r-lg`}
            onClick={() => setIsSeller(false)}
            >
            Login as Customer
        </button>

      </form>


      {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
    </div>
  </div>
            
        
</>

  
  );
}
