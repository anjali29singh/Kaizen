import styles from "./../notepad/notepad.module.css";

interface Note {
  title: string;
  text: string;
}
export default function List({ noteslist }: { noteslist: Note[] }) {
  return (
    <div className={styles.list}>
      <h3>{noteslist[0] ? noteslist[0].title : ""}</h3>
      <p>{noteslist[0] ? noteslist[0].text : ""}</p>
    </div>
  );
}
