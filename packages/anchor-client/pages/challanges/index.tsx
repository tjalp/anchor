import ChallangesList from "../../components/challenges-list";
import LoginManager from "../../components/loginManager";
import AnchorCard from "../../components/anchor-card";

export default function challangesPage() {


    return (<div>
        <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
        <LoginManager />
        <ChallangesList />
    </div>)

}