import Link from "next/link";

export default function AnchorCard({ title, href, children }) {
  return (
    <>
      <Link href={href}>
        <a>
        <div className="
          transition ease-in-out duration-300
          bg-white
          rounded-xl
          sm:rounded-lg
          shrink-0
          p-4
          text-left
          hover:shadow-lg
          hover:cursor-pointer
          hover:-translate-y-0.5
          dark:bg-zinc-700
          dark:border-zinc-700
          dark:hover:border-zinc-600
          dark:hover:shadow-zinc-900
        ">
          <div className="text-2xl text-black dark:text-white">{title} &rarr;</div>
          <p className="text-xl text-slate-500 dark:text-zinc-300">
            {children}
          </p>
        </div>
        </a>
      </Link>
    </>
  )
}