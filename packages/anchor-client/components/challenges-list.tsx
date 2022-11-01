import Link from "next/link"

export default function ChallengesList({challenge_id, title, desc, completed}) {

  return (
    <Link href={`/challenges/${challenge_id}`}>
      <div className="my-4 p-5 border border-slate-200 dark:border-neutral-600 bg-slate-50 dark:bg-zinc-700 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 cursor-pointer">
          <div className="text-2xl text-slate-900 dark:text-neutral-50">{title}</div>
          <div className="text-lg text-slate-600 dark:text-neutral-400">
            <div>{desc}</div>
            <div>{`voltooid: ${completed}`}</div>
          </div>
      </div>
    </Link>
  )
}