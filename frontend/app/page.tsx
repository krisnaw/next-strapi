import {getHomePage} from "@/data/loaders";
import {notFound} from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return data;
}

export default async function Home() {
  const strapiData = await loader();
  const {title, description, blocks} = strapiData.data;
  console.log(blocks);
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
    </main>
  )
}
