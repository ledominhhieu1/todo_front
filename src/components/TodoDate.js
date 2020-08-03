import React from "react";
import styles from "./TodoDate.module.scss";
import { format } from "date-fns";

// Current date at the top of the page
function TodoDate() {
  let nd = new Date();

  let currentDate = {
    day: format(nd, "dd"),
    dayDisplay: format(nd, "d"),
    month: format(nd, "MM"),
    monthDisplay: format(nd, "MMM"),
    year: format(nd, "y"),
    weekday: format(nd, "EEEE")
  };

  function handleLogOut() {
		localStorage.clear();
	}
  return (
    <div className={styles.date}>
      <div className={styles.calendar}>
        <div className={styles.day}>{currentDate.dayDisplay}</div> 
        <div className={styles.my}>
          <div className={styles.month}>{currentDate.monthDisplay}</div>
          <div className={styles.year}>{currentDate.year}</div>
        </div>
      </div>
      <div className="today">  
        <p><a href="/" onClick={handleLogOut}>Logout</a></p>
        {currentDate.weekday}
      </div>
    </div>
  );
}

export default TodoDate;
