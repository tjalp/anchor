import CodeEditor from "../components/code-editor"
import AnchorCard from "../components/anchor-card"


export default function editor() {


    return (<div>
        <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
        <CodeEditor />
    </div>)
}