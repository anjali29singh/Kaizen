"use client";
import { UserButton } from "@clerk/nextjs";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  const handleClick = () => {
    window.location.href = "/home";
  };
  return (
    <div className={styles.main}>
      <h1 className={styles.appName}>Kaizen</h1>
      <div className={styles.description}>
        All in one productive create notes , tasks , schedules and more at one
        place
      </div>

      {/* create account or login  */}
      <button className={styles.startBtn} onClick={handleClick}>
        Get Started
      </button>

      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
}
