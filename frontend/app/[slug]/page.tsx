import {getPageBySlug} from "@/data/loaders";
import {notFound} from "next/navigation";

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
      <img src="https://cdn.sanity.io/images/gt37f3ae/production/ccc58de71ce60db5f324318390508abf6deca7f3-1440x281.png?w=3840&q=75&fit=clip&auto=format" alt=""/>
      <h2 className="text-5xl  tracking-tight text-gray-900 sm:text-7xl">
        {blocks.title}
      </h2>
      <p className="mt-8 text-lg  text-pretty text-gray-500 sm:text-xl/8">
        {blocks.description}
      </p>
    </div>
  )
}