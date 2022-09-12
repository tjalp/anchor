import AnchorCard from '../components/anchor-card'
import Layout from '../components/layouts/default'

export default function Test() {
  return (
    <>
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-r from-[#f7ff00] to-[#db36a4] bg-clip-text text-transparent">~ 404 ~</span>
      </div>
      <div className="items-center">
        <AnchorCard title="Go Home" href="/">Return to the home page</AnchorCard>
      </div>
    </>
  )
}

Test.getLayout = function getLayout(page) {
  return (<Layout>{page}</Layout>)
}
