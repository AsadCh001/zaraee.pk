import { connectMongoDB } from "@/lib/mongodb";
import { prismaAdmin } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { parse } from 'url';

export async function GET(req, res) {
  try {
    await connectMongoDB();
    const parsedUrl = parse(req.url, true);
    const productId = parsedUrl.query.id;

    console.log('Product ID:', productId);
    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    // Fetch the product by ID using Prisma.
    const product = await prismaAdmin.products.findUnique({
      where: { id: productId },
    });

    // If the product is not found, return a 404 status
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    console.log("return:",product)
    // Return the product as JSON
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product by ID server:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
