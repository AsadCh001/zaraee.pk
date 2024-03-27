import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
    if (!session) redirect("/");

    return (
      <>
      <main className="flex justify-center mt-20 font-bold text-4xl"> <h1 > Welcome to Dashboard Page </h1></main>
      </>
    )
  }
export default Dashboard