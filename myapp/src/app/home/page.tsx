import styles from "./home.module.css";

import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.account}>
        <span className="material-symbols-outlined">account_circle</span>
        <Link
          href="/account"
          style={{ textDecoration: "none", padding: "5px" }}
        >
          Account
        </Link>
      </div>
      <div>
        <span className="material-symbols-outlined">description</span>
        <Link
          href="/notepad"
          style={{ textDecoration: "none", padding: "5px" }}
        >
          Notes
        </Link>
      </div>
      <div>
        <span className="material-symbols-outlined">task_alt</span>
        <Link href="/tasks" style={{ textDecoration: "none", padding: "5px" }}>
          Tasks
        </Link>
      </div>
    </div>
  );
}
