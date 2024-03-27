const nodemailer = require("nodemailer");
const crypto = require("crypto");
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import { prismaSeller, prismaCustomer } from "@/lib/prisma";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "asadrizwan001@gmail.com",
    pass: "vexp hsxg gyru uvxp",
  },
});

export async function POST(req) {
    try {
      // Parse the request body as JSON
      const body = await req.json();
      const email = body.email;
      const isSeller = body.isSeller;
      console.log(isSeller)
      if (!email) {
        return NextResponse.json({ message: "Email is missing" }, { status: 400 });
      }
  
      const uuid = crypto.randomBytes(16).toString("hex");
      const salt = Date.now().toString();
      const uniqueString = uuid + salt;
      const hashedOTP = crypto
        .createHash("sha256")
        .update(uniqueString)
        .digest("hex")
        .substring(0, 4);

    await connectMongoDB();
    const currentDateTime = new Date();
    const expiresAt = new Date(currentDateTime.getTime() + 4 * 60 * 1000); // Add 4 minutes (4 * 60 seconds * 1000 milliseconds)

        console.log(expiresAt);
        if(isSeller){
        // Check if an entry with the email exists in the OTP model
        const existingEntry = await prismaSeller.sellerotps.findUnique({
          where: {
            email: email,
          },
        });

        if (existingEntry) {
          // If it exists, update the existing entry
          // existingEntry.otp = hashedOTP;
          // existingEntry.expiresAt = expiresAt;
          // await existingEntry.save();
          return NextResponse.json({ message: "User Already Exists!" }, { status: 400 });

        } else {
          // If it doesn't exist, create a new entry
          await prismaSeller.sellerotps.create({
            data: {
                email: email,
                otp: hashedOTP,
                expiresAt: expiresAt
            }
        });
        }
      }
      else
      {
        const existingEntry = await prismaCustomer.customerotps.findUnique({
          where: {
            email: email,
          },
        });

        if (existingEntry) {
          // If it exists, update the existing entry
          // existingEntry.otp = hashedOTP;
          // existingEntry.expiresAt = expiresAt;
          // await existingEntry.save();
          return NextResponse.json({ message: "User Already Exists!" }, { status: 400 });
          
        } else {
          // If it doesn't exist, create a new entry
          await prismaCustomer.customerotps.create({
            data: {
                email: email,
                otp: hashedOTP,
                expiresAt: expiresAt
            }
        });
        }
      }
    
  
      // Compose the email message
      const mailOptions = {
        from: "asadrizwan001@gmail.com",
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is: ${hashedOTP}`,
      };
  
      // Send the email
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return NextResponse.json({ status: 200 });
      } catch (error) {
        console.log("Email sending failed:", error);
        return NextResponse.json({ message: "OTP can't send to this Email" }, { status: 500 });
      }
    } catch (error) {
      console.error("An error occurred while OTP Generating", error);
      return NextResponse.json({ message: "An error occurred while OTP Generating" }, { status: 400 });
    }
    finally {
      await prismaSeller.$disconnect();
      await prismaCustomer.$disconnect();
    }
  }
  