import React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
export default function CheckboxComp() {
  const [text, setText] = useState<any>();
  return (
    <div className="flex flex-row ">
      <div className="checkbox">
        <Checkbox color="primary" size="small" />
      </div>

      <div className="textArea w-96 mt-1">
        <textarea
          cols={48}
          className="outline-none overflow-hidden"
          placeholder="create your todo list here"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </div>
    </div>
  );
}
