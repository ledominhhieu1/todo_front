import React, { Component } from 'react';
import styles from "./ItemList.module.scss";
import arrow from "../img/arrow.svg";
import alldone from "../img/alldone.svg";
import AddItemForm from './AddItemForm';
import Item from './Item';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';

import { Button } from 'react-bootstrap';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accorditionCompleted: true
        };
        
      }

    CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <button
                type="button"
                style={{ backgroundColor: 'pink' }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }
    render() {
        var data = [];
        data = this.props.todotodo;
        console.log(data);
        return (
            <div className="item-list">

                <AddItemForm />
                {data.length > 0 ? (
                    <>
                        {data.map(item => {
                             if (item.isCompleted === false || item.isRemoved ===false) {
                                return (<Item item={item} key={item._id} />);
                            }
                            
                        })}
                    </>
                ) : (
                        <div className={styles.alldone}>
                            <img src={alldone} alt="Nothing to do!" />
                        </div>
                    )}

                <div>
                
                <a href onClick={()=>this.setState({accorditionCompleted:!this.state.accorditionCompleted}) }><span class="badge badge-info"><h3 style={{color:'white'}}>Completed</h3></span></a>
                    {this.state.accorditionCompleted ===true ?data.map((item) => {
                    if (item.isCompleted === true || item.isRemoved ===false) {
                        return (<Item item={item} key={item._id} />);
                    }
                    
                }):<></>}

                </div>
            </div>
        );
    }
}

export default ListItem;