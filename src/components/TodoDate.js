import React from "react";
// import useDateCheck from "../hooks/useDateCheck";
// import useReminderNotification from "../hooks/useReminderNotification";
import styles from "./TodoDate.module.scss";

// Current date at the top of the page
function TodoDate() {
  // const { date } = useAppState();

  // useDateCheck();
  // useReminderNotification();
  function handleLogOut() {
		localStorage.clear();
	}
  return (
    <div className={styles.date}>
      <div className={styles.calendar}>
        <div className={styles.day}></div> 
        {/* {date.dayDisplay} */}
        <div className={styles.my}>
          <div className={styles.month}></div>
            {/* {date.monthDisplay} */}
          <div className={styles.year}></div>
          {/* {date.year} */}
        </div>
      </div>
      <div className="today">
        <p><a href="/" onClick={handleLogOut}>Logout</a></p>
        {/* {date.weekday} */}
      </div>
    </div>
  );
}

export default TodoDate;
