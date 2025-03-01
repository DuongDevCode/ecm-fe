import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

type BreadCrumbType = {
  title: string;
  link: string;
};

type BreadCrumbPropsType = {
  items: BreadCrumbType[];
};

export default function BreadCrumb({ items }: BreadCrumbPropsType) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-3">
        <li>
          <div>
            <div className="text-gray-700 hover:text-gray-400 dark:text-slate-300 dark:hover:text-slate-100 cursor-pointer">
              <Link href={'/dashboard'}>
                <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </li>
        {items?.map((item: BreadCrumbType, index: number) => (
          <React.Fragment key={item.title}>
            <ChevronRightIcon className="h-4 w-4" />
            <Link
              href={item.link}
              className={cn(
                "font-medium",
                index === items.length - 1
                  ? "text-foreground pointer-events-none"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
