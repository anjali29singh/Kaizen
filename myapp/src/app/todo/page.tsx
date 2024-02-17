"use client";
import React from "react";
import { useState } from "react";
import TodoComp from "../components/todoComp/todoComp";

export default function TodoPage() {
  const [text, setText] = useState("");
  const [isShowBtnActive, setShowBtnActive] = useState(false);

  return (
    <div className=" main   flex justify-end mt-40  mr-44  ">
      <div className="bg-white  min-h-96 flex flex-row   w-2/5 ">
        {isShowBtnActive ? <TodoComp /> : null}
        <div
          className="inputBox flex flex-col ml-2 mt-4 w-full bg-slate-600 h-10 "
          onClick={() => {
            setShowBtnActive(true);
          }}
          onChange={() => {
            setShowBtnActive(false);
          }}
        >
          <textarea
            className=" outline-none overflow-hidden  "
            placeholder="Create your todo list"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
