import { connectMongoDB } from "@/lib/mongodb";
import { prismaAdmin } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectMongoDB();

    const allProducts = await prismaAdmin.products.findMany();
    console.log(allProducts);

    return NextResponse.json(allProducts, { status: 200 });
  } catch (error) {
    console.error("Error fetching products server:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
