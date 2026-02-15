import {StrapiImage} from "@/components/blocks/StrapiImage";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ChevronDown} from "lucide-react";

type NavLink = {
  text: string;
  href: string;
  isExternal: boolean;
};

type Section = {
  heading: string;
  links: NavLink[];
};

type DropdownItem = {
  title: string;
  sections: Section[];
};

function normalizeDropdown(dropdown: DropdownItem[]) {
  return dropdown.map(({ title, sections }) => ({
    title,
    links: sections.flatMap(section => section.links),
  }));
}

export function Header({data} : {data: any}) {
  const { logo, dropdown, link, cta } = data;
  const normalizedDropdown = normalizeDropdown(dropdown);
  console.log(normalizedDropdown);
  return (
    <nav className="fixed top-0 w-full">

      <div className="m-4">
        <div className="mx-auto max-w-7xl py-4 px-2 sm:px-6 lg:px-8 bg-slate-50/70 rounded-xl">
          <div className="relative flex h-16 items-center justify-between">
            <div>
              <StrapiImage width={227}
                             height={120} src={logo.image.url} alt={logo.logoText} />
            </div>

            <ul className="flex gap-6">
              {normalizedDropdown.map(({ title, links }) => (
                <li key={title} className="relative group">
                  <button className="font-medium inline-flex gap-2">
                    {title}
                    <ChevronDown />
                  </button>

                  <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2">
                    {links.map(({ text, href, isExternal }) => (
                      <li key={text}>
                        <a
                          href={href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul className="inline-flex space-x-4">
              {link.map((menu: any) => (
                <li key={menu.id}>
                  <a href={menu.url}>{menu.title}</a>
                </li>
              ))}
            </ul>

            <div>
              <Button>
                <Link href={cta.url}>{cta.title}</Link>
              </Button>

            </div>
          </div>
        </div>
      </div>


    </nav>
  )
}