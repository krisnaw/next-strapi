// async function loader() {
//   const data = await getHomePage();
//   if (!data) notFound();
//   return data;
// }

import {fetchSingleType} from "@/lib/strapi/client";

export default async function Home() {
  // const strapiData = await loader();
  // const {title, description} = strapiData.data;

  const {title, description} = await fetchSingleType('home-page')


  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
    </main>
  )
}
