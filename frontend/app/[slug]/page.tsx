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
    <div className="w-full bg-white">
      <div className="h-screen">
        {/*<StrapiImage className="object-cover max-h-60"*/}
        {/*  width={2800} height={281} sizes="(max-width: 2800px) 100vw, 2800px"*/}
        {/*             src={blocks.image.url}*/}
        {/*             alt={blocks.image.alternativeText}*/}
        {/*/>*/}

        <div className=" mx-auto max-w-5xl text-center py-24 sm:py-32">
          <h2 className="text-5xl  tracking-tight text-gray-900 sm:text-7xl">
            {blocks.title}
          </h2>
          <p className="mt-8 text-lg  text-pretty text-gray-500 sm:text-xl/8">
            {blocks.description}
          </p>
        </div>
      </div>
    </div>
  )
}