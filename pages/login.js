import AnchorCard from "../components/anchor-card";
import Layout from "../components/layouts/default";
import GoogleLogin from "../components/google-login";

export default function login() {
    return (
        <div>
        <script src="https://accounts.google.com/gsi/client" async defer/>
        <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
        <GoogleLogin />
        </div>
    )
}

login.getLayout = function getLayout(page) {
    return (<Layout>{page}</Layout>);
}