import { connectMongoDB } from "@/lib/mongodb";
import { prismaAdmin } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { productId, total_price, quantity, sessionEmail } = await req.json();
    console.log(sessionEmail);
    console.log(productId);
    console.log(total_price);
    console.log(quantity);

    await connectMongoDB();

    // Check if a cart entry with the same productId and useremail already exists
    const existingCartItem = await prismaAdmin.cart.findFirst({
      where: {
        productId: productId,
        useremail: sessionEmail,
      },
    });

    if (existingCartItem) {
      // If it exists, update the existing entry with the new total_price and quantity
      await prismaAdmin.cart.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          total_price: total_price,
          quantity: quantity,
        },
      });
    } else {
      // If it doesn't exist, create a new entry
      await prismaAdmin.cart.create({
        data: {
          productId: productId,
          total_price: total_price,
          quantity: quantity,
          useremail: sessionEmail,
        },
      });
    }

    return NextResponse.json({ message: "Cart Added Successfully" }, { status: 200 });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
