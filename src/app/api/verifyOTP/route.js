import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { prismaSeller, prismaCustomer } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email, enteredOTP, isSeller} = await req.json();
    await connectMongoDB();

    console.log("verifyOTP:", isSeller);


    //Check Seller OTP DB
    if(isSeller)
    {

    const otpEntry =  await prismaSeller.sellerotps.findUnique({
      where: {
        email: email,
      },
    });
    if(!otpEntry)
    {
      console.log("User Not exist")
      return NextResponse.json({ message: "User Not exist" }, { status: 400 });
    }

    const currentDateTime = new Date();
            const check = new Date(currentDateTime.getTime() );
            console.log(otpEntry.otp)
          if (otpEntry.expiresAt < check) {
            console.log("The OTP has expired.");
            return NextResponse.json({ message: "OTP Expired" }, { status: 400 });
          }
    
          if (otpEntry.otp === enteredOTP) {
            // OTP is verified, allow the user to proceed
            // You can add your logic here for a successful verification
            console.log("OTP is verified");
            return NextResponse.json({ message: "OTP registered." }, { status: 200 });
          }
          else {
            console.log("Invalid OTP. Please try again.");
            return NextResponse.json({ message: "OTP invalid" }, { status: 400 });
          }
    }


    //Check Customer OTP DB
    else
    {
      const otpEntry = await prismaCustomer.customerotps.findUnique({
        where: {
          email: email,
        },
      });
    if(!otpEntry)
    {
      console.log("User Not exist")
      return NextResponse.json({ message: "User Not exist" }, { status: 400 });
    }

    const currentDateTime = new Date();
            const check = new Date(currentDateTime.getTime() );
            console.log(otpEntry.otp)
          if (otpEntry.expiresAt < check) {
            console.log("The OTP has expired.");
            return NextResponse.json({ message: "OTP Expired" }, { status: 400 });
          }
    
          if (otpEntry.otp === enteredOTP) {
            // OTP is verified, allow the user to proceed
            // You can add your logic here for a successful verification
            console.log("OTP is verified");
            return NextResponse.json({ message: "OTP registered." }, { status: 200 });
          }
          else {
            console.log("Invalid OTP. Please try again.");
            return NextResponse.json({ message: "OTP invalid" }, { status: 400 });
          }

    }

   
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
  finally {
    await prismaCustomer.$disconnect();
    await prismaSeller.$disconnect();
  }
}