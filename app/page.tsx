import LandingPage from "@/components/LandingPage";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();

  // if no user is logged in, render the public landing page
  if (!user) return <LandingPage />;

  // if user is logged in, redirect them to the events page
  return redirect("/events");
}
