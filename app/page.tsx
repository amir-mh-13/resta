import { connection } from "next/server";

import Navbar from "@/components/layout/Navbar";
import HomePage from "@/components/home/HomePage";

export const instant = false;

export default async function Page() {
	await connection();

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}