import React from "react";
import {Accordion, AccordionButton, AccordionItem, AccordionPanel} from "@reach/accordion";
import "@reach/accordion/styles.css";
import {useAppReducer, useItems} from "../AppContext";
import Progress from "./Progress";
import AddItemForm from "./AddItemForm";
import Item from "./Item";
import styles from "./ItemList.module.scss";
import arrow from "../img/arrow.svg";
import alldone from "../img/alldone.svg";
import axios from "axios";

// List of todo items
function ItemList() {
  const dispatch = useAppReducer();
    const [data, setData] = React.useState(useItems());
    React.useEffect(() => {
      axios({
        method: 'get',
        url: 'http://localhost:5321/task',
        headers: {
            'Authorization': localStorage.getItem('isAuth')
        },
    }).then(res => {
            const pendingArr = res.data.tasks.filter(item => item.isCompleted === false);
            // const pausedArr = res.filter(item => item.status === "paused");
            const completedArr = res.data.tasks.filter(item => item.isCompleted === true);
            const pending = [...data.pending, ...pendingArr];
            // const paused = [...data.paused, ...pausedArr];
            const completed = [...data.completed, ...completedArr];
            // console.log(pending, completed);
            setData({
                pending: pending,
                // paused: paused,
                completed: completed
            })
        });
    }, []);
    return (
        <div className="item-list">
            <Progress/>
            <AddItemForm/>
            {data.pending.length > 0 ? (
                <>
                    {data.pending.map(item => {
                        return <Item item={item} key={item._id}/>;
                    })}
                </>
            ) : (
                <div className={styles.alldone}>
                    <img src={alldone} alt="Nothing to do!"/>
                </div>
            )}
            <Accordion collapsible multiple>
                {/* {data.paused.length > 0 && (
                    <AccordionItem>
                        <AccordionButton className={styles.toggle}>
                            <img src={arrow} alt="Do Later Toggle"/>
                            <span>Do Later</span>
                        </AccordionButton>
                        <AccordionPanel className={styles.panel}>
                            {data.paused &&
                            data.paused.map(item => {
                                return <Item item={item} key={item.key}/>;
                            })}
                        </AccordionPanel>
                    </AccordionItem>
                )} */}
                {data.completed.length > 0 && (
                    <AccordionItem>
                        <AccordionButton className={styles.toggle}>
                            <img src={arrow} alt="Completed Toggle"/> <span>Completed</span>
                        </AccordionButton>
                        <AccordionPanel className={styles.panel}>
                            {data.completed &&
                            data.completed.map(item => {
                                return <Item item={item} key={item._id}/>;
                            })}
                        </AccordionPanel>
                    </AccordionItem>
                )}
            </Accordion>
            {(data.completed.length > 0 ) && (  //|| data.paused.length > 0
                <div className={styles.reset}>
                    <button
                        onClick={() => {
                            dispatch({type: "RESET_ALL"});
                        }}
                    >
                        reset progress
                    </button>
                </div>
            )}
        </div>
    );
}
export default ItemList;