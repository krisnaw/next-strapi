import {getPageBySlug} from "@/data/loaders";
import {notFound} from "next/navigation";
import {StrapiImage} from "@/components/blocks/StrapiImage";

async function loader(slug: string) {
  const {data} = await getPageBySlug(slug);
  if (data.length === 0 ) notFound();
  console.log(data)
  return { blocks: data[0] };
}


export default async function Page({params}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { blocks } = await loader(slug);
  return (
    <div>
      <StrapiImage src={blocks.image.url} width={227}
                   height={120} alt={blocks.image.alternativeText} />
      <h2 className="text-5xl  tracking-tight text-gray-900 sm:text-7xl">
        {blocks.title}
      </h2>
      <p className="mt-8 text-lg  text-pretty text-gray-500 sm:text-xl/8">
        {blocks.description}
      </p>
    </div>
  )
}