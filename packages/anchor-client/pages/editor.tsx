import CodeEditor from "../components/code-editor"
import AnchorCard from "../components/anchor-card"
import { NextPageWithLayout } from "./_app"
import { ReactElement } from "react"
import Layout from "../components/layouts/default"

const Editor: NextPageWithLayout = () => {
  return (
    <>
      <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
      <div className="p-4"><CodeEditor /></div>
    </>
  )
}

Editor.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Editor