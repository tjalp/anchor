import React, { useState } from "react";

import Editor from "@monaco-editor/react";

export default function CodeEditorWindow({ onChange, language, code, theme }) {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };


  
  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl dark:shadow-zinc-900">
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
