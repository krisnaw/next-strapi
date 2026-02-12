import {Button} from "@/components/ui/button";
import Link from "next/link";
import {StrapiImage} from "@/components/blocks/StrapiImage";

export function Header({data} : {data: any}) {
  const { logo, cta, navigation } = data;
  return (
    <nav className="fixed top-0 w-full">

      <div className="m-4">
        <div className="mx-auto max-w-7xl py-4 px-2 sm:px-6 lg:px-8 bg-slate-50/70 rounded-xl">
          <div className="relative flex h-16 items-center justify-between">
            <div>
              <StrapiImage width={227}
                             height={120} src={logo.image.url} alt={logo.logoText} />
            </div>

            <ul className="inline-flex space-x-4">
              {navigation.map((menu: any) => (
                <li key={menu.id}>
                  <a href={menu.href}>{menu.text}</a>
                </li>
              ))}
            </ul>

            <div>
              <Button>
                <Link href={cta.href}>{cta.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>


    </nav>
  )
}