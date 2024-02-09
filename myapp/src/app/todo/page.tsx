"use client";
import React from "react";
import { useState } from "react";

export default function TodoPage() {
  const [text, setText] = useState("");
  return (
    <div className=" main   flex justify-center mt-40 ">
      <div className="bg-white min-h-96  w-5/12">
        <div className="inputBox ml-6 mt-4  ">
          <textarea
            className="textArea  outline-none overflow-hidden w-5/12 "
            placeholder="Enter your task"
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
