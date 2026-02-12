import {getPageBySlug} from "@/data/loaders";
import {notFound} from "next/navigation";
import {StrapiImage} from "@/components/blocks/StrapiImage";

async function loader(slug: string) {
  const {data} = await getPageBySlug(slug);
  if (data.length === 0 ) notFound();
  console.log(data[0].blocks)
  return { data: data[0], blocks: data[0].blocks[0] };
}


export default async function Page({params}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { data, blocks } = await loader(slug);
  console.log(blocks.headline)
  return (
    <div className="w-full bg-white">
      <div className="h-screen">
        <StrapiImage className="object-cover max-h-60"
          width={2800} height={281} sizes="(max-width: 2800px) 100vw, 2800px"
                     src={data.image.url}
                     alt={data.image.alternativeText}
        />

        <div className=" mx-auto max-w-5xl text-center py-24 sm:py-32">
          <h2 className="text-5xl  tracking-tight text-gray-900 sm:text-7xl">
            {data.title}
          </h2>
          <p className="mt-8 text-lg  text-pretty text-gray-500 sm:text-xl/8">
            {data.description}
          </p>
        </div>
      </div>

      <div>

        <div className="flex gap-8 items-center mx-auto max-w-7xl py-4 px-2 sm:px-6 lg:px-8">
          <StrapiImage className="object-cover  rounded-md"
                       width={616} height={422} sizes="(max-width: 2800px) 100vw, 2800px"
                       src={blocks.image.url}
                       alt={blocks.image.alternativeText}
          />

          <div>
            <h4 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              {blocks.headline}
            </h4>
            <div className="whitespace-break-spaces mt-6 text-lg/8 text-gray-600" dangerouslySetInnerHTML={{ __html: blocks.content }} />
          </div>
        </div>

      </div>

    </div>
  )
}