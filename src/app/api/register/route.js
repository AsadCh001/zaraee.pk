import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prismaAdmin } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { name, email, password, phoneNo, isSeller } = await req.json();
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(phoneNo)
    await connectMongoDB();
    if(isSeller)
    {
      const user = await prismaAdmin.sellers.findUnique({
        where: {
          email: email,
        },
      });
      if(user)
      {
        console.log("Seller exist")
        return NextResponse.json({ message: "Seller Already Exists" }, { status: 400 });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(name)
      
      const result = await prismaAdmin.sellers.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword,
            phoneNo: phoneNo
        }
    });
    console.log("seller registered Successfully")

      return NextResponse.json({ message: "Seller registered." }, { status: 200 });
  }
  else
  {
    const user = await prismaAdmin.customers.findUnique({
      where: {
        email: email,
      },
    });
    if(user)
    {
      console.log("User exist")
      return NextResponse.json({ message: "Customer Already Exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(name)
    
    await prismaAdmin.customers.create({
      data: {
          name: name,
          email: email,
          password: hashedPassword,
          phoneNo: phoneNo
      }
  });
console.log("customer registered Successfully")
    return NextResponse.json({ message: "Customer registered." }, { status: 200 });
  }
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
  finally {
    await prismaAdmin.$disconnect();
  }
}
