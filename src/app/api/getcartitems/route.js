import { connectMongoDB } from "@/lib/mongodb";
import { prismaAdmin } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const {  sessionEmail } = await req.json();
    console.log(sessionEmail);
    const useremail = sessionEmail;

    await connectMongoDB();

    const cartItems = await prismaAdmin.cart.findMany({
        where: {
            useremail,
        },
        include: {
          product: true,
        },
      });
      console.log(cartItems)
    return NextResponse.json({ cart: cartItems }, { status: 200 });
  } catch (error) {
    console.error('Error Fetching items from Cart:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
