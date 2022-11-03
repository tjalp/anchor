import React, { useState } from "react";

import Editor from "@monaco-editor/react";

export default function CodeEditorWindow({ onChange, language, code, theme }) {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };


  
  return (
    <div className="overlay rounded-md overflow-hidden w-1/2 h-96 shadow-4xl dark:shadow-zinc-900 m-2">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};
