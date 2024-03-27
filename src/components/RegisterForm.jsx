"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPhoneNo, setIsValidPhoneNo] = useState(true);

  const router = useRouter();

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsValidPassword(inputPassword.length >= 8);
  };

  const handlePhoneNoChange = (e) => {
    const inputPhoneNo = e.target.value;
    
    setPhoneNo(inputPhoneNo);
      setIsValidPhoneNo(inputPhoneNo.length == 11);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phoneNo) {
      setError("All fields are necessary.");
      return;
    }

    if (!isValidEmail || !isValidPassword) {
      setError("Please enter a valid Email/Password.");
      return;
    }

    if (phoneNo.length !== 11) {
      setError("Phone number must be 11 digits.");
      return;
    }

    try {
      // Make an API request to generate OTP and send it to email
      const response = await fetch("/api/generateOTP", {
        method: "POST",
        body: JSON.stringify({
          email,
          isSeller,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // OTP generation successful, extract response data if needed

        console.log(isSeller);
        localStorage.setItem("registrationData", JSON.stringify({
          email,
          name,
          password,
          phoneNo,
          isSeller,
        }));

        router.push("/verify");
      } else {
        const responseData = await response.json(); // Parse the response as JSON
       console.log("Error:", responseData.message);
        setError(responseData.message);
        
      }
    } catch (error) {
      console.log("Error during OTP generation: ", error);
    }
  };

  return (
    <div className="grid place-items-center mt-7">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <div className="flex">
        <button
            className={`${
              !isSeller
                ? "bg-green-600 text-white"
                : "bg-white text-green-600"
            } flex-1 py-2 px-4 rounded-l-lg`}
            onClick={() => setIsSeller(false)}
          >
            Register as Customer
          </button>
          <button
            className={`${
              isSeller
                ? "bg-green-600 text-white"
                : "bg-white text-green-600"
            } flex-1 py-2 px-4 rounded-r-lg`}
            onClick={() => setIsSeller(true)}
          >
            Register as Seller
          </button>
        </div>
        {isSeller ? (
          // Show seller registration form
          <form onSubmit={handleSubmit} className="w-full md:w-96 flex flex-col gap-4 mt-6">
            
            <input
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />

            <input
              className={`border rounded-md py-2 px-3 focus:outline-none focus:border-green-400 ${
                !isValidEmail ? "border-red-500" : ""
              }`}
              onChange={handleEmailChange}
              type="text"
              placeholder="Email"
            />
            {!isValidEmail && (
              <p className="text-red-500">Please enter a valid email address.</p>
            )}
            <input
              className={`border rounded-md py-2 px-3 focus:outline-none focus:border-green-400 ${
                !isValidPassword ? "border-red-500" : ""
              }`}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
            {!isValidPassword && (
              <p className="text-red-500">
                Please enter a valid password with 8 characters.
              </p>
            )}
            
            <input
              className={`border rounded-md py-2 px-3 focus:outline-none focus:border-green-400 ${
                !isValidPhoneNo ? "border-red-500" : ""
              }`}
              onChange={handlePhoneNoChange}
              type="text"
              placeholder="Phone Number"
            />
            {!isValidPhoneNo && (
              <p className="text-red-500">
                Please enter a valid Phone Number with 11 Digits
              </p>
            )}

            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-md">
              Register
            </button>
            {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          </form>
        ) : (
          // Show customer registration form
          <form onSubmit={handleSubmit} className="w-full md:w-96 flex flex-col gap-4 mt-6">
            
            <input
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />

            <input
              className={`border rounded-md py-2 px-3 focus:outline-none focus:border-green-400 ${
                !isValidEmail ? "border-red-500" : ""
              }`}
              onChange={handleEmailChange}
              type="email"
              placeholder="Email"
            />
            {!isValidEmail && (
              <p className="text-red-500">Please enter a valid email address.</p>
            )}
            <input
              className={`border rounded-md py-2 px-3 focus:outline-none focus:border-green-400 ${
                !isValidPassword ? "border-red-500" : ""
              }`}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
            {!isValidPassword && (
              <p className="text-red-500">
                Please enter a valid password with 8 characters.
              </p>
            )}
            
            <input
              className={`border rounded-md py-2 px-3 focus:outline-none focus:border-green-400 ${
                !isValidPhoneNo ? "border-red-500" : ""
              }`}
              onChange={handlePhoneNoChange}
              type="text"
              placeholder="Phone Number"
            />
            {!isValidPhoneNo && (
              <p className="text-red-500">
                Please enter a valid Phone Number with 11 Digits
              </p>
            )}

            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-md">
              Register 
            </button>
            {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          </form>
           
        )}
      </div>
    </div>
  );
}
