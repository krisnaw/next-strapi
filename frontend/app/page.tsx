// async function loader() {
//   const data = await getHomePage();
//   if (!data) notFound();
//   return data;
// }

import {fetchSingleType} from "@/lib/strapi/client";
import {StrapiImage} from "@/components/blocks/StrapiImage";

export default async function Home() {
  // const strapiData = await loader();
  // const {title, description} = strapiData.data;

  const {title, description, image} = await fetchSingleType('tf-home-page', { populate: '*' })

  return (
    <main className="container mx-auto py-6 h-screen">
      <StrapiImage width={500} height={250} src={image.url} alt={image.alternativeText} />
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
    </main>
  )
}
