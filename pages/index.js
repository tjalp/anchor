import Link from 'next/link'
import AnchorCard from '../components/anchor-card'
import Layout from '../components/layouts/default'

export default function Home() {
  return (
    <div>
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        This is <span className="font-black bg-gradient-to-t from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">⚓Anchor.</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
        <AnchorCard title="Toggle Dark Mode (WIP)" href="">Switch between light and dark mode</AnchorCard>
        <AnchorCard title="Anchor Repository" href="https://github.com/tjalp/anchor/">Check out the source code of Anchor</AnchorCard>
        <AnchorCard title="tjalp's Profile" href="https://github.com/tjalp/">Take a look at tjalp's profile on GitHub</AnchorCard>
        <AnchorCard title="Test Page" href="/test">Enter the temporary test page</AnchorCard>
        <AnchorCard title="404" href="/404">Navigate to a non-existent page</AnchorCard>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (<Layout>{page}</Layout>)
}
