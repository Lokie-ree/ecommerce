import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Hero } from "./components";

export default async function Home() {
  const products = await client.fetch(groq`*[_type=="product"]`);
  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
    </main>
  );
}
