import ChallengesList from "../../components/challenges-list";
import LoginManager from "../../components/loginManager";
import AnchorCard from "../../components/anchor-card";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "../../components/layouts/default";

const Challenges: NextPageWithLayout = () => {
  return(
    <>
      <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
      <LoginManager />
      <ChallengesList />
    </>
  )
}

Challenges.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Challenges