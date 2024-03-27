"use client"
import { useState } from "react";
import SellerLoginPage from "./SellerLoginPage";
import LoginForm from "./LoginForm";

export default function AuthLayout() {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <>
      {isSeller ? (
        <SellerLoginPage isSeller={isSeller} setIsSeller={setIsSeller} />
      ) : (
        <LoginForm isSeller={isSeller} setIsSeller={setIsSeller} />
      )}
    </>
  );
}
