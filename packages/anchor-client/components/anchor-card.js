import Link from "next/link";

export default function AnchorCard({ title, href, children }) {
  return (
    <>
      <Link href={href}>
        <div className="
          transition ease-in-out duration-200
          bg-white
          rounded-xl
          sm:rounded-lg
          shrink-0
          p-4
          text-left
          shadow-xl
          hover:cursor-pointer
          hover:bg-slate-100
          dark:bg-zinc-700
          dark:hover:bg-zinc-600
          dark:border-zinc-700
          dark:hover:border-zinc-600
        ">
          <div className="text-2xl text-black dark:text-white">{title} &rarr;</div>
          <p className="text-xl text-slate-500 dark:text-zinc-300">
            {children}
          </p>
        </div>
      </Link>
    </>
  )
}