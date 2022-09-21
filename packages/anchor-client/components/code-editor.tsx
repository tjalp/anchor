import CodeEditorWindow from "./code-editor-window";

export default function CodeEditor() {
  return (<div>
    <CodeEditorWindow onChange={() => { }} language="javascript" code="let x = 0;" theme="a" />
  </div>)
}