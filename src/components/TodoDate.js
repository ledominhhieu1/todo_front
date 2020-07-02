import React from "react";
import { useAppState } from "../AppContext";
// import useDateCheck from "../hooks/useDateCheck";
// import useReminderNotification from "../hooks/useReminderNotification";
import styles from "./TodoDate.module.scss";

// Current date at the top of the page
function TodoDate() {
  const { date } = useAppState();

  // useDateCheck();
  // useReminderNotification();
  function handleLogOut() {
		localStorage.clear();
	}
  return (
    <div className={styles.date}>
      <div className={styles.calendar}>
        <div className={styles.day}>{date.dayDisplay}</div>
        <div className={styles.my}>
          <div className={styles.month}>{date.monthDisplay}</div>
          <div className={styles.year}>{date.year}</div>
        </div>
      </div>
      <div className="today">
        <p><a href="/login" onClick={handleLogOut}>Logout</a></p>
        {date.weekday}
      </div>
    </div>
  );
}

export default TodoDate;
