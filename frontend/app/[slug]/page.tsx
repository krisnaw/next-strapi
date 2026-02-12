import {getPageBySlug} from "@/data/loaders";
import {notFound} from "next/navigation";

async function loader(slug: string) {
  const {data} = await getPageBySlug(slug);
  if (data.length === 0 ) notFound();
  return { blocks: data[0] };
}


export default async function Page({params}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { blocks } = await loader(slug);
  return (
    <div>
      <img loading="eager" width={1200} height={799} src={`http://localhost:1337${blocks.image.url}`} alt={blocks.image.alternativeText}/>

      <h2 className="text-5xl  tracking-tight text-gray-900 sm:text-7xl">
        {blocks.title}
      </h2>
      <p className="mt-8 text-lg  text-pretty text-gray-500 sm:text-xl/8">
        {blocks.description}
      </p>
    </div>
  )
}