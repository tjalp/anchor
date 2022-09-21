import AnchorCard from "../components/anchor-card";
import CreatePost from "../components/create-post";

export default function makePost() {


    return (<div>
        <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
        <CreatePost />
    </div>)
}