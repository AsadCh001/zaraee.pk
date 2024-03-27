"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleButton from 'react-google-button';
import SellerLoginPage from './SellerLoginPage';

export default function LoginForm({ isSeller, setIsSeller })
 {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const router = useRouter();

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{3,}$/i;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsValidPassword(inputPassword.length >= 8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail || !isValidPassword) {
      setError("Please enter valid email and password.");
      return;
    }

    try {
      setIsSeller(false)
      const res = await signIn("credentials", {
        email,
        password,
        isSeller,
        redirect: false,
      });
      console.log("customer")
      console.log(res)

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

    <div className="grid place-items-center mt-6">
      <div className="w-full max-w-md shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>

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
              <p className="text-red-500">
                Please enter a valid password with 8 characters.
              </p>
            )}
            <button className="w-full bg-green-600 hover:opacity-80 text-white font-bold cursor-pointer px-6 py-2 rounded-md">
              Login
            </button>
            <div className="mt-4">
              <hr className="border-t border-gray-300 mb-2" />
              
            </div>
            <GoogleButton
              className="ml-20"
              type="light"
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </GoogleButton>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
                    <button
          className={`${
            isSeller
              ? "bg-green-600 text-white"
              : "bg-white text-green-600"
          } flex-1 py-1 px-4 rounded-r-lg`}
          onClick={() => setIsSeller(true)}
        >
          Login as Seller
        </button>
          </form>
          </div>
    </div>
 
      
    </>
  );
}
