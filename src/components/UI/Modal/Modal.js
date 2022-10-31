import React, {Component, useEffect} from "react";
import classes from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'

const Modal = (props) => {
    return (
        <React.Fragment>
            <BackDrop show={props.show} clicked={props.cancel}/>
            <div className={classes.Modal}
                 style={{transform: props.show ? "translateY(0)" : "translateY(-100vh)"}}>
                {props.children}
            </div>
        </React.Fragment>
    )
}
export default Modal;