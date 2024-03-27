"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OTPVerification () {

    const [enteredOTP, setEnteredOTP] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [isSeller, setIsSeller] = useState(false);
    const [verificationError, setVerificationError] = useState("");

    const router = useRouter();
  
    useEffect(() => {
        // Use localStorage here to retrieve the data only on the client side.
        const data = localStorage.getItem("registrationData");
        console.log(data)
        if (!data) {
          console.log("Registration Data is Empty");
        } else {
          const parsedData = JSON.parse(data);
          // Now you can use parsedData in your component
        setEmail(parsedData.email);
        setPassword(parsedData.password);
        setPhoneNo(parsedData.phoneNo);
        setName(parsedData.name);
        setIsSeller(parsedData.isSeller);
        localStorage.clear();
        }
      }, []); 
    console.log(Date())
    const handleVerifyOTP = async () => {
        try {

          const response = await fetch("/api/verifyOTP", {
            method: "POST",
            body: JSON.stringify({
              email,
              enteredOTP,
              isSeller,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.status == 200) {
            // OTP generation successful, extract response data if needed
            console.log("OTP Verified")
            const response1 = await fetch("/api/register", {
              method: "POST",
              body: JSON.stringify({
                email,
                name,
                password,
                phoneNo,
                enteredOTP,
                isSeller,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response1.status == 200) {
                console.log("Registered Successfully");
                router.push("/login")
            }
            else {
              setVerificationError("Not Registered Successfully");
            }


          } else {
            setVerificationError("OTP Expired or invalid");

          }
        } catch (error) {
          console.error("Error during OTP verification:", error);
          setVerificationError("An error occurred during OTP verification.");
        }
      }
      
    return (


      <div className="grid place-items-center mt-7">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4">OTP Verification</h1>
          <p className="text-xl my-4">An OTP has been sent to your Email Address</p> <br />
          <input
          className="border rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
            onChange={(e) => setEnteredOTP(e.target.value)}
            type="text"
            placeholder="Enter OTP"
          />
          <button
            onClick={handleVerifyOTP}
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
          >
            Verify OTP
          </button>
          {verificationError && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{verificationError}</div>
          )}
        </div>
      </div>
    );
  }