import React from "react";
import { useAppReducer } from "../AppContext";
import styles from "./Item.module.scss";
import axios from 'axios';

// Individual todo item
function Item({ item }) {
  const dispatch = useAppReducer();
  let text = item.value;
  // let paused = item.status === "paused";
  let completed = item.isCompleted === true;
  let itemKey = item._id;

  function deleteItem() {
    dispatch({ type: "DELETE_ITEM", item });
    axios({
      method: 'del',
      url: 'http://localhost:5321/task/' + itemKey, 
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        isRemoved: true
      }
    })
  }

  // function pauseItem() {
  //   const pausedItem = { ...item, status: "paused" };
  //   dispatch({ type: "UPDATE_ITEM", item: pausedItem });
  // }

  // function resumeItem() {
  //   const pendingItem = { ...item, status: "pending" };
  //   dispatch({ type: "UPDATE_ITEM", item: pendingItem });
  // }

  function completeItem() {
    // const completedItem = { ...item, isCompleted: true };
    // dispatch({ type: "UPDATE_ITEM", item: completedItem });
    axios({
      method: 'patch',
      url: 'http://localhost:5321/task/' + itemKey, 
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        isCompleted: true
      }
    })
  }

  return (
    <div className={styles.item} tabIndex="0">
      <div className={styles.itemName}>{text}</div>
      <div
        className={`${styles.buttons} ${completed ? styles.completedButtons : ""}`}
      >
        <button className={styles.delete} onClick={deleteItem} tabIndex="0"></button>
        {/* {!paused && !completed && (
          <button className={styles.pause} onClick={pauseItem} tabIndex="0"></button>
        )}
        {paused && !completed && (
          <button
            className={styles.resume}
            onClick={resumeItem}
            tabIndex="0"
          ></button>
        )} */}
        {!completed && (
          <button
            className={styles.complete}
            onClick={completeItem}
            tabIndex="0"
          ></button>
        )}
      </div>
    </div>
  );
}

export default Item;
