import ChallangesList from "../../components/challangesList";
import LoginManager from "../../components/loginManager";
import AnchorCard from "../../components/anchor-card";

export default function challangesPage() {


    return (<div>
        <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
        <LoginManager />
        <ChallangesList />
    </div>)

}