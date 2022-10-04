import AnchorCard from "../../components/anchor-card";
import axios from "axios";
import CreateChallenge from "../../components/create-challenge";
import { ReactElement } from "react";
import Layout from "../../components/layouts/default";


export default function createChallenge() {




    return (<div>
        <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
        <CreateChallenge />
    </div>)
}

createChallenge.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }