"use client";
import { useState } from "react";

interface Note {
  title: string;
  text: string;
}
export default function DiaryPage() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const [titleStyle, setTitleStyle] = useState({});
  const [textStyle, setTextStyle] = useState({});

  //save new notes in the data base

  const addNote = async () => {
    const newNote = {
      title,
      text,
    };

    const sendData = JSON.stringify(newNote);

    const res = await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });
    const data = await res.json();
    console.log(data);
    setTitle("");
    setText("");
  };

  return (
    <div className="main flex justify-end  mt-20  mr-44 ">
      <div className="bg-white   flex flex-col pl-5 pt-5 w-2/5 border-solid border-2 border-gray-300">
        <div className="flex flex-col  ">
          <textarea
            className=" overflow-hidden outline-none  "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="Title:"
          ></textarea>
          <textarea
            rows={20}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder=" Write your notes here ..."
            className="overflow-hidden outline-none "
            value={text}
          ></textarea>
        </div>
        <div className="">
          <button
            title="Add to List"
            className="bg-sky-950 text-white ml-48 p-2"
            onClick={addNote}
          >
            Add to List
          </button>
        </div>
      </div>

      {/* <Styles /> */}
    </div>
  );
}
