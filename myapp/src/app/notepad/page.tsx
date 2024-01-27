"use client";
import { useState } from "react";
import styles from "./notepad.module.css";
import Styles from "../components/Styles/Styles";

interface Note {
  title: string;
  text: string;
}
export default function DiaryPage() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

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
    <div className={styles.main}>
      <div className={styles.writeSection}>
        <textarea
          placeholder="Title :"
          className={styles.titleBox}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <textarea
          rows={35}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Write your notes here ..."
          className={styles.diaryText}
          value={text}
        ></textarea>
        <button title="Add to List" className={styles.addBtn} onClick={addNote}>
          Add to List
        </button>
      </div>
      <Styles />
    </div>
  );
}
